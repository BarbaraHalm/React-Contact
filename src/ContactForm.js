import React, { Component } from 'react';

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            user: [
                //{
                    //name: "",
                    //phonenumber: "",
                    //location: ""
                //},
                {
                    name: "Winifred",
                    phonenumber: "+233 24(458)0542",
                    location: "East Legon"
                },
                //{
                    //name: "Kelly",
                    //phonenumber: "+44 (567)455-8786",
                    //location: "Aston,Brimingham"
                //},
                //{
                   // name: "Irene",
                    //phonenumber: "+1 (467)213-2887",
                    //location: "Jonesboro,Georgia"
                //},
            ]
        }
    }
    handleName = (event) => {
        this.setState(
            { name: event.target.value }
        );
    }
    handlePhoneNumber = (event) => {
        this.setState(
            { phonenumber: event.target.value }
        );
    }
    handleLocation = (event) => {
        this.setState(
            { location: event.target.value }
        );
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            user:
                [...this.state.user,
                {
                    name: this.state.name,
                    phonenumber: this.state.phonenumber,
                    location: this.state.location
                }
                ]
        });
    };
    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     //   setStudents([...students,{name}])
    //     this.setState({
    //         user: [
    //             {
    //         name: this.state.name,
    //         phonenumber: this.state.phonenumber,
    //         location: this.state.location,
    //     }
    // ]
    //     })
    // }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} id="form">
                    <h1>CONTACT FORM FOR STUDENTS</h1>
                    <label htmlFor="name">Name</label><br/>
                    <input type="text" name="name" onChange={this.handleName} value={this.state.name} id="name" /><br />

                    <label htmlFor="name">Phone No.</label><br/>
                    <input type="text" name="name" onChange={this.handlePhoneNumber} value={this.state.phonenumber} id="phonenumber" /><br />

                    <label htmlFor="name">Location</label><br/>
                    <input type="text" name="name" onChange={this.handleLocation} value={this.state.location} id="location" /><br />

                    <button onChange={this.handleSubmit}>Submit</button>
                </form>
                {this.state.user.map((info, index) => {
                    return (
                        <div className="items" key={index}>
                            <h3>Name:{info.name}</h3>
                            <h3>Phonenumber:{info.phonenumber}</h3>
                            <h3>Location:{info.location}</h3>
                        </div>
                    )
                })}
            </>
        );
    }
}
export default ContactForm;