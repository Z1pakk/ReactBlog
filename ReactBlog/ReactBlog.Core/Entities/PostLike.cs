using ReactBlog.Core.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ReactBlog.Core.Entities
{
    [Table("tblPostLikes")]
    public class PostLike
    {
        [Key, ForeignKey("UserOf")]
        public string UserId { get; set; }

        [Key,ForeignKey("PostOf")]
        public int PostId { get; set; }

        public virtual Post PostOf { get; set; }

        public virtual ApplicationUser UserOf { get; set; }
    }
}
