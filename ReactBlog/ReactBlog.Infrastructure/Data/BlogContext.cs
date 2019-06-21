using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ReactBlog.Core.Entities.UserAggregate;
using ReactBlog.Infrastructure.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace ReactBlog.Infrastructure.Data
{
    public class BlogContext : IdentityDbContext<ApplicationUser>
    {
        public BlogContext(DbContextOptions<BlogContext> options) : base(options)
        {
        }

        // TODO: SET DbSet<T> for all tables
        //public DbSet<User> Users { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
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
