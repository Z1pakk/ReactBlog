using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.ViewModels.Posts
{
    public class PostsViewModel
    {
        public PostsViewModel()
        {
            Items = new HashSet<PostItemViewModel>();
        }
        public IEnumerable<PostItemViewModel> Items { get; set; }
        public bool IsHasNext { get; set; }
    }
}
