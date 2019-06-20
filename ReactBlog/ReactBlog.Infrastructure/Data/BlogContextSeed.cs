using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ReactBlog.Infrastructure.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactBlog.Infrastructure.Data
{
    public class BlogContextSeed
    {
        public static async Task SeedAsync(BlogContext blogContext,
            UserManager<ApplicationUser> usermanager,
           ILoggerFactory loggerFactory, int? retry = 0)
        {
            int retryForAvailability = retry.Value;
            try
            {
                blogContext.Database.Migrate();

                if (!blogContext.Roles.Any())
                {
                    blogContext.Roles.AddRange(
                        GetPreconfiguredRoles()
                    );
                    await blogContext.SaveChangesAsync();
                }
                if (!blogContext.Users.Any())
                {
                    ApplicationUser user = new ApplicationUser() { Email = "wladik420@gmail.com", UserName = "wladik420@gmail.com" };
                    await usermanager.CreateAsync(
                        user,
                        "5632wlad"
                        );
                    await usermanager.AddToRoleAsync(user, "Admin");
                    await usermanager.AddToRoleAsync(user, "Teacher");
                }

                // TODO: Set Seeder
            }
            catch (Exception ex)
            {
                if (retryForAvailability < 10)
                {
                    retryForAvailability++;
                    var log = loggerFactory.CreateLogger<BlogContextSeed>();
                    log.LogError(ex.Message);
                    await SeedAsync(blogContext,usermanager, loggerFactory, retryForAvailability);
                }
            }
        }

        private static IEnumerable<IdentityRole> GetPreconfiguredRoles()
        {
            return new List<IdentityRole>
            {
                new IdentityRole("User"){NormalizedName="USER"},
                new IdentityRole("Teacher"){NormalizedName="TEACHER"},
                new IdentityRole("Admin"){NormalizedName="ADMIN"}
            };
        }

        // TODO: Configure methods for seeder
    }
}
