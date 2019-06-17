using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ReactBlog.Core.Interfaces
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
