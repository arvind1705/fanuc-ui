import React, { Component } from 'react';
const Radio = (props) => {
    return (
        <div className="custom-control custom-radio">
            <input className="custom-control-input" type="radio" id={props.text} name={props.name} value={props.text} onChange={props.onChange} />
            <label htmlFor={props.text} className="custom-control-label" style={{ fontSize: "20px" }}>{props.label}</label>
        </div>)
}

export default Radio;