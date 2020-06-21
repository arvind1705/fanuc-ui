import React, {Component} from "react";
import {Link} from "react-router-dom";
import login_background from '../../assets/login_background.jpg'
export default class AuthLayout extends Component {
    constructor(props){
        super(props)
    }


    render() {  
        console.log(login_background)
        const login_style  = {
            backgroundColor:"white",
            backgroundImage: "url(" + login_background + ")",
            backgroundRepeat:"no-repeat",
            backgroundSize:"100% 100%",
            overflowX:"hidden"
        }
            return (<div className="login-page" style={login_style} >
            <div className="wrapper" style={{backgroundColor:"white", width:"50%", marginLeft:"65em"}}>
            
            
            {this.props.children}
            
            
            </div>
        </div>)
    }

}