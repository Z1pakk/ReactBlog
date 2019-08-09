using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactBlog.Infrastructure.Migrations
{
    public partial class Addindexesfortables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_tblTagPosts_PostId",
                table: "tblTagPosts");

            migrationBuilder.DropIndex(
                name: "IX_tblPostAuthors_AuthorId",
                table: "tblPostAuthors");

            migrationBuilder.AddUniqueConstraint(
                name: "AK_tblTagPosts_PostId_TagId",
                table: "tblTagPosts",
                columns: new[] { "PostId", "TagId" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropUniqueConstraint(
                name: "AK_tblTagPosts_PostId_TagId",
                table: "tblTagPosts");

            migrationBuilder.CreateIndex(
                name: "IX_tblTagPosts_PostId",
                table: "tblTagPosts",
                column: "PostId");

            migrationBuilder.CreateIndex(
                name: "IX_tblPostAuthors_AuthorId",
                table: "tblPostAuthors",
                column: "AuthorId",
                unique: true);
        }
    }
}
