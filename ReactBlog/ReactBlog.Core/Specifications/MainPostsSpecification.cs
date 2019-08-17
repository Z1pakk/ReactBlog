using ReactBlog.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ReactBlog.Core.Specifications
{
    public class MainPostsSpecification: BaseSpecification<Post>
    {
        public MainPostsSpecification(int? page,int? countTake) : base(i=>true)
        {
            // TODO: Order by likes
            ApplyOrderByDescending(t => t.PostLikes.Count);
            if (page.HasValue)
            {
                int countToTake = countTake.HasValue ? countTake.Value : 5;
                int countToSkip = (page.Value - 1) * countToTake;
                ApplyPaging(countToSkip, countToTake);
            }

            AddInclude(t => t.ColorOf);
            AddInclude(t => t.PostAuthors);
            AddInclude(t => t.TagPosts);
        }
    }
}
