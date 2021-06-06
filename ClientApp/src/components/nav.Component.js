import { Link } from "react-router-dom";
import React,{Component} from 'react';


export default class Nav extends Component{

  handleLogout = () => {
    localStorage.clear();
    this.props.setUser(null);
  };

    render(){

      let buttons;

        if(this.props.user){
          buttons = (
            <ul className="navbar-nav ml-auto">
               <li className="nav-item">
                 <Link to={'/'} onClick={() => localStorage.clear()} className="nav-link" >Logout</Link>
               </li>
              
             </ul>
             )

        }else{
          buttons = (
          <ul className="navbar-nav ml-auto">
             <li className="nav-item">
               <Link to={'/login'} className="nav-link" >Login</Link>
             </li>
             <li className="nav-item">
               <Link to={'/register'} className="nav-link">Sign Up</Link>
             </li>
           </ul>
           )

        }

        return(
     <nav className="navbar navbar-expand navbar-light fixed-top">
       <div className="container">
         <Link className="navbar-brand" to={'/'}>Online Booking</Link>
         
         {/* <Link className="nav-link" to={'/HomeSection'}>Section</Link> */}
         <Link className="nav-link" to={'/FetchGuider'}>Guider List</Link>
         <Link className="nav-link" to='/FetchHotel'>Hotel List</Link>
         <Link className="nav-link" to={'/FetchTraveler'}>Traveler List</Link>
         <Link className="nav-link" to={'/FetchFeedBack'}>FeedBack</Link>

         <div className="collapse navbar-collapse">
              {buttons}
         </div>
       </div>
     </nav>
        )
    }

}