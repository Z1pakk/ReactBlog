using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactBlog.Core.Entities
{
    [Table("tblPostAuthors")]
    public class PostAuthor
    {
        public PostAuthor()
        {
        }
        [ForeignKey("AuthorOf")]
        public string AuthorId { get; set; }
        [ForeignKey("PostOf")]
        public int PostId { get; set; }

        public virtual Author AuthorOf { get; set; }

        public virtual Post PostOf { get; set; }
    }
}