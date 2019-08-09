using ReactBlog.Core.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactBlog.Core.Entities
{
    [Table("tblPostAuthors")]
    public class PostAuthor
    {
        public PostAuthor(){}

        [Key]
        [ForeignKey("AuthorOf")]
        public string AuthorId { get; set; }

        [Key]
        [ForeignKey("PostOf")]
        
        public int PostId { get; set; }

        public virtual ApplicationUser AuthorOf { get; set; }

        public virtual Post PostOf { get; set; }
    }
}