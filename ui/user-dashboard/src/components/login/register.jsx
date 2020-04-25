import React from "react";
import axios from "axios";
import { NavigationMenu } from "../navigation-bar/navigation-bar.component";
import { Footer } from "../home-footer/footer.component";
import  { Redirect } from 'react-router-dom';
import {Animation} from "./animation";


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

        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        if (this.state.name != "" && this.state.password != "" && this.state.email != "") {
            if (expression.test(String(this.state.email).toLowerCase()) && this.state.password==this.state.passwordCon) {
                axios.post('http://ec2-18-217-163-34.us-east-2.compute.amazonaws.com:3000/user/register', this.state)
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
                        console.log(error)
                    })
            } else {
                if (!expression.test(String(this.state.email).toLowerCase())){
                    alert("Invalid Email Address.");
                }
                if (this.state.password!=this.state.passwordCon){
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

        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        if (this.state.name != "" && this.state.password != "" && this.state.email != "") {
            if (expression.test(String(this.state.email).toLowerCase()) && this.state.password==this.state.passwordCon) {
                axios.post('http://ec2-18-217-163-34.us-east-2.compute.amazonaws.com:3000/admin/register', this.state)
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
                        console.log(error)
                    })
            } else {
                if (!expression.test(String(this.state.email).toLowerCase())){
                    alert("Invalid Email Address.");
                }
                if (this.state.password!=this.state.passwordCon){
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
                <Animation />
                <div style={{ background: "#000000" }}>
                    <NavigationMenu />
                </div>
                <div className="base-container" ref={this.props.containerRef} style={{ marginTop:"10em", marginBottom:"10em" }}>
                    <div className="header">Register</div>
                    <div className="content">

                        <div className="image">
                            <img src="https://i.imgur.com/oOJbf6t.png" style={{ width: "20em" }} />
                        </div>

                        <div className="form">

                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="username" value={this.state.name} onChange={this.handleUsernameR} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleEmailR} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordR} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="passwordCon">Re-Enter Password</label>
                                <input type="password" name="passwordCon" placeholder="Re-enter Password" value={this.state.passwordCon} onChange={this.handlePasswordConR} />
                            </div>

                        </div>

                    </div>

                    <div className="footer">
                        <button type="button" className="btn" onClick={this.handleUserRegistration}>
                            User Register
                        </button>
                        <button type="button" className="btn" onClick={this.handleAdminRegistration}>
                            Admin Register
                        </button>
                    </div>

                </div>
                <div className="Footer">
                    <Footer />
                </div>
            </>
        )
    }
}