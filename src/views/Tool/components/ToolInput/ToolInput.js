import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from './../../../../components/Button'
import NumberInput from '../../../../components/NumberInput'
import Radio from '../../../../components/Radio'
import Checkbox from '../../../../components/Checkbox'
import axios from 'axios';
import {myConfig} from '../../../../config'
const ImageNumberInput = (props) => {
    return <input type="number" className="form-control" id={props.lable} name={props.name} placeholder={props.text} step="0.00001" value={props.value}  onChange={props.onChange} required={props.required} style={props.dim || {}}/>

}

export default class ToolInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "renderdInput": "",
            "renderedImageInput":"",
            "data": {},
            "loading": true
        }

    }
    
    componentDidMount() {
        let renderedInputs = []
        let dyndata = {}
        this.props.input_fields.headings.forEach(element => {

            let inputParse = this.props.input_fields[element].map((val, index) => {

                dyndata[val.name] = ""

                if (val.type == "number") {
                    return <NumberInput label={val.label} name={val.name} text={val.text} value={this.state.data[val.name]} onChange={this.onChange} required={this.state.data[val.required]}/>
                }
                if (val.type == "radiobox") {
                    return <Radio label={val.label} name={val.name} text={val.text} value={this.state.data[val.name]} onChange={this.onChange} required={this.state.data[val.required]}/>
                }
                if (val.type == "checkbox") {
                    return <Checkbox label={val.label} name={val.name} text={val.text} value={this.state.data[val.name]} onChange={this.onChange} required={this.state.data[val.required]}/>
                }


            })

            renderedInputs.push(<><div className="card-header fetch_results"><h5>{element}</h5></div><div className="card-body">{inputParse}</div></>)


        })

        let image_inputs = this.props.image.input_fields.map(val => {
            console.log(val)
            dyndata[val.name] = ""
            let input_dim = {
                position: "absolute",
                left: "320px", //val.left //val.right     parameters supported
                bottom: "100px", //val.bottom //val.top
                width: "100px" //val.width //val.height
            }

            return <ImageNumberInput label={val.label} name={val.name} text={val.text} value={this.state.data[val.name]} onChange={this.onChange} required={this.state.data[val.required]} dim={input_dim}/>
            

        })

        this.setState({
            renderdInput: renderedInputs,
            loading: false,
            data: dyndata,
            renderedImageInput:image_inputs


        })


    }
     refreshPage = () => {
        window.location.reload(false);
      }

    generate = () => {
        const dummyData = {
            "tool_no": 1,
            "offset_no": 1,
            "rpm_no": 233,
            "drill_no": 12,
            "feed_no": 34,
            "is_program_end": "False",
            "operation_no": 23,
            "program_name": "O0011"
        }

        //Change the data field to this.state.data to send the actual inputs


        axios.post(myConfig.apiBackedUrl+'api/drilling', dummyData, {
            headers: {
                Authorization: "Token "+localStorage.getItem("token")
            }

        })
            .then(response => {
                this.props.setResult(response)

            })
            .catch(error => {
                console.log(error);
            });
    }


    onChange = (e) => {

        let { data } = { ...this.state };
        const currentState = data;
        const { name, value } = e.target
        currentState[name] = value
        this.setState({ data: currentState })


    }

    clear = () => {
        this.setState({
            data:{}
        })
    }

    render() {
        let input_dim = {
            position: "absolute",
            left: "320px",
            bottom: "100px",
            width: "100px",
            

        }

        let img_prop = {
            widht:"100%",
            objectFit:"cover",
           
                }


        return (<>
        <div className="col-md-5">
                <div className="row">
                    <div className="card col-md-12">
                        <div className="card-body" style={{overflowX:"hidden"}}>
                            <img src={this.props.image.image_uri} alt="Logo" style={img_prop}/>
                            {this.state.renderedImageInput}
                        </div>
                    </div>
                    <div className="card col-md-12">
                        <div className="card-body" >
                            <h5>Notes</h5>
                            <ul>
                                {
                                    this.props.notes.map(element => <li>{element}</li>)
                                } 
                             </ul>


                        </div>
                    </div>
                </div>

                {/* /.card-body */}
            </div>

            <div className="col-md-3">
                <div className="">
                    <div className="card col-md-12" style={{ height: "570px" }}>
                        <div className="card-header text-center">
                            <h4 style={{fontWeight:900}}>Input</h4>
                        </div>
                        <div className="card-body" style={{ overflowY: "scroll", }}>
                            {this.state.renderdInput}

                        </div>
                    </div>

                </div>


                <div className="card col-md-12 ">

                    <div className="card-body row">
                        <div className="col-md-6"><button className={"btn-lg btn-block btn-primary "} onClick={() => this.generate()}>Generate</button></div>
                        <div className="col-md-6"> <button className={"btn-lg btn-block btn-secondary reset"} onClick={() => this.refreshPage()}>Clear All</button></div>
                    </div>

                </div>
                {/* /.card-body */}
            </div>


            {/* /.card */}


        </>)
    }

}