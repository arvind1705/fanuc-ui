import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import {Topbar, Footer, Sidebar} from './components'
export default class DashboardLayout extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: localStorage.getItem("token") || '',
            
        }
    }


    render() { 
        if (localStorage.getItem("token") == null || localStorage.getItem("token") == "") {
            return <Redirect to='/login'/>;

        }
        else {
            return (<div class="sidebar-mini layout-fixed control-sidebar-slide-open accent-lightblue text-sm sidebar-collapse">
            <div className="wrapper">
            <Topbar />
            <Sidebar />
            
            {this.props.children}
            
            <Footer />
            </div>
        </div>)

        }           
            
    }

}