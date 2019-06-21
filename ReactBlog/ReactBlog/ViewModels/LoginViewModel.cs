using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage ="{0} can't be empty!")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage ="This is no email!")]
        [StringLength(80, ErrorMessage = "You have entered more characters than necessary ({1})")]
        public string Email { get; set; }

        [Required(ErrorMessage = "{0} can't be empty!")]
        [DataType(DataType.Password)]
        [StringLength(30, ErrorMessage = "You have entered more characters than necessary ({1})")]
        public string Password { get; set; }

    }
}
