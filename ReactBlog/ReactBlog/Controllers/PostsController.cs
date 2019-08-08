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
        [HttpGet("topPosts")]
        public async Task<IActionResult> GetTopPosts(int countItems=5)
        {
            var topPosts = await _postsViewModelService.TopPosts(countItems);
            return Ok(topPosts);
        }

        [HttpGet("mainPosts")]
        public async Task<IActionResult> GetMainPosts(int countItems = 5)
        {
            var mainPosts = await _postsViewModelService.MainPosts(countItems);
            return Ok(mainPosts);
        }
    }
}