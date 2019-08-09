using ReactBlog.ViewModels.Authors;
using ReactBlog.ViewModels.Tags;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.ViewModels.Posts
{
    public class PostItemViewModel
    {
        public int PostId { get; set; }

        public string Title { get; set; }

        public string Image { get; set; }

        public List<TagPostItemViewModel> Tags { get; set; }

        public List<AuthorPostItemViewModel> Authors { get; set; }

        public DateTimeOffset DateOfCreate { get; set; }

        public string Color { get; set; }

        public bool IsFeatured { get; set; }

        public int CountLikes { get; set; }

        // TODO: Field with raiting
    }
}
