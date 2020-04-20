import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const EditPopUp = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    props.handleChoose();
  }

  return (
    <>
      <EditButton onClick={handleShow}>
        <FontAwesomeIcon icon={faEdit} />
      </EditButton>

      {/* Display UI element (pop-up) for the user to edit the name & black-list status of the chosen person */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Person Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <span className="modal-lable">Name: </span>
            <input value={props.name} onChange={props.nameHandler} />
          </p>

                        {/* change true false to a checkbox toggle */}
          <p>
            <span className="modal-lable">Black-listed status: </span>
            <input
              value={props.blacklisted}
              onChange={props.blacklistedHandler}
            />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
          <Button variant="primary" onClick={props.handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditPopUp;

const EditButton = styled.button`
color: #2BBA85;
background-color: inherit;
border: 2px solid #A0FFDC;
border-radius: 6px;
outline: none;
transition: 0.3s;

&:hover{
  color: white;
  background-color: #2BBA85;
  border-radius: 6px;
}
`;
