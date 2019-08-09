using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactBlog.Infrastructure.Migrations
{
    public partial class DeleteAuthors : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblPostAuthors_tblAuthors_AuthorId",
                table: "tblPostAuthors");

            migrationBuilder.DropTable(
                name: "tblAuthors");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "tblPosts",
                maxLength: 500,
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 100);

            migrationBuilder.CreateIndex(
                name: "IX_tblPostAuthors_AuthorId",
                table: "tblPostAuthors",
                column: "AuthorId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_tblPostAuthors_AspNetUsers_AuthorId",
                table: "tblPostAuthors",
                column: "AuthorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblPostAuthors_AspNetUsers_AuthorId",
                table: "tblPostAuthors");

            migrationBuilder.DropIndex(
                name: "IX_tblPostAuthors_AuthorId",
                table: "tblPostAuthors");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "tblPosts",
                maxLength: 100,
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 500);

            migrationBuilder.CreateTable(
                name: "tblAuthors",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblAuthors", x => x.UserId);
                    table.ForeignKey(
                        name: "FK_tblAuthors_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_tblPostAuthors_tblAuthors_AuthorId",
                table: "tblPostAuthors",
                column: "AuthorId",
                principalTable: "tblAuthors",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
