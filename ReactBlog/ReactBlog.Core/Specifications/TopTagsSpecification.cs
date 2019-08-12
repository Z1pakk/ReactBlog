using ReactBlog.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ReactBlog.Core.Specifications
{
    public class TopTagsSpecification:BaseSpecification<Tag>
    {
        public TopTagsSpecification(string searchText,int page,int countTake):base(i=>searchText!=null?i.Name.ToLower().StartsWith(searchText):true)
        {
            ApplyOrderBy(t => t.TagPosts.Count);
            int countToSkip = (page - 1) * countTake;
            ApplyPaging(countToSkip, countTake);

            AddInclude(t => t.TagPosts);
        }
    }
}
