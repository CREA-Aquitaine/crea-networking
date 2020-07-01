import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';

import PostAnnounceBreadcrumb from './PostAnnounceBreadcrumb';

import styles from './PostAnnounce.module.css';
import Editor from './Editor';

function PostAnnounce() {
  return (
    <>
      <Container>
        <PostAnnounceBreadcrumb />
        <p className={styles.paragraphLeft}>ID : 40987</p>
        <Form>
          <FormGroup row>
            <Col sm={2} className={styles.paragraphLeft}>
              <Label for="exampleSelect">Type d&lsquo;annonce: </Label>
            </Col>
            <Col sm={5}>
              <Input type="select" name="select" id="exampleSelect">
                <option>Partenariat</option>
                <option>Emploi</option>
                <option>Recherche & dev</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={2} className={styles.paragraphLeft}>
              <Label for="exampleAddress">Titre / Sujet : </Label>
            </Col>
            <Col sm={5}>
              <Input
                type="text"
                name="Sujet"
                id="exampleAddress"
                placeholder="Exemple: recherche de partenariat - développement Web & Mobile"
              />
            </Col>
          </FormGroup>
          <Editor />
          <Row>
            <Col sm={{ size: 1, offset: 9 }}>
              <Button className="button">Valider</Button>
            </Col>
            <Col>
              <Button className="button ml-5 mb-5">Annuler</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default PostAnnounce;
