﻿using System;
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
using ReactBlog.Core.Identity;
using ReactBlog.Core.Interfaces;
using ReactBlog.Infrastructure;
using ReactBlog.Infrastructure.Constants;
using ReactBlog.Infrastructure.Data;
using ReactBlog.Infrastructure.Email;
using ReactBlog.Infrastructure.Validators;
using ReactBlog.ViewModels;

namespace ReactBlog.Controllers
{

    [Produces("application/json")]
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly BlogContext _context;
        private readonly IEmailTemplateSender _emailSender;
        public AuthController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            BlogContext context,
            IEmailTemplateSender emailSender)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _context = context;
            _emailSender = emailSender;
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
        /// <returns> JWT token wich cotains additional information </returns>
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
            return Ok(new {token=token,isConfirmed=user.EmailConfirmed});
        }

        /// <summary>
        /// Register in a system and automate login
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///     POST /auth/register
        ///     {
        ///         "firstName":"Vlad",
        ///         "lastNane":"Vladovich"
        ///         "email":"example@gmail.com",
        ///         "password":"examplePass"
        ///         "confirmPassword":"examlePass"
        ///     }
        ///     
        /// </remarks>
        /// <returns> JWT token wich cotains additional information </returns>
        /// <response code="201"> Successed created user and login in system.Return a JWT token </response>
        /// <reponse code="400"> Return errors </reponse>
        [HttpPost("register")]
        [AllowAnonymous]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public async Task<IActionResult> RegisterAsync([FromBody]RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                var errors = CustomValidator.GetErrorsByModel(ModelState);
                return BadRequest(errors);
            }

            using (var transaction = _context.Database.BeginTransaction())
            {
                try
                {
                    var userRegistered = new ApplicationUser
                    {
                        UserName = model.Email,
                        Email = model.Email,
                        FirstName = model.FirstName,
                        LastName = model.LastName,
                        IsPromotions = model.Promotions
                    };
                    var result = await _userManager.CreateAsync(userRegistered, model.Password);
                    if (!result.Succeeded)
                    {
                        var errors = CustomValidator.GetErrorsByIdentityResult(result);
                        return BadRequest(errors);
                    }
                    else
                    {
                        var user = await _userManager.FindByNameAsync(model.Email);

                        // Generate an email verification code
                        var emailVerificationCode = await _userManager.GenerateEmailConfirmationTokenAsync(user);

                        //Generate url for confirmation email
                        var confirmationUrl = $"https://{Request.Host.Value}/confirmation?user={user.Id}&code={emailVerificationCode}";

                        // Email to the user the verification code
                        ReactBlogEmailSender mailService = new ReactBlogEmailSender(_emailSender);
                        await mailService.SendUserVerificationEmail(null, user.Email, confirmationUrl);



                    }
                    result = await _userManager.AddToRoleAsync(userRegistered, "User");
                    if (!result.Succeeded)
                    {
                        var errors = CustomValidator.GetErrorsByIdentityResult(result);
                        return BadRequest(errors);
                    }

                    return await this.LoginAsync(new LoginViewModel() { Email = model.Email, Password = model.Password });
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    return BadRequest(new { error = ex.Message });
                }
            }

        }
        [HttpPost]
        [Route("verify/email/{userId}/{emailToken}")]
        public async Task<IActionResult> VerifyEmail(string userId,string emailToken)
        {
            //Get the user
            var user = await _userManager.FindByIdAsync(userId);

            //If user is null
            if (user == null)
            {
                return BadRequest(new { error = "User not found" });
            }

            //If we find the user ...

            //Verify the email token
            var result=await _userManager.ConfirmEmailAsync(user, emailToken);
            if (result.Succeeded)
                return Ok();

            var errors = CustomValidator.GetErrorsByIdentityResult(result);
            return BadRequest(errors);
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
            var signinKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(IoCContainer.Configuration["Jwt:SecretKey"]));
            var signinCredentials = new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256);

            // Generate the jwt token
            var jwt = new JwtSecurityToken(
                issuer:IoCContainer.Configuration["Jwt:Issuer"],
                signingCredentials: signinCredentials, 
                claims: claims, 
                audience:IoCContainer.Configuration["Jwt:Audience"],
                expires: now.Add(TimeSpan.FromDays(1))
                );
            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }
    }
}