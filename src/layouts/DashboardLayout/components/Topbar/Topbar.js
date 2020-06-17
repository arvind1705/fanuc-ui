import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../../../assets/logo.png'
export default class Topbar extends Component {
    constructor(props) {
        super(props)
    }
    handleLogout = () => {
        localStorage.removeItem("token")
        window.location.href = '/'
    }

    render() {
        return (
            <nav className="main-header navbar navbar-expand text-sm navbar-dark navbar-lightblue">
                {/* Left navbar links */}
                <ul className="navbar-nav">



                </ul>
                {/* SEARCH FORM */}
                <img src={logo} height="70px"></img>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link"  href="#" role="button" onClick={this.handleLogout}>
                        Logout   <i className="fas fa-sign-out-alt" aria-hidden="true" title="logout"></i>

                        </a>
                    </li>

                </ul>
            </nav>)
    }

}