import React from "react";

export default class Camvas extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        this.updateCanvas()
    }
    componentDidUpdate(){
        this.updateCanvas()
    }
    updateCanvas(){
        const ctx = this.refs.camvas.getContext("2d");
        var image = new Image();
        image.src=`${this.props.source}`;
        image.onload = () => {
            ctx.drawImage(image, 0, 0);
        }
        var width = window.innerWidth
        ctx.clearRect(0, 0,width, 1000); 
    }

    render(){
        return(
            <div>
                <canvas ref="camvas" width = {window.innerWidth} height={1000}/>
            </div>
        )
    }
}
