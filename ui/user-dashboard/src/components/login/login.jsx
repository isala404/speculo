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

        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        if (this.state.name != "" && this.state.password != "" && this.state.email != "") {
            if (expression.test(String(this.state.email).toLowerCase())) {

                axios.post('http://speculo.isala.me/api/v1/user/authenticate', this.state)
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
                        if(error.message=='Request failed with status code 401'){
                            alert("Invalid User Login Details");
                        }
                        if(error.message=='Request failed with status code 500'){
                            alert("Error in server, please try again later");
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

        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        if (this.state.name != "" && this.state.password != "" && this.state.email != "") {
            if (expression.test(String(this.state.email).toLowerCase())) {
                axios.post('http://speculo.isala.me/api/v1/admin/authenticate', this.state)
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
                        if(error.message=='Request failed with status code 401'){
                            alert("Invalid Admin Login Details");
                        }
                        if(error.message=='Request failed with status code 500'){
                            alert("Error in server, please try again later");
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
                <div style={{ background: "#000000" }}>
                    <NavigationMenu />
                </div>
                <div className="base-container" ref={this.props.containerRef} style={{ marginTop: "10em", marginBottom: "10em" }}>

                    <div className="header">Login</div>
                    <div className="content">

                        <div className="image">
                            <img src="https://i.imgur.com/SUfVdmc.png" style={{ width: "21em" }} />
                        </div>

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
                                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword} />
                            </div>

                        </div>

                    </div>

                    <div className="footer">
                        <button type="button" className="btn" onClick={this.handleUserLogin}>
                            User Login
                    </button>
                        <button type="button" className="btn" onClick={this.handleAdminLogin}>
                            Admin Login
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