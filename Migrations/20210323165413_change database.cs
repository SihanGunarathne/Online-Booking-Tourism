using Microsoft.EntityFrameworkCore.Migrations;

namespace Online_Booking_Tourism.Migrations
{
    public partial class changedatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "6ce2a98b-798e-484c-b9fb-bf58f50ef3ad");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "c6faeddb-0c13-4d78-a98b-a56e9e6ef358");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "1d4bd0ee-46de-4ded-b590-5e2a0319c6d6", "45758eb1-a831-41cd-b605-a885a234f8c7", "Visitor", "VISITOR" });

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "2e3752b5-4058-4e22-a9ff-681e7d19787a", "77417149-1855-45e2-b765-b9b66d532263", "Administrator", "ADMINISTRATOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "1d4bd0ee-46de-4ded-b590-5e2a0319c6d6");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "2e3752b5-4058-4e22-a9ff-681e7d19787a");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "6ce2a98b-798e-484c-b9fb-bf58f50ef3ad", "5ed9c094-340f-44c3-b60f-4884dd963710", "Visitor", "VISITOR" });

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c6faeddb-0c13-4d78-a98b-a56e9e6ef358", "eed1939e-dc67-4f82-a41e-180d9f3b7c67", "Administrator", "ADMINISTRATOR" });
        }
    }
}
