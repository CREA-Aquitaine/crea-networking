import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';
import {
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
import { DeleteOutlined } from '@ant-design/icons';

import styles from './Dashboard_table.module.css';
import UserName from './UserName';
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

  const deleteAnnounce = async () => {
    try {
      const postId = announces.find((post) => post.id);
      await Axios.delete(`${host}/api/v1/posts/${postId.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return getAnnounces();
    } catch (err) {
      setError(err);
      return error;
    }
  };

  const columnsAnnunces = [
    {
      title: t('titreAnnonce'),
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: t('localisation'),
      dataIndex: 'localisation',
      key: 'localisation',
    },

    {
      title: t('voir'),
      key: 'voir',
      render: (record) => (
        <Link to={`/announces/${record.id}`}>{t('voirAnnonce')}</Link>
      ),
    },
    {
      title: '',
      key: 'actions',
      render: (record) => (
        <>
          <Button
            type="link"
            icon={<DeleteOutlined />}
            onClick={() => deleteAnnounce(record.id)}
          />
        </>
      ),
    },
  ];

  const columnsReplies = [
    {
      title: t('annonce'),
      dataIndex: 'titlePost',
      key: 'titlePost',
      sorter: (a, b) => a.titlePost.localeCompare(b.titlePost),
    },
    {
      title: t('sujet'),
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: t('message'),
      key: 'comment',
      render: (record) => (
        <Comment comment={record.comment} title={record.title} />
      ),
    },

    {
      title: t('contact'),
      key: 'UserId',
      dataIndex: 'UserId',
      render: (record) => <UserName id={record} token={token} />,
    },
  ];

  const columnsMessage = [
    {
      title: t('annonce'),
      dataIndex: 'titlePost',
      key: 'titlePost',
      sorter: (a, b) => a.titlePost.localeCompare(b.titlePost),
    },
    {
      title: t('sujet'),
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: t('message'),
      key: 'comment',
      render: (record) => (
        <Comment comment={record.comment} title={record.title} />
      ),
    },
  ];

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
            {t('mesAnnonces')}
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
            {t('reponseAnnonce')}
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
            {t('messagesEnvoyés')}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col>
              <Table
                dataSource={announces}
                columns={columnsAnnunces}
                style={{ width: '100%' }}
                rowKey="id"
                showSorterTooltip={false}
                className="table-head-red"
              />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col>
              <Table
                dataSource={replies}
                columns={columnsReplies}
                style={{ width: '100%' }}
                rowKey="id"
                showSorterTooltip={false}
                className="table-head-red"
              />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col>
              <Table
                dataSource={message}
                columns={columnsMessage}
                style={{ width: '100%' }}
                rowKey="id"
                showSorterTooltip={false}
                className="table-head-red"
              />
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
