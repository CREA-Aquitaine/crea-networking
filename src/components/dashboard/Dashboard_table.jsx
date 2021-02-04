import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
} from 'reactstrap';
import Axios from 'axios';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Dashboard_table.module.css';
import UserName from './UserName';
import CrossDelete from './CrossDelete';
import Comment from './Comment';

const host = process.env.REACT_APP_HOST;

function DashboardTable({ token, userInfos, t }) {
  const [activeTab, setActiveTab] = useState('1');
  const [announces, setAnnounces] = useState([]);
  const [replies, setReplies] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState([]);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const getAnnounces = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const filteredPost = res.data.filter(
        (post) => post.UserId === userInfos.id
      );
      setAnnounces(filteredPost);
      return '';
    } catch (err) {
      setError(err);
      return error;
    }
  };
  const getAnswer = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/replies`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const filteredReply = res.data.filter(
        (reply) => reply.userPostId === userInfos.id
      );
      setReplies(filteredReply);
      return replies;
    } catch (err) {
      setError(err);
      return error;
    }
  };
  const getMessage = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/replies`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const filteredMessage = res.data.filter(
        (reply) => reply.UserId === userInfos.id
      );
      setMessage(filteredMessage);
      return message;
    } catch (err) {
      setError(err);
      return error;
    }
  };

  useEffect(() => {
    getAnnounces();
    getAnswer();
    getMessage();
  }, []);

  return (
    <div className={styles.dashboardTable}>
      <Nav tabs className={styles.navButton}>
        <NavItem
          className={activeTab === '1' ? styles.activeOn : styles.activeOff}
        >
          <NavLink
            className={`{ active: activeTab === '1' } ${styles.tabStyles}`}
            onClick={() => {
              toggle('1');
            }}
          >
            Mes Annonces
          </NavLink>
        </NavItem>
        <NavItem
          className={activeTab === '2' ? styles.activeOn : styles.activeOff}
        >
          <NavLink
            className={{ active: activeTab === '1' }}
            onClick={() => {
              toggle('2');
            }}
          >
            Réponses à mes annonces
          </NavLink>
        </NavItem>
        <NavItem
          className={activeTab === '3' ? styles.activeOn : styles.activeOff}
        >
          <NavLink
            className={{ active: activeTab === '1' }}
            onClick={() => {
              toggle('3');
            }}
          >
            Mes messages envoyés
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col>
              <Table responsive>
                <thead>
                  <tr>
                    <th>{t('titreAnnonce')}</th>
                    <th>{t('localisation')}</th>
                    <th>Voir</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  {announces.map((post) => (
                    <tr>
                      <td>{post.title}</td>
                      <td>{post.localisation}</td>
                      <td>
                        <Link to={`/announces/${post.id}`}>
                          Voir l&apos;annonce
                        </Link>
                      </td>
                      <td>
                        <CrossDelete
                          id={post.id}
                          getDatas={getAnnounces}
                          token={token}
                          route="posts"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Annonce</th>
                    <th>Sujet</th>
                    <th>Message</th>
                    <th>Email</th>
                    <th>
                      {t('nom')}/{t('prenom')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {replies.map((item) => (
                    <tr>
                      <td>{item.titlePost}</td>
                      <td>{item.title}</td>
                      <Comment comment={item.comment} title={item.title} />{' '}
                      <UserName id={item.UserId} token={token} />
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Annonce</th>
                    <th>Sujet</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {message.map((item) => (
                    <tr>
                      <td>{item.titlePost}</td>
                      <td>{item.title}</td>
                      <Comment comment={item.comment} title={item.title} />{' '}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}
const mapStateToProps = (state) => ({
  userInfos: state.authenticated.userInfos,
  token: state.authenticated.token,
});

DashboardTable.propTypes = {
  token: PropTypes.string.isRequired,
  userInfos: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps),
  withNamespaces()
)(DashboardTable);
