using AutoMapper;
using Online_Booking_Tourism.Models.jwt;

namespace Online_Booking_Tourism
{
    internal class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<UserRegistrationModel, User>()
               .ForMember(u => u.UserName, opt => opt.MapFrom(x => x.Email));

            //CreateMap<UserRegistrationModel, User>()
            //  .ForMember(u => u.FirstName, opt => opt.MapFrom(x => x.Email));

            //CreateMap<UserRegistrationModel, User>()
            //   .ForMember(u => u.LastName, opt => opt.MapFrom(x => x.Email));
        }
    }
} 