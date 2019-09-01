using Newtonsoft.Json;
using ReactBlog.Helpers;
using ReactBlog.Infrastructure;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.CustomAttributes
{
    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Property, AllowMultiple = false)]
    public class RecaptchaValidAttribute: ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var client = new System.Net.WebClient();

            //TODO: Insert key in appsettings.json
            string PrivateKey = IoCContainer.Configuration["RecaptchaToken"];
            string requestComm = string.Format("https://www.google.com/recaptcha/api/siteverify?secret={0}&response={1}", PrivateKey, value.ToString());
            var GoogleReply = client.DownloadString(requestComm);

            var captchaResponse = Newtonsoft.Json.JsonConvert.DeserializeObject<RecaptchaJsonModel>(GoogleReply);

            if (captchaResponse.Success) {
                return ValidationResult.Success;
            }
            else
            {
                return new ValidationResult(captchaResponse.ErrorCodes.FirstOrDefault());
            }
        }
       
    }
}
