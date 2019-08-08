using ReactBlog.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ReactBlog.Core.Specifications
{
    public class MainPostsSpecification: BaseSpecification<Post>
    {
        public MainPostsSpecification(int? countTake = 5) : base(i=>true)
        {
            // TODO: Order by likes
            ApplyOrderBy(t => t.DateCreate);
            int countToTake = countTake.HasValue ? countTake.Value : 5;
            ApplyPaging(0, countToTake);

            AddInclude(t => t.PostAuthors);
            AddInclude(t => t.TagPosts);
        }
    }
}
