import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from '../../../../assets/logo.png'
export default class Sidebar extends Component {
    constructor(props){
        super(props)
    }

    handleLogout = () => {
      localStorage.removeItem("token")
      window.location.href = '/'
  }

    render(){
        return (<aside className="main-sidebar elevation-4 sidebar-dark-lightblue">
        {/* Brand Logo */}
       
          
          
     
        {/* Sidebar */}
        <div className="sidebar os-host os-theme-light os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition os-host-overflow os-host-overflow-y" style={{backgroundColor:"#263053"}}><div className="os-resize-observer-host observed"><div className="os-resize-observer" style={{left: '0px', right: 'auto'}} /></div><div className="os-size-auto-observer observed" style={{height: 'calc(100% + 1px)', float: 'left'}}><div className="os-resize-observer" /></div><div className="os-content-glue" style={{margin: '0px -8px', width: '249px', height: '546px'}} /><div className="os-padding"><div className="os-viewport os-viewport-native-scrollbars-invisible" style={{overflowY: 'scroll'}}><div className="os-content" style={{padding: '0px 8px', height: '100%', width: '100%'}}>
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div className="image">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                  </div>
                  <div className="info">
                    <a href="#" className="d-block big-font-sidebar">VR Solutions</a>
                  </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                  <ul className="nav nav-pills nav-sidebar flex-column nav-legacy" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
                    
                    <li className="nav-item">
                    <Link to="/profile"><a className="nav-link">
                        <i className="nav-icon fas fa-file" />
                        <p className="big-font-sidebar">Overview</p>
                      </a>
                      </Link>
                    </li>
                 
                    <li className="nav-item">
                    <Link to="/application"><a className="nav-link">
                        <i className="nav-icon fas fa-th" />
                        <p className="big-font-sidebar">Application</p>
                      </a></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/plans"> <a className="nav-link">
                        <i className="fas fa-circle nav-icon" />
                        <p className="big-font-sidebar">Plans</p>
                      </a></Link>
                    </li>
                    <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-circle text-danger"></i>
              <p className="text big-font-sidebar" onClick={this.handleLogout}>Logout</p>
            </a>
          </li>
                  </ul>
                </nav>
                {/* /.sidebar-menu */}
              </div></div></div><div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track"><div className="os-scrollbar-handle" style={{width: '100%', transform: 'translate(0px, 0px)'}} /></div></div><div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden"><div className="os-scrollbar-track"><div className="os-scrollbar-handle" style={{height: '57.8836%', transform: 'translate(0px, 0px)'}} /></div></div><div className="os-scrollbar-corner" /></div>
        {/* /.sidebar */}
      </aside>
    );
    }

}