using Microsoft.EntityFrameworkCore.Migrations;

namespace Online_Booking_Tourism.Migrations
{
    public partial class addvariablestoGuider : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "ce6a8dbd-20d8-4fa2-98c3-4879ab7ec8d2");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "e816ca71-6d19-4168-af0a-268f5804918b");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c3c761e0-4e41-4cb4-bdb5-1c02ff33026a", "650adbe5-5f3c-40cd-8698-813c588c4639", "Visitor", "VISITOR" });

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "eef087fc-7070-458b-9d24-bec04048481f", "82e7c45a-3ffc-4d25-8945-184283e9b1ad", "Administrator", "ADMINISTRATOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "c3c761e0-4e41-4cb4-bdb5-1c02ff33026a");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "eef087fc-7070-458b-9d24-bec04048481f");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ce6a8dbd-20d8-4fa2-98c3-4879ab7ec8d2", "4e492dbf-9c63-4728-9935-214d2e262584", "Visitor", "VISITOR" });

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "e816ca71-6d19-4168-af0a-268f5804918b", "b37c1793-b931-4ab1-8fa9-87458b3c1c4b", "Administrator", "ADMINISTRATOR" });
        }
    }
}
