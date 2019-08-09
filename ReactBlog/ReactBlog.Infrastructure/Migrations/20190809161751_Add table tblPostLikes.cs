using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactBlog.Infrastructure.Migrations
{
    public partial class AddtabletblPostLikes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tblPostLikes",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    PostId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblPostLikes", x => new { x.PostId, x.UserId });
                    table.ForeignKey(
                        name: "FK_tblPostLikes_tblPosts_PostId",
                        column: x => x.PostId,
                        principalTable: "tblPosts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tblPostLikes_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblPostLikes_UserId",
                table: "tblPostLikes",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tblPostLikes");
        }
    }
}
