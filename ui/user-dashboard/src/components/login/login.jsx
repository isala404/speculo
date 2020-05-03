import React from "react";
import axios from "axios";
import { NavigationMenu } from "../navigation-bar/navigation-bar.component";
import { Footer } from "../home-footer/footer.component";
//import {Animation} from "./animation";


export class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: ""
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

    handleEmail = (event) => {
        this.setState({
            email: event.target.value.trim()
        })
    }

    handleUserLogin = e => {
        e.preventDefault()
        console.log("[Client] -User Login")
        console.log(this.state)

        const expression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (this.state.name !== "" && this.state.password !== "" && this.state.email !== "") {
            if (expression.test(String(this.state.email).toLowerCase())) {

                axios.post('https://speculo.isala.me/api/v1/user/authenticate', this.state)
                    .then(response => {
                        const parsedResponse = JSON.parse(JSON.stringify(response));
                        if (parsedResponse.data.status === "success") {
                            alert(parsedResponse.data.message);

                            localStorage.setItem('_id', parsedResponse.data.data.user._id);
                            localStorage.setItem('name', parsedResponse.data.data.user.name);
                            localStorage.setItem('email', parsedResponse.data.data.user.email);
                            localStorage.setItem('password', parsedResponse.data.data.user.password);
                            localStorage.setItem('__v', parsedResponse.data.data.user.__v);
                            localStorage.setItem('token', parsedResponse.data.data.token);
                            localStorage.setItem('type', parsedResponse.data.data.user.type);

                            //alert(parsedResponse.data.data.user.email)
                            alert("Login Success!");
                            window.location.href = "/";

                        }
                        else {
                            alert(parsedResponse.data.message);
                        }
                        //console.log(response)
                    })
                    .catch(error => {
                        console.log(error);

                        if(error.message === 'Request failed with status code 401'){
                            alert("Invalid User Login Details");
                        }
                        if(error.message === 'Request failed with status code 500'){
                            alert("Something wrong on our side, please try again later");

                        }
                    })
            } else {
                alert("Invalid Email Address.")
            }
        } else {
            alert("All Fields Required!")
        }
    }

    handleAdminLogin = e => {
        e.preventDefault()
        console.log("[Client] -Admin Login")
        console.log(this.state)

        const expression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (this.state.name !== "" && this.state.password !== "" && this.state.email !== "") {
            if (expression.test(String(this.state.email).toLowerCase())) {
                axios.post('https://speculo.isala.me/api/v1/admin/authenticate', this.state)
                    .then(response => {
                        const parsedResponse = JSON.parse(JSON.stringify(response));
                        if (parsedResponse.data.status === "success") {
                            alert(parsedResponse.data.message);
                            console.log(parsedResponse);

                            localStorage.setItem('_id', parsedResponse.data.data.user._id);
                            localStorage.setItem('name', parsedResponse.data.data.user.name);
                            localStorage.setItem('email', parsedResponse.data.data.user.email);
                            localStorage.setItem('password', parsedResponse.data.data.user.password);
                            localStorage.setItem('__v', parsedResponse.data.data.user.__v);
                            localStorage.setItem('token', parsedResponse.data.data.token);
                            localStorage.setItem('type', parsedResponse.data.data.user.type);

                            //alert(parsedResponse.data.data.user.email)
                            alert("Login Success!");
                            window.location.href = "/";

                        }
                        else {
                            alert(parsedResponse.data.message);
                        }
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error);

                        if(error.message === 'Request failed with status code 401'){
                            alert("Invalid Admin Login Details");
                        }
                        if(error.message === 'Request failed with status code 500'){
                            alert("Something wrong on our side, please try again later");

                        }
                    })
            } else {
                alert("Invalid Email Address.")
            }
        } else {
            alert("All Fields Required!")

        }
    }

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
                        <div className="header"><b>Log</b> In</div>
                        {/* <div className="image">
                            <img src="https://i.imgur.com/SUfVdmc.png" alt="random-img"  style={{ width: "23em" }} />
                        </div> */}

                        <div className="form">

                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="username" value={this.state.name} onChange={this.handleUsername} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleEmail} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword} 
                                style={{ marginBottom: "1.6em" }}/>
                            </div>

                        </div>

                        <div className="footer">
                            <button type="button" className="sbtn" onClick={this.handleUserLogin}>
                                User Login
                            </button>
                            <button type="button" className="sbtn" onClick={this.handleAdminLogin}>
                                Admin Login
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