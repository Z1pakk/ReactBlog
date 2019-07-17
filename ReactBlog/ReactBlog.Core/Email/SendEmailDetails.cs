using System;
using System.Collections.Generic;
using System.Text;

namespace ReactBlog.Core.Email
{
    /// <summary>
    /// The emails about the email to send
    /// </summary>
    public class SendEmailDetails
    {
        /// <summary>
        /// The name of the sender
        /// </summary>
        public string FromName { get; set; }

        /// <summary>
        /// The email of the sender
        /// </summary>
        public string FromEmail { get; set; }

        /// <summary>
        /// The name of the receiver
        /// </summary>
        public string ToName { get; set; }
        /// <summary>
        /// The email of the receiver
        /// </summary>
        public string ToEmail { get; set; }

        /// <summary>
        /// The email subject
        /// </summary>
        public string Subject { get; set; }
        /// <summary>
        /// The email body content
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// Indicate if the contents is a HTML email
        /// </summary>
        public bool IsHtml { get; set; }


        /// <summary>
        /// Other variables for template email
        /// </summary>
        public EmailTemplateData TemplateData { get; set; }


        /// <summary>
        /// Id of template
        /// </summary>
        public string TemplateId { get; set; }
    }
}
