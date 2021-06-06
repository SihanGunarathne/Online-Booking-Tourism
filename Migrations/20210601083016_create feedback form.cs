using Microsoft.EntityFrameworkCore.Migrations;

namespace Online_Booking_Tourism.Migrations
{
    public partial class createfeedbackform : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "24130d36-9546-441a-94e7-7805ab32225c");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "29d8613d-138b-468f-a6ed-712d7df0eaa6");

            migrationBuilder.RenameColumn(
                name: "FeedbackId",
                table: "FeedBacks",
                newName: "UserId");

            migrationBuilder.AddColumn<string>(
                name: "FeedbackName",
                table: "FeedBacks",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "59074e1e-398f-4907-b6a6-760e9cb439d4", "c076dee1-7b4d-4577-b7e9-7b3b386c8f4f", "Visitor", "VISITOR" });

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "5cab55ed-9a9e-47f4-81a7-f808f5618476", "bddb6987-14b4-468d-af1f-5994317b1345", "Administrator", "ADMINISTRATOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "59074e1e-398f-4907-b6a6-760e9cb439d4");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "5cab55ed-9a9e-47f4-81a7-f808f5618476");

            migrationBuilder.DropColumn(
                name: "FeedbackName",
                table: "FeedBacks");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "FeedBacks",
                newName: "FeedbackId");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "24130d36-9546-441a-94e7-7805ab32225c", "5d883e12-bbde-4cef-9350-1d772e5b6b53", "Visitor", "VISITOR" });

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "29d8613d-138b-468f-a6ed-712d7df0eaa6", "d961c043-df62-4af1-9860-db4ab020abab", "Administrator", "ADMINISTRATOR" });
        }
    }
}
