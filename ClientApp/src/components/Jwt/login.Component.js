import axios from 'axios';
import React, {Component} from 'react';
import {Redirect ,Link} from "react-router-dom";
import '../MainPage/HeroSection.css';


export default class Login extends Component{
    
    state = {};
    
    handleSubmit=e=>{
        e.preventDefault();

        const data ={
            email:this.email,
            password:this.password
        }

        axios.post('api/Account/Login',data)
        .then(res =>{
            localStorage.setItem('token',res.data.token);

            this.setState({
                loggedIn: true
            });

              this.props.setUser(res.data.user);

        })
         .catch(err =>{

             this.setState({
                 message: err.response.data.message
             })
         })
    };

    render(){

        if (this.state.loggedIn){
            return <Redirect to={'/LoginPage'}/>;
        }

        let error = '';

        if(this.state.message){
            error = (
                <div className="alert alert-danger" role="alert">
                    {this.state.message}
                </div>
            )

        }

        return(
            <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
           
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>



                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email"
                        onChange={e=>this.email=e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password"
                        onChange={e=>this.password=e.target.value}/>
                </div>



                <button className="btn btn-primary btn-block">Login</button>
                 <p className="forgot-password text-right">
                      
                 <Link to={'/forgot'}>Forgot Password?</Link>

                 </p>
            
            </form>
            </div>
            </div>
        </div>
        )
    }
}