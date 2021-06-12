import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Table, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import './AnouncesListTable.css';

const host = process.env.REACT_APP_HOST;

function AnnouncesListTable({ announcesList, token, getAnnounces, t }) {
  const [error, setError] = useState('');

  const deleteAnnounce = async () => {
    try {
      const postId = announcesList.find((post) => post.id);
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

  const columns = [
    {
      title: t('titreAnnonce'),
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: t('typeAnnonce'),
      dataIndex: 'TypePost',
      key: 'TypePost',
      render: (record) => <span>{record?.labelFr}</span>,
    },
    {
      title: t('categories'),
      dataIndex: 'JobCategory',
      key: 'JobCategory',
      render: (record) => <span>{record?.labelFr}</span>,
    },
    {
      title: t('contenuAnnonce'),
      key: 'contenu',
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

  return (
    <div className="header-table-black" style={{ width: '100%' }}>
      <Table
        dataSource={announcesList}
        columns={columns}
        style={{ width: '100%' }}
        rowKey="id"
        showSorterTooltip={false}
        className="table-head-red"
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});
AnnouncesListTable.propTypes = {
  announcesList: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  getAnnounces: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps),
  withNamespaces()
)(AnnouncesListTable);
