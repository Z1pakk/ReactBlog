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

        Task<IEnumerable<PostItemViewModel>> TopPosts(int itemsPage = 5);
        Task<IEnumerable<PostItemViewModel>> MainPosts(int page = 1, int countItems=8);
    }
}
