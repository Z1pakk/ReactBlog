using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.ViewModels.Posts
{
    public class PostDetailedItemViewModel:PostItemViewModel
    {
        public string Text { get; set; }

        public PostMinItemViewModel NextPost { get; set; }

        public PostMinItemViewModel PrevPost { get; set; }
    }
}
