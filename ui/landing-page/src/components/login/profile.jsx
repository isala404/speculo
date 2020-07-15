import React from "react";
import axios from "axios";
import { Footer } from "../home-footer/footer.component";
//import {Animation} from "./animation";

export class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            password: "",
            passwordCon: ""
        }
    }

    handleUsername = (event) => {
        this.setState({
            name: event.target.value.trim()
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value.trim()
        })
    }

    handlePasswordConR = (event) => {
        this.setState({
            passwordCon: event.target.value.trim()
        })
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value.trim()
        })
    }

    handleLogout = e => {
        localStorage.clear();
        alert("successfully logged out!");
        window.location.href = "/login";
    }

    handleUpdate = e => {
        e.preventDefault()
        console.log("[Client] -User Registration")
        console.log(this.state)

        const expression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (this.state.name !== "" && this.state.password !== "" && this.state.email !== "") {
            if (expression.test(String(this.state.email).toLowerCase()) && this.state.password === this.state.passwordCon) {
                axios.post('http://ec2-18-217-163-34.us-east-2.compute.amazonaws.com:3000/user/update', this.state)
                    .then(response => {
                        console.log(response)
                        const parsedResponse = JSON.parse(JSON.stringify(response));
                        //console.log(parsedResponse.data.status)

                        if (parsedResponse.data.status === "success") {
                            //console.log(parsedResponse.status)
                            alert(parsedResponse.data.message);
                            localStorage.clear();
                            window.location.href = "/login";
                        }
                        else {
                            console.log(parsedResponse.data.status)
                            alert(parsedResponse.data.message);

                        }
                        //console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            } else {
                if (!expression.test(String(this.state.email).toLowerCase())) {
                    alert("Invalid Email Address.");
                }
                if (this.state.password !== this.state.passwordCon) {
                    alert("Passwords Don't Match.");

                }

            }
        } else {
            alert("All Fields Required!");
        }
    }

    // localStorage.setItem('_id', parsedResponse.data.data.user._id);
    // localStorage.setItem('name', parsedResponse.data.data.user.name);
    // localStorage.setItem('email', parsedResponse.data.data.user.email);
    // localStorage.setItem('password', parsedResponse.data.data.user.password);
    // localStorage.setItem('__v', parsedResponse.data.data.user.__v);
    // localStorage.setItem('token', parsedResponse.data.data.token);

    render() {
        return (
            <>
                {/* <Animation /> */}
                <center>
                <div className="base-container" ref={this.props.containerRef} style={{ marginTop: "10em", marginBottom: "10em" }}>

                    <div className="img-container">
                        <img src="https://i.imgur.com/PFMNraQ.png" alt="Cover"
                            className="cov-img"/>
                    </div>


                    <div className="content">
                        <div className="header">Profile : {this.state.name}</div>
                        {/* <div className="image">
                            <img src="https://i.imgur.com/e2CCsaP.png" alt="random-img" style={{ width: "21em" }} />
                        </div> */}

                        <div className="form">

                            <div className="form-group" style={{ marginBottom: "5px" }}>
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="username" value={this.state.name} onChange={this.handleUsername} 
                                style={{ marginBottom: "1em" }}/>
                            </div>

                            <div className="form-group" style={{ marginBottom: "5px" }}>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleEmail} 
                                style={{ marginBottom: "1em" }}/>
                            </div>

                            <div className="form-group" style={{ marginBottom: "5px" }}>
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword} 
                                style={{ marginBottom: "1em" }}/>
                            </div>

                            <div className="form-group" style={{ marginBottom: "11px" }}>
                                <label htmlFor="passwordCon">Re-Enter Password</label>
                                <input type="password" name="passwordCon" placeholder="Re-enter Password" value={this.state.passwordCon} onChange={this.handlePasswordConR} 
                                style={{ marginBottom: "1em" }}/>
                            </div>

                        </div>

                        <div className="footer" style={{ marginTop: "1em" }}>
                            <button type="button" className="sbtn" onClick={this.handleUpdate}>
                                Update Details
                        </button>

                            <button type="button" className="sbtn" onClick={this.handleLogout}>
                                Log Out
                        </button>
                        </div>


                    </div>

                </div>
                </center>

                <div className="Footer">
                    <Footer />
                </div>
            </>
        )
    }
}