using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ReactBlog.Core.Entities;
using ReactBlog.Core.Identity;
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
            int? retry = 0)
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
                if (!blogContext.Tags.Any(t=>t.Name=="Featured"))
                {
                    blogContext.Tags.AddRange(
                        GetPreconfiguredTags()
                    );

                    await blogContext.SaveChangesAsync();
                }
                if (!blogContext.Users.Any())
                {
                    ApplicationUser user = new ApplicationUser()
                    { Email = "userexample@gmail.com",
                      UserName = "userexample@gmail.com",
                      FirstName="User",
                      LastName="Example",
                      IsPromotions=false
                    };
                    await usermanager.CreateAsync(
                        user,
                        "5632wlad"
                        );
                    await usermanager.AddToRoleAsync(user, "Admin");
                    await usermanager.AddToRoleAsync(user, "Teacher");
                }

                // TODO: Set Seeder
            }
            catch (Exception)
            {
                if (retryForAvailability < 10)
                {
                    retryForAvailability++;
                    await SeedAsync(blogContext,usermanager, retryForAvailability);
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

        private static IEnumerable<Tag> GetPreconfiguredTags()
        {
            return new List<Tag>
            {
                new Tag(){Name="Featured"}
            };
        }

        // TODO: Configure methods for seeder


    }
}
