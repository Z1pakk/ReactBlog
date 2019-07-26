using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ReactBlog.Core.Entities
{
    [Table("tblColors")]
    public class Color:BaseEntity
    { 
        [Required]
        public string Name { get; set; }

        public virtual ICollection<Post> Posts { get; set; }
    }
}
