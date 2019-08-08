using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactBlog.Infrastructure.Migrations
{
    public partial class DeleteFieldisFeatured : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isFeatured",
                table: "tblPosts");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isFeatured",
                table: "tblPosts",
                nullable: true);
        }
    }
}
