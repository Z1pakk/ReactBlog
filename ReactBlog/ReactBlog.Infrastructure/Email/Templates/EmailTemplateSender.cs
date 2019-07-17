using ReactBlog.Core.Email;
using ReactBlog.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactBlog.Infrastructure.Email.Templates
{
    /// <summary>
    /// Handles sending templated emails
    /// </summary>
    public class EmailTemplateSender : IEmailTemplateSender
    {
        private readonly IEmailSender _emailService;
        public EmailTemplateSender(IEmailSender emailService)
        {
            _emailService = emailService;
        }
        public async Task<SendEmailResponse> SendGeneralEmailAsync(SendEmailDetails details, string templateId, string title, string content1, string buttonText, string company, string content2, string footer, string link)
        {
            var dynamicTemplateData = new EmailTemplateData
            {
                Title = title,
                Content1 = content1,
                ButtonText = buttonText,
                Company = company,
                Content2 = content2,
                Footer = footer,
                Link = link
            };

            //Set the details content to this template content
            details.TemplateData = dynamicTemplateData;

            // Set the id of SendGrid template
            details.TemplateId = templateId;

            return await _emailService.SendEmailAsync(details);
        }
    }
}
