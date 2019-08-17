using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ReactBlog.Core.Entities;
using ReactBlog.Core.Identity;
using ReactBlog.Core.Interfaces;
using ReactBlog.Interfaces;
using ReactBlog.ViewModels.Authors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.Services
{
    public class AuthorsViewModelService : IAuthorsViewModelService
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public AuthorsViewModelService(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }


        public async Task<TopAuthorsViewModel> Authors(string searchText = "", int page = 1, int itemsPage = 5)
        {
            try
            {
                var users = searchText!=null?
                    _userManager.Users.AsQueryable().Where(u =>(
                    u.FirstName+" "+u.LastName).ToLower().StartsWith(searchText)
                    || 
                    u.FirstName.ToLower().StartsWith(searchText.ToLower()) 
                    ||
                    u.LastName.ToLower().StartsWith(searchText.ToLower()) 
                    ||
                    u.UserName.ToLower().StartsWith(searchText.ToLower()))
                    :
                    _userManager.Users;
                var items = users
                                //.OrderByDescending(t=>
                                //    t.PostAuthors
                                //        .AsQueryable().GroupBy(g=> new { g.AuthorId })
                                //        .OrderByDescending(g=>g.Count()))
                                    .Skip((page - 1) * itemsPage)
                                    .Take(itemsPage).ToList();
                return new TopAuthorsViewModel()
                {
                    Items = convertToModel(items),
                    IsHasNext = users.Count() > (page * itemsPage) ? true : false
                };
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        private IEnumerable<AuthorViewModel> convertToModel(IReadOnlyList<ApplicationUser> items)
        {
            return items.Select(i => new AuthorViewModel()
            {
                UserName = i.UserName,
                Description = i.DetailedInfo,
                Image = i.Image,
                Name = $"{i.FirstName} {i.LastName}"
            }).ToList();
        }

    }
}
