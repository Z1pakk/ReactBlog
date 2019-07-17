using Microsoft.Extensions.DependencyInjection;
using ReactBlog.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace ReactBlog.Infrastructure.Email
{
    /// <summary>
    /// Extentions methods for any SendGrid classes
    /// </summary>
    public static class SendGridExtentions
    {
        public static IServiceCollection AddSendGridEmailSender(this IServiceCollection services)
        {
            //Inject the SendGridEmailSender
            services.AddTransient<IEmailSender, SendGridEmailSender>();
                return services;
        }
    }
}
