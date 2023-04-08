import React from "react";
import Modal from "react-bootstrap/Modal";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Google from "../google";

const UserModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} keyboard={false} centered>
      {/* <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header> */}
      <Modal.Body className="user-modal-body">
        <center>
          <GoogleOAuthProvider clientId="402038778481-qterqdcdc42fc2h6qqkpsbn9q7monqil.apps.googleusercontent.com">
            <Google />
          </GoogleOAuthProvider>
        </center>
      </Modal.Body>
    </Modal>
  );
};

export default UserModal;
