import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Switch, Redirect, Route } from 'react-router-dom';

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "name":"",
            "email":"",
            "phone":"",
            "degree":"",
            "plan":"",
            "per_month":"",
            "days_left":"",
            "next_rech_date":""
        }

    }
    componentDidMount() {

        // UNcomment  after making an api
        // axios.get('https://fanuc-server.herokuapp.com/api/getdetails', {
        //     headers: {
        //         Authorization: "Token b87f96ba93ff172c14496ce7d817ce71a3c3037c"
        //     }
        // })
        //     .then(response => {
        //         this.setState({
        //             "name":response.data.name,
        //             "email":response.data.email,
        //             "phone":response.data.phone,
        //             "degree":response.data.degree,
        //             "plan":response.data.plan,
        //             "per_month":response.data.per_month,
        //             "days_left":response.data.days_left,
        //             "next_rech_date":response.data.next_rech_date,
        //             "total_projects":response.data.total_projects,
        //             "completed_projects":response.data.completed_projects,     

        //         })


        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        this.setState({
                        "name":"Vinodh Ramesh",
                        "email":"vindodh@gmail.com",
                        "phone":"98777988799",
                        "degree":"Engineering",
                        "plan":"1 Month Plan",
                        "per_month":"500Rs",
                        "days_left":"28 Days",
                        "next_rech_date":"Dec 12, 2020",
                        "total_projects":"100",
                        "completed_projects":"20",     
    
                    })


    }



    render() {


        return (
            <>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">User Profile</li>
                                    </ol>
                                </div>
                            </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row justify-content-md-center">
                                <div className="col-md-3">
                            
                                    {/* Profile Image */}
                                    <div className="card card-primary card-outline">
                                        <div className="card-body box-profile">
                                            <div className="text-center">
                                                <img className="profile-user-img img-fluid img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile picture" />
                                            </div>
                                            <h3 className="profile-username text-center">{this.state.name}</h3>
        <p className="text-muted text-center">{this.state.degree}</p>
                                            <ul className="list-group list-group-unbordered mb-3">
                                                <li className="list-group-item">
        <b>Email</b> <a className="float-right">{this.state.email}</a>
                                                </li>
                                                <li className="list-group-item">
                                                    <b>Phone</b> <a className="float-right">{this.state.phone}</a>
                                                </li>
                                                <li className="list-group-item">
        <b>Plan</b> <a className="float-right">{this.state.plan}</a>
                                                </li>
                                                <li className="list-group-item">
        <b>Per Month</b> <a className="float-right">{this.state.per_month}</a>
                                                </li>
                                                <li className="list-group-item">
        <b>Next Rechange Date</b> <a className="float-right">{this.state.next_rech_date}</a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                    {/* About Me Box */}
                                  
                                    {/* /.card */}
                                </div>
                                </div> <div class="row">
                                {/* /.col */}
                                <div className="card col-md-12">

                                    <div className="card-header p-2">
                                       
                                    </div>{/* /.card-header */}
                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="activity">
                                                <div className="row">
                                                    <div className="col-lg-4 col-6">
                                                        {/* small card */}
                                                        <div className="small-box bg-info">
                                                            <div className="inner">
                                                                <h3>150</h3>
                                                                <p>New Orders</p>
                                                            </div>
                                                            <div className="icon">
                                                                <i className="fas fa-shopping-cart" />
                                                            </div>
                                                            <a href="#" className="small-box-footer">
                                                                More info <i className="fas fa-arrow-circle-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {/* ./col */}
                                                    <div className="col-lg-4 col-6">
                                                        {/* small card */}
                                                        <div className="small-box bg-success">
                                                            <div className="inner">
                                                                <h3>53<sup style={{ fontSize: '20px' }}>%</sup></h3>
                                                                <p>Bounce Rate</p>
                                                            </div>
                                                            <div className="icon">
                                                                <i className="ion ion-stats-bars" />
                                                            </div>
                                                            <a href="#" className="small-box-footer">
                                                                More info <i className="fas fa-arrow-circle-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {/* ./col */}
                                                    <div className="col-lg-4 col-6">
                                                        {/* small card */}
                                                        <div className="small-box bg-warning">
                                                            <div className="inner">
                                                                <h3>44</h3>
                                                                <p>Projects Completed</p>
                                                            </div>
                                                            <div className="icon">
                                                                <i className="fas fa-user-plus" />
                                                            </div>
                                                            <a href="#" className="small-box-footer">
                                                                More info <i className="fas fa-arrow-circle-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {/* ./col */}
                                                   
                                                    {/* ./col */}
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="settings">
                                                <form className="form-horizontal">
                                                    <div className="form-group row">
                                                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                                        <div className="col-sm-10">
                                                            <input type="email" className="form-control" id="inputName" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                                        <div className="col-sm-10">
                                                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="inputName2" className="col-sm-2 col-form-label">Name</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" id="inputName2" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="inputExperience" className="col-sm-2 col-form-label">Experience</label>
                                                        <div className="col-sm-10">
                                                            <textarea className="form-control" id="inputExperience" placeholder="Experience" defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Skills</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" id="inputSkills" placeholder="Skills" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="offset-sm-2 col-sm-10">
                                                            <div className="checkbox">
                                                                <label>
                                                                    <input type="checkbox" /> I agree to the <a href="#">terms and conditions</a>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="offset-sm-2 col-sm-10">
                                                            <button type="submit" className="btn btn-danger">Submit</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>{/* /.card-body */}

                                    {/* /.nav-tabs-custom */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* /.content */}
                </div>

            </>
        );
    }


}