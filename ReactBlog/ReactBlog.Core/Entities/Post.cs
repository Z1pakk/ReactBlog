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
        public Post()
        {
            PostAuthors = new HashSet<PostAuthor>();
            TagPosts = new HashSet<TagPost>();
        }

        [Required]
        [StringLength(maximumLength:500)]
        public string Title { get; set; }

        public string Image { get; set; }

        public bool? IsFeatured { get; set; }



        [Required]
        public DateTimeOffset DateCreate { get; private set; } = DateTimeOffset.Now;


        [ForeignKey("ColorOf")]
        public int? ColorId { get; set; }

        public virtual Color ColorOf { get; set; }

        public virtual ICollection<PostAuthor> PostAuthors { get; set; }

        public virtual ICollection<TagPost> TagPosts { get; set; }

        public virtual ICollection<PostLike> PostLikes { get; set; }
    }
}
