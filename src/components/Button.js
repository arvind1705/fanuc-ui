import React, { Component }  from 'react';
const Button = (props) => (
    <button className={"btn" + " " + props.class_name} name={props.name}>{props.innerText}</button>
);

export default Button;