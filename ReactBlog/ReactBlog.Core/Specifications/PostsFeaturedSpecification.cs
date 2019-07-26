using ReactBlog.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ReactBlog.Core.Specifications
{
    public class PostsFeaturedSpecification:BaseSpecification<Post>
    {
        public PostsFeaturedSpecification(bool isFeatured):base(i=>(i.isFeatured==true))
        {
        }
    }
}
