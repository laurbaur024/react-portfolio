import React, { Component } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import {MDBContainer,MDBRow,MDBCol,MDBInput,MDBIcon,MDBBtn,MDBModal,MDBModalBody,MDBModalHeader} from "mdbreact"

class  ContactModal extends Component {
  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }


  
  

  render() {
    return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle}>Contact</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Contact Lauren</MDBModalHeader>
          <MDBModalBody>
            <MDBRow>
              <MDBCol md="6">
                <form>
                  <p className="h5 text-center mb-4">Send me an e-mail!</p>
                  <div className="grey-text">
                    <MDBInput value="name" label="Your name"type="text" validate error="wrong" success="right" />
                    <MDBInput label="Your email" type="email" validate error="wrong" success="right"/>
                    <MDBInput label="Subject" type="text" validate error="wrong" success="right"/>
                    <MDBInput type="textarea" rows="4" label="Your message" icon="pencil-alt"/>
                  </div>
                  <div className="text-center">
                    <MDBBtn href='/' outline >
                      Send
                      <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    )
  }
}

export default ContactModal