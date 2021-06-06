import axios from 'axios';
import React, {Component} from 'react';
import '../MainPage/HeroSection.css';

export default class Register extends Component{

    state = {};

    handleSubmit=e=>{
        e.preventDefault();
        const data={
            firstName:this.firstName,
            lastName:this.lastName,
            email:this.email,
            password:this.password,
            confirmPassword:this.confirmPassword
        };
        axios.post('api/Account/Register',data).then(
            res=>{
                console.log(res)
            }
        ).catch(
            err=>{
                this.setState({
                    message: err.response.data.message
                })
            }
        )
    };

    render(){

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

                {error}

                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First Name"
                        onChange={e=>this.firstName=e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name"
                        onChange={e=>this.lastName=e.target.value}/>
                </div>

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

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password"
                        onChange={e=>this.confirmPassword=e.target.value}/>
                </div>

                <button className="btn btn-primary btn-block">Sign Up</button>
            </form>
            </div>
            </div>
            </div>
        )
    }
}