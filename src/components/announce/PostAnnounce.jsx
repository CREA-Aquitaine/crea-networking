import React, { useState, useEffect } from 'react';
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
import Axios from 'axios';

import PostAnnounceBreadcrumb from './PostAnnounceBreadcrumb';

import styles from './PostAnnounce.module.css';
// import Editor from './Editor';

function PostAnnounce() {
  const [content, setContent] = useState('');

  useEffect(() => {}, []);

  const handlePostAnnounce = async (e) => {
    e.preventDefault();
    try {
      await Axios.post('http://localhost:8080/api/v1/posts', {
        title: 'title',
        content,
        localisation: 'Landes',
        language: 'french',
        UserId: '0d7315c2-ce56-4c65-a949-4cc82574dddb',
        JobCategoryId: '7a6ee62c-f115-4546-b15d-432e96de2a47',
        TypePostId: 'e7763300-ae52-45f4-9463-7fe2480329ff',
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleEditorChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Container>
        <PostAnnounceBreadcrumb />

        <p className={styles.paragraphLeft}>ID : 40987</p>
        <Form onSubmit={handlePostAnnounce}>
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
          {/* <Editor handleEditorChange={() => handleEditorChange()} /> */}
          <FormGroup>
            <Input
              placeholder="Votre annonce"
              type="textarea"
              name="text"
              id="exampleText"
              onChange={handleEditorChange}
            />
          </FormGroup>
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
