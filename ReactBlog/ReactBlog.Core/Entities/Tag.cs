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
        public Tag()
        {
            TagPosts = new HashSet<TagPost>();
        }
        [Required]
        [StringLength(maximumLength:100)]
        public string Name { get; set; }

        public string Image { get; set; }

        [StringLength(maximumLength:1000)]
        public string Description { get; set; }

        public virtual ICollection<TagPost> TagPosts { get; set; }

    }
}
