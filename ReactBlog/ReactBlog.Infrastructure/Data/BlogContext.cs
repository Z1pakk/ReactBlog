using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ReactBlog.Core.Entities;
using ReactBlog.Core.Identity;

namespace ReactBlog.Infrastructure.Data
{
    public class BlogContext : IdentityDbContext<ApplicationUser>
    {
        public BlogContext(DbContextOptions<BlogContext> options) : base(options)
        {
        }

        // TODO: SET DbSet<T> for all tables
        public DbSet<Post> Posts { get; set; }
        public DbSet<PostLike> PostLikes { get; set; }
        public DbSet<PostAuthor> PostAuthors { get; set; }
        public DbSet<Color> Colors { get; set; }

        public DbSet<Tag> Tags { get; set; }
        public DbSet<TagPost> TagPost { get; set; }

        // TODO: Table Likes and dislikes

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<PostAuthor>()
            .HasKey(c => new { c.AuthorId, c.PostId });

            builder.Entity<TagPost>()
            .HasKey(c => new { c.TagId, c.PostId });

            builder.Entity<PostLike>()
            .HasKey(c => new { c.PostId, c.UserId });

            builder.Entity<Tag>()
            .HasIndex(c => c.Name).IsUnique();
            // TODO: Configure entities
            //builder.Entity<User>(ConfigureUser);
        }
        //private void ConfigureUser(EntityTypeBuilder<User> builder)
        //{
        //    builder.HasKey(t => t.Id);

        //    builder.ToTable("tbl_Users");
        //}
    }
}
