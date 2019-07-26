using ReactBlog.Core.Entities;
using ReactBlog.Infrastructure.Data;

namespace ReactBlog.Infrastructure.Repositories
{
    public class PostRespository : EfRepository<Post>
    {
        public PostRespository(BlogContext dbContext):base(dbContext)
        {

        }
    }
}
