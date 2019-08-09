using Microsoft.AspNetCore.Identity;
using ReactBlog.Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ReactBlog.Core.Identity
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

        [PersonalData]
        public string Image { get; set; }

        [StringLength(maximumLength:1000)]
        public string DetailedInfo { get; set; }

        [StringLength(maximumLength:250)]
        public string Address { get; set; }

        [Required]
        [PersonalData]
        public DateTimeOffset CreatedDate { get; private set; } = DateTimeOffset.Now;

        [PersonalData]
        public bool IsPromotions { get; set; }

        public virtual ICollection<PostAuthor> PostAuthors { get; set; }
    }
}
