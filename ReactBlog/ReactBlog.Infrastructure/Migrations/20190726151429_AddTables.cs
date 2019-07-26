using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactBlog.Infrastructure.Migrations
{
    public partial class AddTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "AspNetUsers",
                maxLength: 250,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DetailedInfo",
                table: "AspNetUsers",
                maxLength: 1000,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "AspNetUsers",
                nullable: true);

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

            migrationBuilder.CreateTable(
                name: "tblColors",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblColors", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "tblPosts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<string>(maxLength: 100, nullable: false),
                    Image = table.Column<string>(nullable: true),
                    DateCreate = table.Column<DateTimeOffset>(nullable: false),
                    ColorId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblPosts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tblPosts_tblColors_ColorId",
                        column: x => x.ColorId,
                        principalTable: "tblColors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tblPostAuthors",
                columns: table => new
                {
                    AuthorId = table.Column<string>(nullable: false),
                    PostId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblPostAuthors", x => new { x.AuthorId, x.PostId });
                    table.ForeignKey(
                        name: "FK_tblPostAuthors_tblAuthors_AuthorId",
                        column: x => x.AuthorId,
                        principalTable: "tblAuthors",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tblPostAuthors_tblPosts_PostId",
                        column: x => x.PostId,
                        principalTable: "tblPosts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblPostAuthors_PostId",
                table: "tblPostAuthors",
                column: "PostId");

            migrationBuilder.CreateIndex(
                name: "IX_tblPosts_ColorId",
                table: "tblPosts",
                column: "ColorId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tblPostAuthors");

            migrationBuilder.DropTable(
                name: "tblAuthors");

            migrationBuilder.DropTable(
                name: "tblPosts");

            migrationBuilder.DropTable(
                name: "tblColors");

            migrationBuilder.DropColumn(
                name: "Address",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DetailedInfo",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "AspNetUsers");
        }
    }
}
