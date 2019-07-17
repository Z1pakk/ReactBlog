using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ReactBlog.Core.Interfaces;
using ReactBlog.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.Infrastructure
{
    /// <summary>
    /// A shorthand access class to get DI services with nice clear short code
    /// </summary>
    public static class IoC
    {
        /// <summary>
        /// The scoped instance of the <see cref="BlogContext"/>
        /// </summary>
        public static BlogContext BlogContext => IoCContainer.Provider.GetService<BlogContext>();

        /// <summary>
        /// The transient instance of the <see cref="IEmailSender"/>
        /// </summary>
        public static IEmailSender EmailSender => IoCContainer.Provider.GetService<IEmailSender>();

        /// <summary>
        /// The transient instance of the <see cref="IEmailTemplateSender"/>
        /// </summary>
        public static IEmailTemplateSender EmailTemplateSender => IoCContainer.Provider.GetService<IEmailTemplateSender>();
    };

    /// <summary>
    /// The dependency injection container making use of the build in .Net Core service provider
    /// </summary>
    public static class IoCContainer
    {
        /// <summary>
        /// Service provider for this application
        /// </summary>
        public static IServiceProvider Provider {get;set;}

        /// <summary>
        /// The configuration for the application
        /// </summary>
        public static IConfiguration Configuration { get; set; }
    }
}
