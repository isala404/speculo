import React from "react";
import axios from "axios";
import { NavigationMenu } from "../navigation-bar/navigation-bar.component";
import { Footer } from "../home-footer/footer.component";
import  { Redirect } from 'react-router-dom';
//import {Animation} from "./animation";


export class Unknown extends React.Component {


    render() {
        return (
            <>
                {/* <Animation /> */}
                <div style={{ background: "#000000" }}>
                    <NavigationMenu />
                </div>

                <center>
                <p style={{ marginTop:"10em", marginBottom:"10em", fontSize:"30px"}}> Error 404 Page not Found!</p>
                </center>
                
                <div className="Footer">
                    <Footer />
                </div>
            </>
        )
    }
}