
import React from 'react';
import {MDBFooter, MDBContainer, MDBIcon, MDBBtn} from 'mdb-react-ui-kit';




export default function Footer() {
  const borderRadius ={
    borderRadius: '5px',
    borderColor: '#273043'
  }; 

  const fontSize = {
    fontSize: '50px',
    color: '#273043'
  }

  const footer = {
    backgroundColor: '#ADA3E0'
  }


  return (
    <MDBFooter className='text-end fixed' color='white' style={footer}>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn style={borderRadius}outline color="black" floating className='m-1' href='https://stackoverflow.com/users/22174295/laurbaur024'target="_blank" role='button'>
            <MDBIcon style={fontSize}fab icon='stack-overflow' />
          </MDBBtn>

          <MDBBtn style={borderRadius}outline color="black" floating className='m-1' href='https://www.linkedin.com/in/lauren-bleyl/'target="_blank" role='button'>
            <MDBIcon style={fontSize}fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn style={borderRadius}outline color="black" floating className='m-1' href='https://github.com/laurbaur024'target="_blank" role='button'>
            <MDBIcon style={fontSize}fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}