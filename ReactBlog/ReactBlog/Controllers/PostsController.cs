using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactBlog.Interfaces;

namespace ReactBlog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IPostsViewModelService _postsViewModelService;

        public PostsController(IPostsViewModelService postsViewModelService)
        {
            _postsViewModelService = postsViewModelService;
        }
        /// <summary>
        /// Get posts for carousel which can put a count items for return
        /// </summary>
        /// <param name="countItems">Request count posts for response</param>
        /// <returns> List of posts for carousel </returns>
        /// <response code="200"> Successed response.  </response>
        /// <reponse code="400"> Return errors </reponse>
        [HttpGet("topPosts")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public async Task<IActionResult> GetTopPosts(int countItems=5)
        {
            var topPosts = await _postsViewModelService.TopPosts(countItems);
            return Ok(topPosts);
        }


        /// <summary>
        /// Get all posts sorted by likes
        /// </summary>
        /// <param name="page">Number for skip elements</param>
        /// /// <param name="countItems">Request count posts for response</param>
        /// <param name="authorUserName">Author username for specification</param>
        /// <returns> List of posts for mail page </returns>
        /// <response code="200"> Successed response.  </response>
        /// <reponse code="400"> Return errors </reponse>
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [HttpGet("mainPosts")]
        public async Task<IActionResult> GetMainPosts(int tagId,int page = 1,int countItems = 9,string authorUserName=null)
        {
            var mainPosts = await _postsViewModelService.MainPosts(tagId, page,countItems, authorUserName);
            return Ok(mainPosts);
        }


        /// <summary>
        /// Get detailed info about post
        /// </summary>
        /// <param name="id">Id of post</param>
        /// <returns> Info about post </returns>
        /// <response code="200"> Successed response.  </response>
        /// <reponse code="400"> Return errors </reponse>
        [HttpGet("post/{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public async Task<IActionResult> GetDetailedInfo(int id)
        {
            var post = await _postsViewModelService.GetDetailedInfo(id);
            return Ok(post);
        }
    }
}