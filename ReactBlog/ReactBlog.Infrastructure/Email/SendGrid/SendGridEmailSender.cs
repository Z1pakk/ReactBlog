using Newtonsoft.Json;
using ReactBlog.Core.Email;
using ReactBlog.Core.Interfaces;
using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactBlog.Infrastructure.Email
{
    // This class is used by the application to send email for account confirmation and password reset.
    // For more details see https://go.microsoft.com/fwlink/?LinkID=532713
    public class SendGridEmailSender : IEmailSender
    {
        public SendGridEmailSender()
        {

        }
        public async Task<SendEmailResponse> SendEmailAsync(SendEmailDetails details)
        {

            //Get the SendGrid key
            var apiKey = IoCContainer.Configuration["SendGridSettings:SendGridKey"];

            //Create new SendGrid client
            var client = new SendGridClient(apiKey);

            //From
            var from = new EmailAddress(details.FromEmail, details.FromName);

            //Subject
            var subject = details.Subject;

            //To
            var to = new EmailAddress(details.ToEmail, details.ToName);

            //Content
            var content = details.Content;

            //Create Email class ready to send
            var msg = MailHelper.CreateSingleEmail(
                from,
                to,
                subject,
                details.IsHtml ? null : details.Content,
                details.IsHtml ? details.Content : null
                );

            

            if (details.TemplateId != null && !string.IsNullOrEmpty(details.TemplateId))
            {
                msg.TemplateId = details.TemplateId;
                msg.SetTemplateData(details.TemplateData);
            }


            //Finally, send the email...
            var response = await client.SendEmailAsync(msg);

            //If will be ok
            if (response.StatusCode == System.Net.HttpStatusCode.Accepted)
                return new SendEmailResponse();

            //Otherwise, it failed....

            try
            {

                //Get the result in the body
                var bodyResult = await response.Body.ReadAsStringAsync();

                //Deserialize the response
                var sendGridResponse = JsonConvert.DeserializeObject<SendGridResponse>(bodyResult);

                //Add any errors to the response
                var errorResponse = new SendEmailResponse
                {
                    Errors = sendGridResponse?.Errors.Select(t => t.Message).ToList()
                };

                //Make sure we have at least one error
                if (errorResponse.Errors == null || errorResponse.Errors.Count == 0)
                    // Add an unkwon error
                    //TODO: Localization
                    errorResponse.Errors = new List<string>(new[] { "Unknown error from email sending service" });
                return errorResponse;
            }
            catch (Exception ex)
            {
                //TODO: Localization

                //Break if we are debugging
                if (Debugger.IsAttached)
                {
                    var error = ex;
                    Debugger.Break();
                }

                //If something unexcepted happened,return message
                return new SendEmailResponse
                {
                    Errors = new List<string>(new[] { "Unknown error occurred" }) { }
                };
            };
        }
    }
}
