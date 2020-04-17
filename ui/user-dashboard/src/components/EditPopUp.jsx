// import React, {Component} from 'react';

// class EditPopUp extends Component{
//     constructor(props){
//         super(props);
//         this.handleSave = this.handleSave.bind(this);

//         this.state = {
//             id: '',
//             name: '',
//             timestamps:'',
//             blacklisted:''
//         }
//     }
    
//     // getting the chosen person's details in the parent component to set the pop-up's input text fields with existing data
//     componentWillReceiveProps(nextProps) {
//         this.setState({             // receiving all data, to make sure that the dashboard will be able to show all data after editing
//             id: nextProps.id,
//             name: nextProps.name,
//             timestamps: nextProps.timestamps,
//             blacklisted: nextProps.blacklisted
//         });
//     }

//     nameHandler(e){
//         this.setState({name: e.target.value})           // accessing inserted input and setting it's value to the name
//     }

//     blacklistedHandler(e){
//         this.setState({blacklisted: e.target.value})     // accessing inserted input and setting it's value to blacklisted status
//     }

//     handleSave() {
//         const personDetails = this.state;
//         this.props.editPersonSave(personDetails)          // sends the new person details to the parent component
//     }


//     render(){                   // change the ids!!>>>>>>>>>>>>>>>>>>>>
//         // Display UI element (pop-up) for the user to edit the name & black-list status of the chosen person
//         return (
//             <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Edit Details of the Person</h5>
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">
//                             <p><span className="modal-lable">Name:</span><input value={this.state.name} onChange={(e) => this.nameHandler(e)} /></p>
//                             <p><span className="modal-lable">Black-listed status:</span><input value={this.state.blacklisted} onChange={(e) => this.blacklistedHandler(e)} /></p>
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                             <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

// }

// export default EditPopUp;