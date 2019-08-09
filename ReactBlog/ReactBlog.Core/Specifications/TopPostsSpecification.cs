using ReactBlog.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ReactBlog.Core.Specifications
{
    public class TopPostsSpecification : BaseSpecification<Post>
    {
        public TopPostsSpecification(int? countTake=5):base(i=>i.IsFeatured.HasValue&&i.IsFeatured.Value==true)
        {
            ApplyOrderBy(t => t.DateCreate);
            int countToTake = countTake.HasValue?countTake.Value:5;
            ApplyPaging(0, countToTake);

            AddInclude(t => t.ColorOf);
            AddInclude(t => t.PostAuthors);
            AddInclude(t => t.TagPosts);
        }
    }
}
