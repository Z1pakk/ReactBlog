using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactBlog.Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedAsync(UserManager<ApplicationUser> userManager)
        {
            var defaultUser = new ApplicationUser { UserName = "demouser@vlandr.com", Email = "demouser@vlandr.com" };
            await userManager.CreateAsync(defaultUser, "Qwerty-1");
        }
    }
}
