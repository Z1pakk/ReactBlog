using ReactBlog.ViewModels.Posts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.Interfaces
{
    public interface IPostsViewModelService
    {
        Task<IEnumerable<PostItemViewModel>> TopPosts(int itemsPage = 5);
        Task<PostsViewModel> MainPosts(int page = 1, int countItems=8);

        Task<PostDetailedItemViewModel> GetDetailedInfo(int id);
    }
}
