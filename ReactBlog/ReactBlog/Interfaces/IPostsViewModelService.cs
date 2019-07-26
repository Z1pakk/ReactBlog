using ReactBlog.ViewModels.Posts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.Interfaces
{
    public interface IPostsViewModelService
    {
        // TODO: Add method which return featured posts for carousel and method which return all posts

        Task<IEnumerable<PostItemViewModel>> GetFeaturedPosts(int pageIndex, int itemsPage);
    }
}
