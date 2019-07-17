using ReactBlog.Core.Email;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactBlog.Core.Interfaces
{
    /// <summary>
    /// Sends emails using the <see cref="IEmailSender"/> and creating the HTML
    /// </summary>
    public interface IEmailTemplateSender
    {
        Task<SendEmailResponse> SendGeneralEmailAsync(
            SendEmailDetails details,
            string templateId, string title, string content1, string buttonText, string company, string content2, string footer, string link
            );
    }
}
