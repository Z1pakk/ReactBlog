using ReactBlog.Core.Email;
using ReactBlog.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactBlog.Infrastructure.Email
{
    /// <summary>
    /// Handles sending emails specific to the React Blog
    /// </summary>
    public class ReactBlogEmailSender
    {
        private readonly IEmailTemplateSender _emailSender;
        public ReactBlogEmailSender(IEmailTemplateSender emailSender)
        {
            _emailSender = emailSender;
        }
        /// <summary>
        /// Sends a verification email to the specified user 
        /// </summary>
        /// <param name="email">The users email to e verified</param>
        /// <param name="verificationUrl">The URL the user needs to click to verify their email</param>
        /// <returns></returns>
        public async Task<SendEmailResponse> SendUserVerificationEmail(string displayName,string email,string verificationUrl)
        {
            return await _emailSender.SendGeneralEmailAsync(new SendEmailDetails()
            {
                FromEmail = IoCContainer.Configuration["MyBlogSettings:SendEmailFromEmail"],
                FromName = IoCContainer.Configuration["MyBlogSettings:SendEmailFromName"],
                IsHtml = true,
                Subject = IoCContainer.Configuration["MyBlogSettings:SendEmailVerificationSubject"],
                ToEmail = email,
                ToName = displayName
            },
           IoCContainer.Configuration["SendGridSettings:SendGridTemplateKey"],
           "Confirm Your Email Address",
           "Tap the button below to confirm your email address. If you didn't create an account with ReactBlog, you can safely delete this email.",
           "Do Something Sweet",
           IoCContainer.Configuration["MyBlogSettings:SendEmailFromName"],
           "If that doesn't work, copy and paste the following link in your browser:",
           "awdwadaw",
           verificationUrl);
        }
    }
}
