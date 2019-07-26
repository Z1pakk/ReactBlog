using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ReactBlog.Core.Entities
{
    [Table("tblPosts")]
    public class Post:BaseEntity
    {
        [Required]
        [StringLength(maximumLength:100)]
        public string Title { get; set; }

        public string Image { get; set; }

        [Required]
        public DateTimeOffset DateCreate { get; private set; } = DateTimeOffset.Now;

        public bool? isFeatured { get; set; }

        [ForeignKey("ColorOf")]
        public int ColorId { get; set; }

        public virtual Color ColorOf { get; set; }

        public virtual ICollection<PostAuthor> PostAuthors { get; set; }

        public virtual ICollection<TagPost> TagPosts { get; set; }
    }
}
