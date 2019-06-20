using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using ReactBlog.Core.Interfaces;
using ReactBlog.Infrastructure.Constants;
using ReactBlog.Infrastructure.Identity;
using ReactBlog.Infrastructure.Validators;
using ReactBlog.ViewModels;

namespace ReactBlog.Controllers
{

    [Produces("application/json")]
    [Route("api/[controller]")]
    [Authorize]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IAppLogger<AuthController> _logger;
        public AuthController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IAppLogger<AuthController> logger)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
        }


        /// <summary>
        /// Sign in a system
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///     POST /auth/login
        ///     {
        ///         "email":"example@gmail.com",
        ///         "password":"examplePass"
        ///     }
        ///     
        /// </remarks>
        /// <returns> JWT token wich cotains additional inforation </returns>
        /// <response code="200"> Successed login.Return a JWT token </response>
        /// <reponse code="400"> Return errors </reponse>
        [HttpPost("login")]
        [AllowAnonymous]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public async Task<IActionResult> LoginAsync([FromBody]LoginViewModel credentials)
        {

            if (!ModelState.IsValid)
            {
                var errors = CustomValidator.GetErrorsByModel(ModelState);
                return BadRequest(errors);
            }

            // TODO: Remember me option!
            var result = await _signInManager.PasswordSignInAsync(credentials.Email, credentials.Password, false, false);
            if (!result.Succeeded)
            {
                var errors = await CustomValidator.GetErrorsBySignInResultAsync(result,_userManager, credentials.Email);
                return BadRequest(errors);
            }
            var user = await _userManager.FindByEmailAsync(credentials.Email);

            string token = await CreateTokenAsync(user);
            return Ok(token);
        }
        private async Task<string> CreateTokenAsync(ApplicationUser user)
        {
            var isAdmin = await _userManager.IsInRoleAsync(user, Roles.Admin);
            var isTeacher = await _userManager.IsInRoleAsync(user, Roles.Teacher);
            var claims = new Claim[]
               {
                    new Claim(JwtRegisteredClaimNames.Email,user.Email),
                    new Claim("isAdmin",isAdmin.ToString()),
                    new Claim("isTeacher",isTeacher.ToString())
               };
            var now = DateTime.UtcNow;
            var signinKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("bd5b0c50-fe1f-4fcb-82b9-56999e82e54f"));
            var signinCredentials = new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256);
            var jwt = new JwtSecurityToken(signingCredentials: signinCredentials, claims: claims, expires: now.Add(TimeSpan.FromDays(1)));
            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }
    }
}