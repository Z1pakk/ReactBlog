using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactBlog.Infrastructure.Migrations
{
    public partial class ChangeToNullProperties : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblPosts_tblColors_ColorId",
                table: "tblPosts");

            migrationBuilder.AlterColumn<int>(
                name: "ColorId",
                table: "tblPosts",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_tblPosts_tblColors_ColorId",
                table: "tblPosts",
                column: "ColorId",
                principalTable: "tblColors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblPosts_tblColors_ColorId",
                table: "tblPosts");

            migrationBuilder.AlterColumn<int>(
                name: "ColorId",
                table: "tblPosts",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_tblPosts_tblColors_ColorId",
                table: "tblPosts",
                column: "ColorId",
                principalTable: "tblColors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
