using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using ReactBlog.Core.Identity;
using ReactBlog.Infrastructure.Data;

namespace ReactBlog
{
    public class Program
    {
        public async static Task Main(string[] args)
        {
            var host = CreateWebHostBuilder(args)
                        .Build();
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var loggerFactory = services.GetRequiredService<ILoggerFactory>();
                try
                {
                    var blogContext = services.GetRequiredService<BlogContext>();
                    var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();
                    await BlogContextSeed.SeedAsync(blogContext, userManager, loggerFactory);
                }
                catch (Exception ex)
                {
                    var logger = loggerFactory.CreateLogger<Program>();
                    logger.LogError(ex, "An error occurred seeding the DB.");
                }
            }

            host.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
