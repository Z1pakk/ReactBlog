using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.ViewModels
{
    public class GoogleAuthViewModel
    {
        [Required]
        public string tokenId { get; set; }
    }
}
