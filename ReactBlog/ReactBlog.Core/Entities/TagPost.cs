using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactBlog.Core.Entities
{
    [Table("tblTagPosts")]
    public class TagPost
    {
        [Key]
        [ForeignKey("TagOf")]
        public int TagId { get; set; }

        [Key]
        [ForeignKey("PostOf")]
        public int PostId { get; set; }

        public virtual Post PostOf { get; set; }

        public virtual Tag TagOf { get; set; }
    }
}