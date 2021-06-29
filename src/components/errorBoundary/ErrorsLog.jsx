/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { Button, Modal, Col, Table } from 'antd';
import Axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DeleteOutlined } from '@ant-design/icons';

const host = process.env.REACT_APP_HOST;

const ErrorsLog = ({ token }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [componentStack, setComponentStack] = useState('');
  const [errorsArray, setErrorsArray] = useState([]);

  const stackBreakLine = componentStack?.replaceAll('in ', '<br />in ');

  const getErrors = async () => {
    const res = await Axios.get(`${host}/api/v1/errorBoundary`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setErrorsArray(res.data);
  };

  useEffect(() => {
    getErrors();
  }, []);

  const handleDeleteOneRow = async (row) => {
    await Axios.delete(`${host}/api/v1/errorBoundary/${row.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const newErrorsArray = errorsArray.filter((er) => er.id !== row.id);
    setErrorsArray(newErrorsArray);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setComponentStack('');
  };

  const handleOpenModalComponentStack = (stack) => {
    setIsModalVisible(true);
    setComponentStack(stack);
  };

  const handleDelete = async () => {
    await Axios.delete(`${host}/api/v1/errorBoundary`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setErrorsArray([]);
  };

  const columns = [
    {
      title: 'Date',
      render: (text, row) => moment(row?.date).format('DD/MM/YYYY HH:MM'),
      key: 'date',
      width: 50,
    },
    {
      title: 'Erreur',
      dataIndex: 'error',
      key: 'error',
      width: 100,
      render: (text, row) => row.error,
    },
    {
      title: 'Élément concerné',
      dataIndex: 'componentStack',
      key: 'componentStack',
      width: 80,
      render: (text, row) =>
        row?.componentStack ? (
          <Button
            onClick={() => handleOpenModalComponentStack(row.componentStack)}
          >
            Voir les données
          </Button>
        ) : (
          'Pas de données'
        ),
    },
    // {
    //   title: 'Utilisateur',
    //   dataIndex: 'utilisateur',
    //   key: 'utilisateur',
    //   width: 100,
    //   render: (text, row) =>
    //     row.utilisateur?.firstName ? (
    //       <span>
    //         {row.utilisateur?.firstName}{' '}
    //         {row.utilisateur?.lastName}
    //       </span>
    //     ) : (
    //       'Hors connexion'
    //     ),
    // },
    {
      title: "Url de l'interface",
      render: (text, row) => row?.url,
      key: 'url',
      width: 100,
    },
    {
      title: 'Navigateur',
      dataIndex: 'navigateur && version',
      key: 'navigateur',
      width: 70,
      align: 'right',
      render: (text, row) => `${row?.navigateur} - ${row?.version}`,
    },
    {
      title: 'Os',
      render: (text, row) => row?.os,
      key: 'os',
      align: 'right',
      width: 60,
    },
    {
      title: '',
      dataIndex: 'oid',
      key: 'oid',
      align: 'right',
      width: 50,
      render: (text, row) => (
        <Button
          type="link"
          icon={<DeleteOutlined />}
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteOneRow(row);
          }}
        />
      ),
      // )
    },
  ];

  return (
    <>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        width={1100}
        footer={null}
      >
        <div dangerouslySetInnerHTML={{ __html: stackBreakLine }} />
      </Modal>
      <Col style={{ textAlign: 'right' }} className="mb-3 mt-3 mr-3">
        <Button type="danger" onClick={() => handleDelete()}>
          Vider le tableau
        </Button>
      </Col>
      <Table
        className="m-3"
        rowKey={(record) => record.id}
        dataSource={errorsArray.sort((a, b) => (a.date > b.date ? -1 : 1))}
        columns={columns}
        scroll={{ x: 1600 }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

ErrorsLog.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ErrorsLog);
