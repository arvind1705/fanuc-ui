import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Footer extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return ( <footer className="main-footer">
        <strong>Copyright © 2014-2020 <a href="https://adminlte.io">VR Solutions</a>.</strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.1.0-pre
        </div>
      </footer>
    );
    }

}