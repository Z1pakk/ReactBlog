using System;
using System.Collections.Generic;
using System.Text;

namespace ReactBlog.Infrastructure.Email
{
    /// <summary>
    /// An error response for a <see cref="SendGridResponse"/>
    /// </summary>
    public class SendGridResponseError
    {
        /// <summary>
        /// The error message
        /// </summary>
        public string Message { get; set; }

        /// <summary>
        /// The field inside the message details that the errors is related to
        /// </summary>
        public string Field { get; set; }

        /// <summary>
        /// Useful informtaion for resolving the error
        /// </summary>
        public string Help { get; set; }

    }
}
