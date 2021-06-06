using Microsoft.EntityFrameworkCore.Migrations;

namespace Online_Booking_Tourism.Migrations
{
    public partial class changevariables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "6511c664-9fc8-4729-b89b-8365e2abc838");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "de87542d-f03a-4965-ac30-d05aa8426153");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Travelers",
                newName: "TravelerId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Hotels",
                newName: "HotelId");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "5934edb4-a3ef-494e-942a-2064160d0ce6", "5b203145-e57a-45d6-a050-de245e886393", "Visitor", "VISITOR" });

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "d372b93e-9b7e-4e79-81e5-1c94c2921342", "d83a3000-f00b-4445-8928-fe7375efd835", "Administrator", "ADMINISTRATOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "5934edb4-a3ef-494e-942a-2064160d0ce6");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "d372b93e-9b7e-4e79-81e5-1c94c2921342");

            migrationBuilder.RenameColumn(
                name: "TravelerId",
                table: "Travelers",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "HotelId",
                table: "Hotels",
                newName: "Id");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "6511c664-9fc8-4729-b89b-8365e2abc838", "27036b9e-d58c-4e81-8c94-1489dac75d48", "Visitor", "VISITOR" });

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "de87542d-f03a-4965-ac30-d05aa8426153", "8cd97a00-f7ee-43a9-93e8-e40129263218", "Administrator", "ADMINISTRATOR" });
        }
    }
}
