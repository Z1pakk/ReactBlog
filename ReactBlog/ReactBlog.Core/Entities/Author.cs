using ReactBlog.Core.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ReactBlog.Core.Entities
{
    [Table("tblAuthors")]
    public class Author
    {
        public Author()
        {
            PostAuthors = new HashSet<PostAuthor>();
        }
        [Key]
        [ForeignKey("ApplicationUserOf")]
        public string UserId { get; set; }
        
        public virtual ApplicationUser ApplicationUserOf { get; set; }

        public virtual ICollection<PostAuthor> PostAuthors { get; set; }
    }
}
