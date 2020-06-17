import React, { Component } from 'react';
const Checkbox = (props) => (
    <div className="custom-control custom-checkbox">
        <input className="custom-control-input" type="checkbox" id={props.label} name={props.name} value={props.value}  onChange={props.onChange} />
        <label htmlFor={props.label} className="custom-control-label">{props.label}</label>
    </div>
)

export default Checkbox;