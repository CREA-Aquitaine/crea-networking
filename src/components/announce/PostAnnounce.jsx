import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './PostAnnounce.module.css';

function PostAnnounce({ token, UserId, t }) {
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
  const [redirect, setredirect] = useState(false);
  const host = process.env.REACT_APP_HOST;

  const getTypePostsData = async () => {
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

  const resetForm = () => {
    setContent('');
    setTitle('');
    settypePostsData([]);
    setjobCatData([]);
    setLocalisation('');
    setlanguage('');
    setredirect(true);
  };

  const handlePostAnnounce = async (e) => {
    e.preventDefault();
    try {
      if (JobCategoryId && language && localisation && TypePostId && title) {
        await Axios.post(
          `${host}/api/v1/posts`,
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
        resetForm();
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

  useEffect(() => {
    getTypePostsData();
    getJobCatData();
    setisLoading(false);
  }, []);

  if (redirect) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <Container>
          {error ? <p>Il y a une erreur</p> : ''}
          <h2 className="mt-2 mb-5">Déposer une annonce</h2>
          <Form onSubmit={handlePostAnnounce}>
            <FormGroup row>
              <Col sm={2} className={styles.paragraphLeft}>
                <Label for="exampleSelect">{t('typeAnnonce')} :</Label>
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
                    Sélectionnez
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
                <Label for="exampleAddress">{t('localisation')} :</Label>
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
                <Label for="exampleSelect">Langue :</Label>
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
                    Sélectionnez
                  </option>
                  <option>Français</option>
                  <option>Euskal</option>
                  <option>Spanish</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={2} className={styles.paragraphLeft}>
                <Label for="exampleSelect">{t('categories')} :</Label>
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
                    Sélectionnez
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
            <Row className="mt-5">
              <Col md={{ size: 2, offset: 8 }} xs="12">
                <button type="submit" className="button mt-2">
                  Valider
                </button>
              </Col>
              <Col md="2" xs="12">
                <button
                  type="button"
                  onClick={resetForm}
                  className="button mt-2"
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
  t: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps),
  withNamespaces()
)(PostAnnounce);
