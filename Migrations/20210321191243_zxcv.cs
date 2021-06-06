using Microsoft.EntityFrameworkCore.Migrations;

namespace Online_Booking_Tourism.Migrations
{
    public partial class zxcv : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "5934edb4-a3ef-494e-942a-2064160d0ce6");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "d372b93e-9b7e-4e79-81e5-1c94c2921342");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "6ce2a98b-798e-484c-b9fb-bf58f50ef3ad", "5ed9c094-340f-44c3-b60f-4884dd963710", "Visitor", "VISITOR" });

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c6faeddb-0c13-4d78-a98b-a56e9e6ef358", "eed1939e-dc67-4f82-a41e-180d9f3b7c67", "Administrator", "ADMINISTRATOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
                values: new object[] { "5934edb4-a3ef-494e-942a-2064160d0ce6", "5b203145-e57a-45d6-a050-de245e886393", "Visitor", "VISITOR" });

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "d372b93e-9b7e-4e79-81e5-1c94c2921342", "d83a3000-f00b-4445-8928-fe7375efd835", "Administrator", "ADMINISTRATOR" });
        }
    }
}
