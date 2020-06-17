import React, { Component } from "react";
import { Link } from "react-router-dom";
import { myConfig } from './../../config'
import { Switch, Redirect,Route  } from 'react-router-dom';
import logo from '../../assets/logo_black.png'
import login_background from '../../assets/login_background.jpg'

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }

        this.state = {
            username: '',
            password: '',
            loggedIn: loggedIn
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault();
        fetch('https://fanuc-server.herokuapp.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": this.state.username,
                "password": this.state.password
            })
        })
            .then(res => {
                console.log(res)
                if (res.status == 400) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                console.log('error')
                    return res.json()
                }
                if (res.status == 200) {
                    return res.json()
                }
            })
            .then(json => {
                if ('message' in json) {
                    alert("Invalid username and password")
                }
                else {
                    localStorage.setItem('token', json.token);
                    this.setState({
                        loggedIn: true
                    });
                }

            });
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/profile" />
        }
        return (
            <>  
                <div className="login-box" style={{marginLeft:"15em"}}>
                    <div className="login-logo" style={{marginLeft:"-4em"}}>
                        <a><b><img src={logo} /></b></a>
                    </div>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form onSubmit={this.submitForm}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="username" name="username" 
                                     value={this.state.username}
                                     onChange={this.onChange}/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" name="password"
                                     value={this.state.password}
                                     onChange={this.onChange} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">
                                                Remember Me
                    </label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                        
                            <p className="mb-1">
                                <a href="forgot-password.html">I forgot my password</a>
                            </p>
                            <p className="mb-0">
                                <a href="register.html" className="text-center">Register a new membership</a>
                            </p>
                        </div>
                        {/* /.login-card-body */}
                    </div>
                </div>
            </>
        );
    }
}