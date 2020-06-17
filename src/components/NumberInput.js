import React, { Component } from 'react';
const NumberInput = (props) => (
  <div className="form-group row">
    <label htmlFor={props.label} className="col-sm-5 col-form-label" style={{ fontSize: "20px" }}>{props.label}</label>
    <div className="col-sm-7">
      <input type="number" className="form-control" id={props.lable} name={props.name} placeholder={props.text} step="0.00001" value={props.value}  onChange={props.onChange} required={props.required} style={props.dim || {}}/>
    </div>
  </div>
)

export default NumberInput