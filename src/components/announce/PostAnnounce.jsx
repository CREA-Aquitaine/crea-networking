import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import Axios from 'axios';

import PostAnnounceBreadcrumb from './PostAnnounceBreadcrumb';

import styles from './PostAnnounce.module.css';
// import Editor from './Editor';

function PostAnnounce() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [typePostsData, settypePostsData] = useState([]);
  const [jobCatData, setjobCatData] = useState([]);
  const [TypePostId, settypePostId] = useState('');
  const [localisation, setLocalisation] = useState('');
  const [language, setlanguage] = useState('');
  const [JobCategoryId, setJobCategoryId] = useState('');

  const getTypePostsData = async () => {
    try {
      const res = await Axios.get(`http://localhost:8080/api/v1/postTypes`);
      settypePostsData(res.data);
    } catch (err) {
      throw new Error(err);
    }
  };
  const getJobCatData = async () => {
    try {
      const res = await Axios.get(`http://localhost:8080/api/v1/jobCategories`);
      setjobCatData(res.data);
    } catch (err) {
      throw new Error(err);
    }
  };

  const selectTypePost = (e) => {
    const object = typePostsData.find((el) => el.labelFr === e.target.value);
    settypePostId(object.id);
  };

  const selectJobCat = (e) => {
    const object = jobCatData.find((el) => el.labelFr === e.target.value);
    setJobCategoryId(object.id);
  };

  useEffect(() => {
    getTypePostsData();
    getJobCatData();
    setisLoading(false);
  }, []);

  const handlePostAnnounce = async (e) => {
    e.preventDefault();
    try {
      await Axios.post('http://localhost:8080/api/v1/posts', {
        title,
        content,
        localisation,
        language,
        UserId: '0d7315c2-ce56-4c65-a949-4cc82574dddb',
        JobCategoryId,
        TypePostId,
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleEditorChange = (e) => {
    setContent(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleLocalisationChange = (e) => {
    setLocalisation(e.target.value);
  };

  const selectLanguage = (e) => {
    setlanguage(e.target.value);
  };

  const resetForm = (e) => {
    e.preventDefault();
    setContent('');
    setTitle('');
    settypePostId('');
    setLocalisation('');
    setlanguage('');
    setJobCategoryId('');
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Container>
          <PostAnnounceBreadcrumb />

          <Form onSubmit={handlePostAnnounce}>
            <FormGroup row>
              <Col sm={2} className={styles.paragraphLeft}>
                <Label for="exampleSelect">Type d&lsquo;annonce: </Label>
              </Col>
              <Col sm={5}>
                <Input
                  onClick={selectTypePost}
                  type="select"
                  name="select"
                  id="exampleSelect"
                  defaultValue="defaultValue"
                  value="defaultValue"
                >
                  <option disabled>Selectionnez</option>

                  {typePostsData.map((typePost) => (
                    <option>{typePost.labelFr}</option>
                  ))}
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
                  onChange={handleTitleChange}
                  value={title}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={2} className={styles.paragraphLeft}>
                <Label for="exampleAddress">Localisation :</Label>
              </Col>
              <Col sm={5}>
                <Input
                  type="text"
                  name="Sujet"
                  id="exampleAddress"
                  placeholder="Exemple: Bayonne"
                  onChange={handleLocalisationChange}
                  value={localisation}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={2} className={styles.paragraphLeft}>
                <Label for="exampleSelect">Langue: </Label>
              </Col>
              <Col sm={5}>
                <Input
                  onClick={selectLanguage}
                  type="select"
                  name="select"
                  id="exampleSelect"
                  defaultValue="defaultValue"
                >
                  <option value="defaultValue" disabled>
                    Selectionnez
                  </option>
                  <option>Français</option>
                  <option>Euskal</option>
                  <option>Spanish</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={2} className={styles.paragraphLeft}>
                <Label for="exampleSelect">Catégorie: </Label>
              </Col>
              <Col sm={5}>
                <Input
                  onClick={selectJobCat}
                  type="select"
                  name="select"
                  id="exampleSelect"
                  defaultValue="defaultValue"
                >
                  <option value="defaultValue" disabled>
                    Selectionnez
                  </option>

                  {jobCatData.map((jobCat) => (
                    <option>{jobCat.labelFr}</option>
                  ))}
                </Input>
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
                value={content}
              />
            </FormGroup>
            <Row>
              <Col sm={{ size: 1, offset: 9 }}>
                <button type="button" className="button">
                  Valider
                </button>
              </Col>
              <Col>
                <button
                  type="button"
                  onClick={resetForm}
                  className="button ml-5 mb-5"
                >
                  Annuler
                </button>
              </Col>
            </Row>
          </Form>
        </Container>
      )}
    </>
  );
}

export default PostAnnounce;
