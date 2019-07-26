using System.ComponentModel.DataAnnotations.Schema;

namespace ReactBlog.Core.Entities
{
    [Table("tblTagPosts")]
    public class TagPost
    {
        [ForeignKey("TagOf")]
        public int TagId { get; set; }

        [ForeignKey("PostOf")]
        public int PostId { get; set; }

        public virtual Post PostOf { get; set; }

        public virtual Tag TagOf { get; set; }
    }
}