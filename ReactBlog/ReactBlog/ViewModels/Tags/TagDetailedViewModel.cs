using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.ViewModels.Tags
{
    public class TagDetailedViewModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int CountPosts { get; set; }

        public string Description { get; set; }

        public string Image { get; set; }
    }
}
