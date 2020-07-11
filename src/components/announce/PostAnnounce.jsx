import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PostAnnounceBreadcrumb from './PostAnnounceBreadcrumb';
import styles from './PostAnnounce.module.css';

function PostAnnounce({ token, UserId }) {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [typePostsData, settypePostsData] = useState([]);
  const [jobCatData, setjobCatData] = useState([]);
  const [TypePostId, settypePostId] = useState('');
  const [localisation, setLocalisation] = useState('');
  const [language, setlanguage] = useState('');
  const [JobCategoryId, setJobCategoryId] = useState('');
  const [error, setError] = useState('');

  const getTypePostsData = async () => {
    const host = process.env.REACT_APP_HOST;
    try {
      const res = await Axios.get(`${host}/api/v1/postTypes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      settypePostsData(res.data);
    } catch (err) {
      setError(err);
    }
  };
  const getJobCatData = async () => {
    const host = process.env.REACT_APP_HOST;
    try {
      const res = await Axios.get(`${host}/api/v1/jobCategories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setjobCatData(res.data);
    } catch (err) {
      setError(err);
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

  const setToastSuccess = () => {
    toast.success('Votre annonce a bien été publiée.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const setToastError = () => {
    toast.error('Une erreur est survenue, vous pouvez réessayer.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const setToastInput = () => {
    toast.info("Renseignez tous les champs s'il vous plait", {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handlePostAnnounce = async (e) => {
    e.preventDefault();
    try {
      if (JobCategoryId && language && localisation && TypePostId && title) {
        await Axios.post(
          'http://localhost:8080/api/v1/posts',
          {
            title,
            content,
            localisation,
            language,
            UserId,
            JobCategoryId,
            TypePostId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setToastSuccess();
      } else {
        setToastInput();
      }
    } catch (err) {
      setToastError();
    }
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
          {error ? <p>There is an error</p> : ''}
          <PostAnnounceBreadcrumb />

          <Form onSubmit={handlePostAnnounce}>
            <FormGroup row>
              <Col sm={2} className={styles.paragraphLeft}>
                <Label for="exampleSelect">Type d&lsquo;annonce: </Label>
              </Col>
              <Col sm={5}>
                <Input
                  onChange={selectTypePost}
                  type="select"
                  name="select"
                  id="exampleSelect"
                  defaultValue="defaultValue"
                >
                  <option value="defaultValue" disabled>
                    Selectionnez
                  </option>

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
                  onChange={selectLanguage}
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
                  type="select"
                  name="select"
                  id="exampleSelect"
                  defaultValue="defaultValue"
                  onChange={selectJobCat}
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
            <CKEditor
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
            />

            <Row>
              <Col sm={{ size: 1, offset: 9 }}>
                <button type="submit" className="button">
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

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
  UserId: state.authenticated.userInfos.id,
});

PostAnnounce.propTypes = {
  token: PropTypes.string.isRequired,
  UserId: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(PostAnnounce);
