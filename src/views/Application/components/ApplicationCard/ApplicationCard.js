import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
const ApplicationCard = (props) => (
    <div className="col-lg-3 col-6" >
        {/* small card */}
        <div className="small-box" style={{ backgroundColor: "#263053" }}>
            <div className="inner">
                <h3 style={{ color: "white" }}>{props.name}</h3>
                <br /><br />
            </div>
            <div className="icon">
                <i className="fas fa-tools" />
            </div>
            <NavLink to="/" activeClassName="small-box-footer">
                GO <i className="fas fa-arrow-circle-right" />
            </NavLink>
        </div>
    </div>);

export default ApplicationCard;