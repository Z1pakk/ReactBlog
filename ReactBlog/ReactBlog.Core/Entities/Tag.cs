using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ReactBlog.Core.Entities
{
    [Table("tblTags")]
    public class Tag:BaseEntity
    {
        [Required]
        [StringLength(maximumLength:100)]
        public string Name { get; set; }

        public virtual ICollection<TagPost> TagPosts { get; set; }

    }
}
