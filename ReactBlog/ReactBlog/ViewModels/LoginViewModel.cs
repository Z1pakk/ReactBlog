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
        public string Email { get; set; }
        [Required(ErrorMessage = "{0} can't be empty!")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
