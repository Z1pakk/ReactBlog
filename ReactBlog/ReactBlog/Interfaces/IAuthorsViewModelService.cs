using ReactBlog.ViewModels.Authors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.Interfaces
{
    public interface IAuthorsViewModelService
    {
        Task<TopAuthorsViewModel> Authors(string searchText,int page = 1, int itemsPage = 5);
    }
}
