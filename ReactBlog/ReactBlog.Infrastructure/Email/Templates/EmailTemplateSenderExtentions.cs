using Microsoft.Extensions.DependencyInjection;
using ReactBlog.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace ReactBlog.Infrastructure.Email.Templates
{
    public static class EmailTemplateSenderExtentions
    {
        public static IServiceCollection AddEmailTemplateSender(this IServiceCollection services)
        {
            
            services.AddTransient<IEmailTemplateSender, EmailTemplateSender>();

            return services;
        }
    }
}
