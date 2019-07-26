using ReactBlog.Core.Entities;
using ReactBlog.Core.Interfaces;
using ReactBlog.Interfaces;
using ReactBlog.ViewModels.Posts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.Services
{
    public class PostsViewModelService : IPostsViewModelService
    {
        private readonly IAsyncRepository<Post> _postsRepository;

        public Task<IEnumerable<PostItemViewModel>> GetFeaturedPosts(int pageIndex = 1, int itemsPage = 8)
        {
            
        }
    }
}
