import React from "react";
import axios from "axios";
import { NavigationMenu } from "../navigation-bar/navigation-bar.component";
import { Footer } from "../home-footer/footer.component";
// import { Redirect } from 'react-router-dom';
//import {Animation} from "./animation";


export class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            passwordCon: ""
        }
    }

    handleUsernameR = (event) => {
        this.setState({
            name: event.target.value.trim()
        })
    }

    handlePasswordR = (event) => {
        this.setState({
            password: event.target.value.trim()
        })
    }

    handlePasswordConR = (event) => {
        this.setState({
            passwordCon: event.target.value.trim()
        })
    }

    handleEmailR = (event) => {
        this.setState({
            email: event.target.value.trim()
        })
    }

    handleUserRegistration = e => {
        e.preventDefault()
        console.log("[Client] -User Registration")
        console.log(this.state)

        const expression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (this.state.name !== "" && this.state.password !== "" && this.state.email !== "") {
            if (expression.test(String(this.state.email).toLowerCase()) && this.state.password === this.state.passwordCon) {

                if (!RegExp(/[0-9]/).test(this.state.password) ||
                    !RegExp(/[a-z]/).test(this.state.password) ||
                    !RegExp(/[!#@$%^&*)(+=._-]/).test(this.state.password)) {
                    var strength = 0;
                    if (RegExp(/[0-9]/).test(this.state.password)) {
                        strength += 1
                    }
                    if (RegExp(/[a-z]/).test(this.state.password)) {
                        strength += 1
                    }
                    if (RegExp(/[!#@$%^&*)(+=._-]/).test(this.state.password)) {
                        strength += 1
                    }

                    if (strength >= 2) {
                        alert("Mid Range Password")
                    } else {
                        alert("Weak Password")
                    }
                } else {
                    alert("Strong Password")
                }


              if (window.confirm("Are you sure to submit?"))
                    axios.post('http://speculo.isala.me/api/v1/user/register', this.state)
                        .then(response => {
                            console.log(response)
                            const parsedResponse = JSON.parse(JSON.stringify(response));
                            //console.log(parsedResponse.data.status)

                            if (parsedResponse.data.status === "success") {
                                //console.log(parsedResponse.status)
                                alert(parsedResponse.data.message);
                                window.location.href = "/login";
                            }
                            else {
                                console.log(parsedResponse.data.status)
                                alert(parsedResponse.data.message);

                            }
                            //console.log(response)
                        })
                        .catch(error => {
                            console.log(error);
                            if (error.message === 'Request failed with status code 409') {
                                alert("Account details already exists");
                            }
                            if (error.message === 'Request failed with status code 500') {
                                alert("Error in server, please try again later");
                            }
                        })


            } else {
                if (!expression.test(String(this.state.email).toLowerCase())) {
                    alert("Invalid Email Address.");
                }
                if (this.state.password !== this.state.passwordCon) {
                    alert("Passwords Doesn't Match.");

                }

            }
        } else {
            alert("All Fields Required!");
        }
    }

    handleAdminRegistration = e => {
        e.preventDefault()
        console.log("[Client] -User Registration")
        console.log(this.state)

        const expression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (this.state.name !== "" && this.state.password !== "" && this.state.email !== "") {
            if (expression.test(String(this.state.email).toLowerCase()) && this.state.password === this.state.passwordCon) {

                if (!RegExp(/[0-9]/).test(this.state.password) ||
                    !RegExp(/[a-z]/).test(this.state.password) ||
                    !RegExp(/[!#@$%^&*)(+=._-]/).test(this.state.password)) {
                    var strength = 0;
                    if (RegExp(/[0-9]/).test(this.state.password)) {
                        strength += 1
                    }
                    if (RegExp(/[a-z]/).test(this.state.password)) {
                        strength += 1
                    }
                    if (RegExp(/[!#@$%^&*)(+=._-]/).test(this.state.password)) {
                        strength += 1
                    }

                    if (strength >= 2) {
                        alert("Mid Range Password")
                    } else {
                        alert("Weak Password")
                    }
                } else {
                    alert("Strong Password")
                }


                if(window.confirm("Are you sure to submit?"))
                axios.post('http://speculo.isala.me/api/v1/admin/register', this.state)
                    .then(response => {
                        console.log(response)
                        const parsedResponse = JSON.parse(JSON.stringify(response));
                        //console.log(parsedResponse.data.status)

                        if (parsedResponse.data.status === "success") {
                            //console.log(parsedResponse.status)
                            alert(parsedResponse.data.message);
                            window.location.href = "/login";
                        }
                        else {
                            console.log(parsedResponse.data.status)
                            alert(parsedResponse.data.message);

                        }
                        //console.log(response)
                    })
                    .catch(error => {
                        console.log(error);
                        if(error.message === 'Request failed with status code 409'){
                            alert("Account details already exists");
                        }
                        if(error.message === 'Request failed with status code 500'){
                            alert("Error in server, please try again later");
                        }
                    })

            } else {
                if (!expression.test(String(this.state.email).toLowerCase())) {
                    alert("Invalid Email Address.");
                }
                if (this.state.password !== this.state.passwordCon) {
                    alert("Passwords Doesn't Match.");

                }

            }
        } else {
            alert("All Fields Required!");
        }
    }


    render() {
        return (
            <>
                {/* <Animation /> */}
                <div style={{ background: "#000000" }}>
                    <NavigationMenu />
                </div>

                <div className="base-container" ref={this.props.containerRef} style={{ marginTop: "10em", marginBottom: "10em" }}>

                    <div className="img-container">
                        <img src="https://i.imgur.com/PFMNraQ.png" alt="Cover"
                        className="cov-img"/>
                    </div>

                    <div className="content">
                        <div className="header"><b>Sign</b> Up</div>


                        {/* <div className="image">
                            <img src="https://i.imgur.com/oOJbf6t.png" alt="form-img" style={{ width: "24em" }} />
                        </div> */}


                        <div className="form">

                            <div className="form-group" style={{ marginBottom: "5px" }}>
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="username" value={this.state.name} onChange={this.handleUsernameR} 
                                style={{ marginBottom: "1em" }}/>
                            </div>

                            <div className="form-group" style={{ marginBottom: "5px" }}>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleEmailR} 
                                style={{ marginBottom: "1em" }}/>
                            </div>

                            <div className="form-group" style={{ marginBottom: "5px" }}>
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordR} 
                                style={{ marginBottom: "1em" }}/>
                            </div>

                            <div className="form-group" style={{ marginBottom: "11px" }}>
                                <label htmlFor="passwordCon">Re-Enter Password</label>
                                <input type="password" name="passwordCon" placeholder="Re-enter Password" value={this.state.passwordCon} onChange={this.handlePasswordConR} 
                                style={{ marginBottom: "1em" }}/>
                            </div>

                        </div>

                        <div className="footer" style={{ marginTop: "1em" }}>
                            <button type="button" className="sbtn" onClick={this.handleUserRegistration}>
                                User Register
                        </button>
                            <button type="button" className="sbtn" onClick={this.handleAdminRegistration}>
                                Admin Register
                        </button>
                        </div>

                    </div>



                </div>
                <div className="Footer">
                    <Footer />
                </div>
            </>
        )
    }
}