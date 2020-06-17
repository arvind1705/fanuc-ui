import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class ToolImage extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        let input_dim = {
            position: "absolute",
            left: "320px",
            bottom: "100px",
            width: "100px"
        }
        return (<>
            <div className="col-md-5">
                <div className="row">
                    <div className="card col-md-12">
                        <div className="card-body" >
                            <img src={this.props.image.image_uri} alt="Logo" />
                            <input type="text" style={input_dim} />
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



        </>)
    }

}