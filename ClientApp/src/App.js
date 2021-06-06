import React, { Component } from 'react';
//import Navbar from './components/Navbar';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import  Home from './components/Home';
import FetchGuider from './components/FetchGuider';
import { BrowserRouter, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import FetchHotel from './components/FetchHotel';
import FetchTraveler from './components/FetchTraveler';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/nav.Component";
import Register from "./components/Jwt/register.component";
import Login from "./components/Jwt/login.Component";
import HomeSection from './components/HomeSection.Component';
import axios from 'axios';
import LoginPage from "./components/Jwt/loginPage";
import Forgot from "./components/Jwt/forgot.component";
import Reset from './components/Jwt/reset.component';
import PreGuider from './components/PreGuider';
import PreHotel from './components/PreHotel';
import PreTraveler from './components/PreTraveler';
import FetchFeedBack from './components/Feedback/FetchFeedBack';


export default class App extends Component{

  state = {};
  componentDidMount = () => {

  //  const config = {
  //      headers: {
  //          Authorization: 'Bearer' + localStorage.getItem('token')
  //      }
  //  };

      axios.get('api/Account/Users').then(
          res =>{
             this.setUser(res.data);
                   
          },
          err =>{
              console.log(err)
          }
      )
  };

  setUser = user => {
    this.setState({

      user:user

  });

  };

  render(){

  return (
    // <>
    //    <Router>
    //     <Navbar />
    //     <Switch>
    //       <Route path='/' exact component={Home} />
    //       <Route path='/FetchGuider' component={FetchGuider} />
    //       <Route path='/FetchHotel' component={FetchHotel} />
    //        <Route path='/FetchTraveler' component={FetchTraveler} /> 
       
    //     </Switch>
    //   </Router> 
     
    // </>
    <BrowserRouter>
     <div className="App">

     <Route exact path='/loginPage' component={LoginPage} />       
       <Nav user={this.state.user} setUser={this.setUser}/>
      
       
      
   
         
           <Switch>
           <Route path='/' exact component={Home } />
           <Route path='/HomeSection' exact component={()=><HomeSection user ={this.state.user}/>} />
           <Route path='/FetchGuider' component={FetchGuider} />
           <Route path='/FetchHotel' component={FetchHotel} />
            <Route path='/FetchTraveler' component={FetchTraveler} /> 
            <Route path='/FetchFeedBack' component={FetchFeedBack} /> 
           
            <Route exact path='/PreGuider' component={PreGuider} />
            <Route exact path='/PreHotel' component={PreHotel} />
            <Route exact path='/PreTraveler' component={PreTraveler} />

            
           
           <Route exact path='/login' component={() => <Login setUser={this.setUser}/>} />
           <Route exact path='/register' component={Register} />
           <Route exact path='/forgot' component={Forgot} />
           <Route exact path='/reset/:id' component={Reset} />
           </Switch>
        
    
     
   </div>
   </BrowserRouter>
    
  );
}
}

//export default App;



/*export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/FetchGuider' component={FetchGuider} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
*/