import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

export default class Reset extends Component{

    state = {};

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            token: this.props.match.params.id,
            password: this.password,
            confirmPassword: this.confirmPassword
        }

           axios.post('reset',data).then(
               res =>{
                   console.log(res);
                   this.setState({
                       reset:true
                   });

               }
           ).catch(
               err =>{
                this.setState({
                    message: err.response.data.message
                })
               }
           )

    };



    render(){
        if (this.state.reset){
            return <Redirect to={'/login'}/>
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
                {error}
                <h3>Reset Password</h3>


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



                <button className="btn btn-primary btn-block">Submit</button>

            
            </form>
            </div>
            </div>
        </div>
        )
    }


} 