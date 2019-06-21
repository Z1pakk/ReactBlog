using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ReactBlog.Infrastructure.Identity
{
    public class ApplicationUser : IdentityUser
    {
        [Required]
        [StringLength(100)]
        [PersonalData]
        public string FirstName { get; set; }

        [Required]
        [StringLength(100)]
        [PersonalData]
        public string LastName { get; set; }

        [Required]
        [PersonalData]
        public DateTimeOffset CreatedDate { get; private set; } = DateTimeOffset.Now;

        [PersonalData]
        public bool IsPromotions { get; set; }
    }
}
