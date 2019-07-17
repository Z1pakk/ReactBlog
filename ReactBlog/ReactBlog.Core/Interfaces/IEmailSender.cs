using ReactBlog.Core.Email;
using SendGrid;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactBlog.Core.Interfaces
{
    /// <summary>
    /// Handles ending emails
    /// </summary>
    public interface IEmailSender
    {
        Task<SendEmailResponse> SendEmailAsync(SendEmailDetails details);
    }
}
