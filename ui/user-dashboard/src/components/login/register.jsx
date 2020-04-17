import React from "react";
import axios from "axios";

export class Register extends React.Component {

    constructor(props){
        super(props);

        this.state={
            name:"",
            email:"",
            password:""
        }
    }

    handleUsernameR = (event) =>{
        this.setState({
            name: event.target.value.trim()
        })
    }

    handlePasswordR = (event) =>{
        this.setState({
            password: event.target.value.trim()
        })
    }

    handleEmailR = (event) =>{
        this.setState({
            email: event.target.value.trim()
        })
    }

    handleUserRegistration = e =>{
        e.preventDefault()
        console.log("[Client] -User Registration")
        console.log(this.state)

        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        if(this.state.name!="" && this.state.password!="" && this.state.email!=""){
        if(expression.test(String(this.state.email).toLowerCase())){
        axios.post('http://ec2-18-217-163-34.us-east-2.compute.amazonaws.com:3000/user/register', this.state)
        .then(response=>{
            console.log(response)
            const parsedResponse = JSON.parse(JSON.stringify(response));
            //console.log(parsedResponse.data.status)

            if (parsedResponse.data.status==="success"){
                //console.log(parsedResponse.status)
                alert(parsedResponse.data.message);
            }
            else{
                console.log(parsedResponse.data.status)
                alert(parsedResponse.data.message);
            }
            //console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }else{
        alert("Invalid Email Address.")
    }
    }else{
        alert("All Fields Required!")
    }
    }

    render(){
        return(
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">

                <div className="image">
                    <img src="https://pro2-bar-s3-cdn-cf5.myportfolio.com/5bb77af94b64eb4acba686a152680793/6ae492b9-5cd7-4e98-b847-90c34d5b614c_rwc_0x0x2151x714x4096.png?h=713120e1ab2a22323d4a53f0cffb4b3a"/>
                </div>

                <div className="form">

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" value={this.state.name} onChange={this.handleUsernameR}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleEmailR}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordR}/>
                    </div>

                </div>

            </div>

            <div className="footer">
                <button type="button" className="btn" onClick={this.handleUserRegistration}>
                    Register
                </button>
            </div>

        </div>
        )
    }
}