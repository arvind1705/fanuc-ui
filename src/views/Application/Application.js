import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Switch, Redirect, Route } from 'react-router-dom';
import {ApplicationCard} from './components'
export default class Application extends Component {
    constructor(props) {
        super(props)

    }



    render() {


        return (
            <>
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Applications</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Applications</li>
                                    </ol>
                                </div>
                            </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    <div className="row m-4">
                       <ApplicationCard name="Drilling" link="/" />
                       <ApplicationCard name="Step Turning" link="/" />
                       <ApplicationCard name="Tapper Turning" link="/" />
                       <ApplicationCard name="ID Boring" link="/" />
                       </div>
                       <div className="row m-4">
                       <ApplicationCard name="Drilling" link="/" />
                       <ApplicationCard name="Step Turning" link="/" />
                       <ApplicationCard name="Tapper Turning" link="/" />
                       <ApplicationCard name="ID Boring" link="/" />
                       </div>
                       <div className="row m-4">
                       <ApplicationCard name="Drilling" link="/" />
                       <ApplicationCard name="Step Turning" link="/" />
                       <ApplicationCard name="Tapper Turning" link="/" />
                       <ApplicationCard name="ID Boring" link="/" />
                       </div>
                       <div className="row m-4">
                       <ApplicationCard name="Drilling" link="/" />
                       <ApplicationCard name="Step Turning" link="/" />
                       <ApplicationCard name="Tapper Turning" link="/" />
                       <ApplicationCard name="ID Boring" link="/" />
                       </div>
                       
                
                  
                </div>


            </>
        );
    }


}