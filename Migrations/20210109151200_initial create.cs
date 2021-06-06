using Microsoft.EntityFrameworkCore.Migrations;

namespace Online_Booking_Tourism.Migrations
{
    public partial class initialcreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admins",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admins", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Guiders",
                columns: table => new
                {
                    GuiderId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GuiderName = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Place = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    TelephoneNumber = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    Price = table.Column<string>(type: "nvarchar(20)", nullable: false),
                    ImageName = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Guiders", x => x.GuiderId);
                });

            migrationBuilder.CreateTable(
                name: "Hotels",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HotelName = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Place = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    AcNoneac = table.Column<bool>(type: "bit", nullable: false),
                    Price = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    ImageName = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hotels", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Travelers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TravellerName = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Place = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    TelephoneNumber = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    TravellingDate = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    ImageName = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Travelers", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Admins");

            migrationBuilder.DropTable(
                name: "Guiders");

            migrationBuilder.DropTable(
                name: "Hotels");

            migrationBuilder.DropTable(
                name: "Travelers");
        }
    }
}
