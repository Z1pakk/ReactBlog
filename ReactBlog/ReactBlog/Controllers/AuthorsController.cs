using Microsoft.AspNetCore.Mvc;
using ReactBlog.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorsController : ControllerBase
    {
        private readonly IAuthorsViewModelService _authorsViewModelService;

        public AuthorsController(IAuthorsViewModelService authorsViewModelService)
        {
            _authorsViewModelService = authorsViewModelService;
        }
        /// <summary>
        /// Get top authors
        /// </summary>
        /// <param name="searchText">Text for search authors</param>
        /// <param name="page">Number for skip elements</param>
        /// <param name="countItems">Request count posts for response</param>
        /// <returns> List of authors for authorsPage </returns>
        /// <response code="200"> Successed response.  </response>
        /// <reponse code="400"> Return errors </reponse>
        [HttpGet("topAuthors")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public async Task<IActionResult> GetTopAuthors(string searchText="",int page=1,int countItems = 5)
        {
            var topAuthors = await _authorsViewModelService.Authors(searchText, page,countItems);
            return Ok(topAuthors);
        }
    }
}
