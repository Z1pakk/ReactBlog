using ReactBlog.CustomAttributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.ViewModels
{
    public class RegisterViewModel
    {
        [Required(ErrorMessage = "{0} can't be empty!")]
        [DataType(DataType.Text)]
        [StringLength(100, ErrorMessage = "You have entered more characters than necessary ({1})")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "{0} can't be empty!")]
        [DataType(DataType.Text)]
        [StringLength(100, ErrorMessage = "You have entered more characters than necessary ({1})")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "{0} can't be empty!")]
        [DataType(DataType.Text)]
        [StringLength(100, ErrorMessage = "You have entered more characters than necessary ({1})")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "{0} can't be empty!")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "This is no email!")]
        [StringLength(80, ErrorMessage = "You have entered more characters than necessary ({1})")]
        public string Email { get; set; }

        [Required(ErrorMessage = "{0} can't be empty!")]
        [DataType(DataType.Password)]
        [StringLength(30, ErrorMessage = "You have entered more characters than necessary ({1})")]
        public string Password { get; set; }

        [Required(ErrorMessage = "{0} can't be empty!")]
        [DataType(DataType.Password)]
        [Compare("Password",ErrorMessage = "Confirm password doesn't match, Type again !")]
        [StringLength(30, ErrorMessage = "You have entered more characters than necessary ({1})")]
        public string ConfirmPassword { get; set; }

        [Required]
        public bool Agreement { get; set; }

        [Required]
        [RecaptchaValid]
        public string RecaptchaToken { get; set; }
    }
}
