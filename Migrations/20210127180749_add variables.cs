using Microsoft.EntityFrameworkCore.Migrations;

namespace Online_Booking_Tourism.Migrations
{
    public partial class addvariables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
                values: new object[] { "6511c664-9fc8-4729-b89b-8365e2abc838", "27036b9e-d58c-4e81-8c94-1489dac75d48", "Visitor", "VISITOR" });

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "de87542d-f03a-4965-ac30-d05aa8426153", "8cd97a00-f7ee-43a9-93e8-e40129263218", "Administrator", "ADMINISTRATOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "6511c664-9fc8-4729-b89b-8365e2abc838");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "de87542d-f03a-4965-ac30-d05aa8426153");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c3c761e0-4e41-4cb4-bdb5-1c02ff33026a", "650adbe5-5f3c-40cd-8698-813c588c4639", "Visitor", "VISITOR" });

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "eef087fc-7070-458b-9d24-bec04048481f", "82e7c45a-3ffc-4d25-8945-184283e9b1ad", "Administrator", "ADMINISTRATOR" });
        }
    }
}
