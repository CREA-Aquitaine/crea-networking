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
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Dashboard_table.module.css';
import UserName from './UserName';
import CrossDelete from './CrossDelete';

const host = process.env.REACT_APP_HOST;

function DashboardTable({ token, userInfos }) {
  const [activeTab, setActiveTab] = useState('1');
  const [announces, setAnnounces] = useState([]);
  const [replies, setReplies] = useState([]);
  const [error, setError] = useState('');

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
      const res = await Axios.get(`${host}/api/v1/replies`);
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

  useEffect(() => {
    getAnnounces();
    getAnswer();
  }, []);

  return (
    <div className={styles.dashboardTable}>
      <Nav tabs className={styles.navButton}>
        <NavItem>
          <NavLink
            className={{ active: activeTab === '1' }}
            onClick={() => {
              toggle('1');
            }}
          >
            <h4
              className={activeTab === '1' ? styles.activeOn : styles.activeOff}
            >
              Mes Annonces
            </h4>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={{ active: activeTab === '1' }}
            onClick={() => {
              toggle('2');
            }}
          >
            <h4
              className={activeTab === '2' ? styles.activeOn : styles.activeOff}
            >
              Réponses à mes annonces
            </h4>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="2" />
            <Col sm="8" xs="8">
              <Table size="sm" className={styles.tables}>
                <thead>
                  <tr>
                    <th>Titre</th>
                    <th>Localisation</th>
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
            <Col sm="2" />
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="2" />
            <Col sm="8" xs="8">
              <Table size="sm" className={styles.tables}>
                <thead>
                  <tr>
                    <th>Annonce</th>
                    <th>Sujet</th>
                    <th>Message</th>
                    <th>Nom/Prénom</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  {replies.map((item) => (
                    <tr>
                      <td>{item.titlePost}</td>
                      <td>{item.title}</td>
                      <td className={styles.collapse}>{item.comment}</td>
                      <UserName id={item.UserId} token={token} />
                      <td>
                        <CrossDelete
                          route="replies"
                          id={item.id}
                          getDatas={getAnswer}
                          token={token}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col sm="2" />
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
};

export default connect(mapStateToProps)(DashboardTable);
