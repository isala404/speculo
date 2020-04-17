import React, {Component} from "react";
import '../styles/commonStyles.scss';
import {Button, Modal} from 'react-bootstrap';

class Person extends Component{

    constructor(props){
        super(props);

        // const [show, setShow] = React.useState(false);
          
        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);


        this.state = {
            id: this.props.id,
            name: this.props.name,
            timestamps: this.props.timestamps,
            blacklisted: this.props.blacklisted,             // black-listed status of the person (1 = black-listed, 0 = white-listed)

            show: false
        };

        // this.newName = this.state.name;
        // this.newBlacklistedSatus = blacklisted;
    }


    // use style components to check if blacklisted = 1  ->  make background-color of the PersonCard: red or black
    //          else if  blacklisted = 0   ->  background-color of the PersonCard: whitish background color





    nameHandler = (e) => {
        this.setState({name: e.target.value})          // accessing inserted input and setting it's value to the name
        console.log(this.state.name);
    }

    blacklistedHandler(e){
        // this.setState({newBlacklistedSatus: e.target.value})     // accessing inserted input and setting it's value to blacklisted status
    }
    
    handleSave() {
        const personDetails = {
            // this.state;

        }
        console.log(personDetails);
        // this.props.editPersonSave(personDetails)          // sends the new person details to the parent component
    }
      


    render(){

        // const EditPopUp = () => {                   // better to have this as a separate component as it's needed for the records table as well
          
            return (
              <>
                <Button variant="primary" onClick={() => this.setState({show:true})}>
                    Edit Name/ Blacklist status
                </Button>

                <Modal show={this.state.show} onHide={() => this.setState({show:false})}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Person Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><span className="modal-lable">Name: </span><input value={this.state.name} onChange={this.nameHandler} /></p>

                         {/* change true false to a checkbox toggle */}
                        <p><span className="modal-lable">Black-listed status: </span><input value={this.state.blacklisted} onChange={(e) => this.blacklistedHandler(e)} /></p>
                        {/* Woohoo, you're reading this text in a modal! */}
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button> */}
                        <Button variant="primary" onClick={this.handleSave}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
              </>
            );
        //   }
          

        const nameOfPerson =this.props.name;
        const isUnknown = nameOfPerson.startsWith("Unknown");       // checking if the person is unknown

        return(
            <div id="personCard">
            {/* show Time cards when clicked */}
                <div onClick = {this.props.onChoose} style={{cursor: "pointer"}}>
                    <div>~Image of the Person~</div>
                    <p>{this.props.name}</p>
                </div>

                {/* <button  className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                    onClick= {this.props.onRequestEdit}>
                    Edit Name/ Blacklist status
                </button> */}
                
                <EditPopUp/>


                {/* if(nameOfPerson.startsWith("Unknown"){ */}
                {isUnknown
                ? <div></div>   // delete should be shown only if name doesn't contain unknown
                : <div>
                    {/* Have a cross mark instead of Delete text */}
                    <button className="btn btn-danger" onClick = { this.props.onDelete }>
                        Delete
                    </button>
                </div>
                }

            </div>
            )
    }
}

export default Person;