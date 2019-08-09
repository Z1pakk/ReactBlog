using Bogus;
using Bogus.Extensions;
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
using System.Transactions;

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
                bool isCanSaveChanges = false;

                blogContext.Database.Migrate();
                using (TransactionScope scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
                {
                    if (!blogContext.Roles.Any())
                    {
                        blogContext.Roles.AddRange(
                            GetPreconfiguredRoles()
                        );
                        isCanSaveChanges = true;
                    }
                    if (!blogContext.Tags.Any(t => t.Name == "Featured"))
                    {
                        blogContext.Tags.AddRange(
                            GetPreconfiguredTags()
                        );
                        isCanSaveChanges = true;
                    }
                    if (!blogContext.Colors.Any())
                    {
                        blogContext.Colors.AddRange(
                            GetPreconfiguredColors()
                        );
                        isCanSaveChanges = true;
                    }
                    if (!blogContext.Users.Any())
                    {
                        ApplicationUser user = new ApplicationUser()
                        {
                            Email = "userexample@gmail.com",
                            UserName = "userexample@gmail.com",
                            FirstName = "User",
                            LastName = "Example",
                            IsPromotions = false
                        };
                        await usermanager.CreateAsync(
                            user,
                            "5632wlad"
                            );
                        await usermanager.AddToRoleAsync(user, "Admin");
                        await usermanager.AddToRoleAsync(user, "Teacher");
                        isCanSaveChanges = true;
                    }
                    if (!blogContext.Posts.Any())
                    {
                        blogContext.Posts.AddRange(GetPreconfiguredPosts(blogContext));

                        isCanSaveChanges = true;
                    }
                    if (isCanSaveChanges)
                    {

                        await blogContext.SaveChangesAsync();

                    }
                    scope.Complete();
                }
                // TODO: Set Seeder
            }
            catch (Exception ex)
            {
                if (retryForAvailability < 10)
                {
                    retryForAvailability++;
                    await SeedAsync(blogContext, usermanager, retryForAvailability);
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
                new Tag(){Name="Sport"},
                new Tag(){Name="Nature"},
                new Tag(){Name="Music"},
                new Tag(){Name="Learning"},
                new Tag(){Name="Programming"}
            };
        }

        private static IEnumerable<Color> GetPreconfiguredColors()
        {
            return new List<Color>
            {
                new Color(){Name="purple"},
                new Color(){Name="orange"},
                new Color(){Name="red"},
                new Color(){Name="blue"},
                new Color(){Name="yellow"},
                new Color(){Name="green"},
            };
        }

        private static IEnumerable<Post> GetPreconfiguredPosts(BlogContext blogContext)
        {
            Faker<Post> fakerPosts = new Faker<Post>()
                .RuleFor(t => t.Image, f => f.Image.PicsumUrl().OrNull(f,0.4f))
                .RuleFor(t => t.Title, f => f.Lorem.Sentence(6))
                .RuleFor(t => t.DateCreate, f => f.Date.BetweenOffset(DateTime.Now.AddDays(-250), DateTime.Now))
                .RuleFor(t => t.ColorId, f => f.PickRandom(blogContext.Colors.ToList()).Id.OrNull(f, .4f))
                .RuleFor(t => t.IsFeatured, f => f.Random.Bool().OrNull<bool>(f, .45f))
                .RuleFor(
                    t => t.PostAuthors,
                    (g, f) =>
                        new Faker<PostAuthor>()
                    .RuleFor(t => t.AuthorId, h => h.PickRandom(blogContext.Users.ToList()).Id)
                    .RuleFor(t => t.PostId, h => f.Id).Generate(1)
                    )
                .RuleFor(t => t.TagPosts,
                    (g, f) =>
                            new Faker<TagPost>()
                        .RuleFor(t => t.TagId, h => h.PickRandom(blogContext.Tags.ToList()).Id)
                        .RuleFor(t => t.PostId, h => f.Id).Generate(1)
                        );
            return fakerPosts.Generate(20);
        }
        // TODO: Configure methods for seeder


    }
}
