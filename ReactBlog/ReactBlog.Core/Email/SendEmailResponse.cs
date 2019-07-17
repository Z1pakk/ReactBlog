using System;
using System.Collections.Generic;
using System.Text;

namespace ReactBlog.Core.Email
{
    /// <summary>
    /// A response from a SendEmail call for any see
    /// </summary>
    public class SendEmailResponse
    {
        /// <summary>
        /// True if the email was sent successfully
        /// </summary>
        public bool Successful => !(Errors?.Count>0);


        /// <summary>
        /// The error message if the sending failed
        /// </summary>
        public List<string> Errors { get; set; }
    }
}
