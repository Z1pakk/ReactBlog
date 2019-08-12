using ReactBlog.ViewModels.Tags;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.Interfaces
{
    public interface ITagsViewModelService
    {
        Task<TagsViewModel> GetTags(string searchText = "", int page = 1, int itemsPage = 8);
    }
}
