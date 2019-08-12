using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.ViewModels.Authors
{
    public class TopAuthorsViewModel
    {
        public TopAuthorsViewModel()
        {
            Items = new HashSet<AuthorViewModel>();
        }
        public IEnumerable<AuthorViewModel> Items { get; set; }
        public bool IsHasNext { get; set; }
    }
}
