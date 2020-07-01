import React from 'react';
import { Toast, ToastBody, Container, Row, Col } from 'reactstrap';

function ToastContact() {
  return (
    <Container className="rounded mb-5">
      <Row>
        <Col xs={{ size: 3, offset: 4 }}>
          <Toast>
            <ToastBody className="bg-success">
              Votre message a bien été envoyé !
            </ToastBody>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
}

export default ToastContact;
