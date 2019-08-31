using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactBlog.Interfaces;
using ReactBlog.ViewModels.Tags;

namespace ReactBlog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagsController : ControllerBase
    {
        private readonly ITagsViewModelService _tagsViewModelService;

        public TagsController(ITagsViewModelService tagsViewModelService)
        {
            _tagsViewModelService = tagsViewModelService;
        }

        /// <summary>
        /// Get top tags
        /// </summary>
        /// <param name="searchText">Text for search tags</param>
        /// <param name="page">Number for skip elements</param>
        /// <param name="countItems">Request count posts for response</param>
        /// <returns> List of tags for tagsPage </returns>
        /// <response code="200"> Successed response.  </response>
        /// <reponse code="400"> Return errors </reponse>
        [HttpGet("topTags")]
        [ProducesResponseType(200,Type=typeof(TagsViewModel))]
        [ProducesResponseType(400)]
        public async Task<IActionResult> GetTopTags(string searchText = "", int page = 1, int countItems = 36)
        {
            var topTags = await _tagsViewModelService.GetTags(searchText, page, countItems);
            return Ok(topTags);
        }

        /// <summary>
        /// Get detailed info about tag
        /// </summary>
        /// <param name="tagName">Username of author</param>
        /// <returns> Object which have a information about tag </returns>
        /// <response code="200"> Successed response.  </response>
        /// <response code="400"> Return errors </response>
        [HttpGet("tag/{tagName}")]
        [ProducesResponseType(200, Type = typeof(TagDetailedViewModel))]
        [ProducesResponseType(400)]
        public async Task<IActionResult> GetDetailedInfo(string tagName)
        {
            var author = await _tagsViewModelService.Tag(tagName);
            return Ok(author);
        }

    }
}