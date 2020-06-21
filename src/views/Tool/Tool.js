import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToolImage, ToolInput, ToolResult , Note, InpButtons} from './components'
import data from '../../dummydata/drilling.json'
import loading from '../../assets/loading.gif'
import {myConfig} from '../../config'
export default class Tool extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "heading": "",
            "loading": true,
            "image": null,
            "input_fields": null,
            "sub_input": null,
            "sub_input_heading": null,
            "result": "",
            "notes":"",
            "data": {},
            "image_data":{}
            
        }
    }


    componentDidMount() {
        axios.get(myConfig.apiBackedUrl+'api/drilling', {
            headers: {
                Authorization: "Token "+localStorage.getItem("token")
            }
        })
            .then(response => {
                this.setState({
                    "heading": response.data.data.data.heading,
                    "loading": false,
                    "image": response.data.data.data.image,
                    "input_fields": response.data.data.data.input_fields,
                    "sub_input": response.data.data.data.sub_input_fields,
                    "sub_input_heading": response.data.data.data.sub_heading,
                    "notes":response.data.data.data.notes

                })


            })
            .catch(error => {
                console.log(error);
            });


    }

    setImageData = (data) => {
        
    }

    setResult = (result) => {
        this.setState({
            result:result.data
        })
       
    }



    render() {        
            
         
        
        if (this.state.loading) {
            let loading = {
                position: "absolute",
                top: "50%",
                left: "50%",
                margin: "-50px 0px 0px -50px"
                }
            return (<><div className="content-wrapper" >
               <h5 style={loading}>loading....</h5>
               
          

        </div></>)
        }
        else {
            return (<>
                <div className="content-wrapper">
                    <div className="text-center">
                        <h1>{this.state.heading}</h1>
                        <br/>
                    </div>
                    <div className="content">
                        <div className="row justify-content-around">
                            <ToolInput input_fields={this.state.input_fields} setResult={this.setResult} height={this.state.image.dimensions.height} image={this.state.image} notes={this.state.notes}/>
                            <ToolResult result={this.state.result} />
                        </div>
                       
                    </div>

                </div>


            </>)

        }

    }

}