import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class ToolResult extends Component {
    constructor(props) {
        super(props)
    }
    downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('download').textContent], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "data.nc";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      }

    render() {

        let data = this.props.result.data
        if (data != undefined) {
            data = data.toString().replace('/\n/', '(<br />)')
            console.log(data)

        }
        return (<>
            <div className="col-md-3 ml-3"  >
                <div className="row">
                    <div className="card col-md-12" style={{ height: "570px" }}>
                        <div className="card-header text-center">
                            <h4 style={{fontWeight:900}}>Generated Program</h4>
                        </div>
                        <div  className="card-body" style={{ overflowY: "scroll", }}>
                            <pre id="download" style={{ fontSize: "20px" }}>{data}</pre>

                        </div>
                    </div>
                    <div className="card col-md-12 ">

                        <div className="card-body row">
                            <div className="col-md-12"><button className={"btn-lg btn-block btn-primary "} onClick={this.downloadTxtFile}>Download</button></div>
                        </div>

                    </div>
                </div>

            </div>
         


        </>)
    }

}