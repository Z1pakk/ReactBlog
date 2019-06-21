using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactBlog.Core.Interfaces
{
    public interface IUserService
    {
        Task AddUser(string userId, string firstName, string lastName, bool isPromotions);
    }
}
