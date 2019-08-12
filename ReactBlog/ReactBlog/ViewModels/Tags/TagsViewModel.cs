using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.ViewModels.Tags
{
    public class TagsViewModel
    {
        public TagsViewModel()
        {
            Items = new HashSet<TagItemViewModel>();
        }
        public IEnumerable<TagItemViewModel> Items { get; set; }
        public bool IsHasNext { get; set; }
    }
}
