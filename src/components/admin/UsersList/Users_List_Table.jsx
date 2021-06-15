import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';
import { Table, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import ChangeRole from './ChangeRole';

import './UserListTable.css';

const host = process.env.REACT_APP_HOST;

function UsersListTable({ usersList, t, token, getAllUsers }) {
  const [error, setError] = useState('');
  const [openMOdal, setOpenModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleDeleteUsers = async (id) => {
    try {
      const user = usersList.find((usr) => usr.id === id);
      await Axios.delete(`${host}/api/v1/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return getAllUsers();
    } catch (err) {
      setError(err);
      return error;
    }
  };

  const columns = [
    {
      title: t('nom'),
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: t('prenom'),
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },

    { title: t('pays'), dataIndex: 'country', key: 'country' },
    {
      title: `Type d'utilisateur`,
      dataIndex: 'UserType',
      key: 'type',
      render: (record) => <span>{record?.label}</span>,
    },
    {
      title: 'Rôle',
      dataIndex: 'Role',
      key: 'role',
      render: (record) => <span>{record?.label}</span>,
    },

    {
      title: '',
      key: 'actions',
      render: (record) => (
        <>
          <Button
            type="link"
            onClick={() => {
              setOpenModal(true);
              setCurrentUser(record);
            }}
            icon={<EditOutlined />}
          />{' '}
          <Button
            type="link"
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteUsers(record.id)}
          />
        </>
      ),
    },
  ];

  return (
    <div className="header-table-red" style={{ width: '100%' }}>
      <Table
        dataSource={usersList}
        columns={columns}
        style={{ width: '100%' }}
        rowKey="id"
        showSorterTooltip={false}
        className="table-head-red"
      />
      <ChangeRole
        user={currentUser}
        token={token}
        getAllUsers={getAllUsers}
        visible={openMOdal}
        setVisible={setOpenModal}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

UsersListTable.propTypes = {
  usersList: PropTypes.arrayOf.isRequired,
  token: PropTypes.string.isRequired,
  getAllUsers: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps),
  withNamespaces()
)(UsersListTable);
