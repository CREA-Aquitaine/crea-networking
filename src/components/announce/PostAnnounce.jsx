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

function PostAnnounce({ token, UserId, t, translate }) {
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
    toast.success(t('annoncePubliee'), {
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
    toast.error(t('erreurReessaye'), {
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
    toast.info(t('renseignerChamps'), {
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
        <p>{t('chargement')}...</p>
      ) : (
        <Container>
          {error ? <p>{t('erreurVu')}</p> : ''}
          <h2 className="mt-2 mb-5">{t('deposerAnnonce')}</h2>
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
                    {t('selectionnez')}
                  </option>

                  {typePostsData.map((typePost) => (
                    <option>
                      {translate === 'France'
                        ? typePost.labelFr
                        : translate === 'Spain'
                        ? typePost.labelEs
                        : typePost.labelEus}
                    </option>
                  ))}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={2} className={styles.paragraphLeft}>
                <Label for="exampleAddress">{t('titreSujet')} : </Label>
              </Col>
              <Col sm={5}>
                <Input
                  type="text"
                  name="Sujet"
                  id="exampleAddress"
                  placeholder={t('exempleRechercheParternariat')}
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
                  placeholder={t('exempleVille')}
                  onChange={handleLocalisationChange}
                  value={localisation}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={2} className={styles.paragraphLeft}>
                <Label for="exampleSelect">{t('langue')} :</Label>
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
                    {t('selectionnez')}
                  </option>
                  <option>Français</option>
                  <option>Euskal</option>
                  <option>Español</option>
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
                    {t('selectionnez')}
                  </option>

                  {jobCatData.map((jobCat) => (
                    <option>
                      {translate === 'France'
                        ? jobCat.labelFr
                        : translate === 'Spain'
                        ? jobCat.labelEs
                        : jobCat.labelEus}
                    </option>
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
                  {t('valider')}
                </button>
              </Col>
              <Col md="2" xs="12">
                <button
                  type="button"
                  onClick={resetForm}
                  className="button mt-2"
                >
                  {t('annuler')}
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
  translate: state.translate.language,
});

PostAnnounce.propTypes = {
  token: PropTypes.string.isRequired,
  UserId: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  translate: PropTypes.string.isRequired,
};

export default compose(
  connect(mapStateToProps),
  withNamespaces()
)(PostAnnounce);
