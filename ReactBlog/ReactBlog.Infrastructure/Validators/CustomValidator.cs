using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using ReactBlog.Infrastructure.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactBlog.Infrastructure.Validators
{
    public class CustomValidator
    {
        public static IDictionary<string, string> GetErrorsByModel(
            ModelStateDictionary modelErrors)
        {
            var errors = new Dictionary<string, string>();

            var errorList = modelErrors
                .Where(x => x.Value.Errors.Count > 0)
                .ToDictionary(
                    kvp => kvp.Key,
                    kvp => kvp.Value.Errors.Select(e => e.ErrorMessage).ToArray()[0]
                );
            foreach (var item in errorList)
            {
                string key = item.Key;
                key = char.ToLower(key[0]).ToString() + key.Substring(1);
                errors.Add(key, item.Value);
            }
            return errors;
        }

        public static IDictionary<string, string> GetErrorsByIdentityResult(
            IdentityResult result)
        {
            var errors = result.Errors
                .ToDictionary(
                    kvp => "global",
                    kvp => kvp.Description
                );
            return errors;
        }

        public static async Task<IDictionary<string, string>> GetErrorsBySignInResultAsync(
            SignInResult signInresult,
            UserManager<ApplicationUser> usermanager, 
            string userEmail
            )
        {
            var user = await usermanager.FindByEmailAsync(userEmail);
            var errors = new Dictionary<string, string>();
            if (signInresult.IsNotAllowed)
            {
                if (!await usermanager.IsEmailConfirmedAsync(user))
                {
                    errors.Add("email", "Email isn't confirmed");
                    // Email isn't confirmed.
                }

                if (!await usermanager.IsPhoneNumberConfirmedAsync(user))
                {
                    errors.Add("global", "Phone number isn't confirmed");
                    // Phone Number isn't confirmed.
                }
            }
            else if (signInresult.IsLockedOut)
            {
                errors.Add("global", "Account is locked out");
                // Account is locked out.
            }
            else if (signInresult.RequiresTwoFactor)
            {
                errors.Add("global", "Two Factor Authorization Required");
                // 2FA required.
            }
            else
            {
                // Username or password is incorrect.
                if (user == null)
                {
                    errors.Add("global", "Email is incorrect");
                    // Username is incorrect.
                }
                else
                {
                    errors.Add("password", "Invalid credentials");
                    // Password is incorrect.
                }
            }
            return errors;
        }
    }
}
