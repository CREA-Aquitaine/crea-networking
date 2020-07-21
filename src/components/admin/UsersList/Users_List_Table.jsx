import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect } from 'react-redux';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import { Table, Col } from 'reactstrap';

import { IoMdClose } from 'react-icons/io';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import styles from './Users_List_Table.module.css';
import ChangeRole from './ChangeRole';

const host = process.env.REACT_APP_HOST;

function UsersListTable({ usersList, token, getAllUsers }) {
  const [isAsc, setIsAsc] = useState(false);
  const [lastName, setLastName] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [email, setEmail] = useState([]);
  const [country, setCountry] = useState([]);
  const [error, setError] = useState('');

  const getAscLastName = () => {
    const ascLastName = usersList.sort((a, b) => {
      const firstLastName = a.lastName.toLowerCase();
      const secondLastName = b.lastName.toLowerCase();
      if (firstLastName < secondLastName) {
        return -1;
      }
      if (firstLastName > secondLastName) {
        return 1;
      }
      return 0;
    });
    setLastName(ascLastName);
    setIsAsc(true);
    return lastName && isAsc;
  };

  const getDscLastName = () => {
    const dscLastName = usersList.sort((a, b) => {
      const firstLastName = a.lastName.toLowerCase();
      const secondLastName = b.lastName.toLowerCase();
      if (firstLastName > secondLastName) {
        return -1;
      }
      if (firstLastName < secondLastName) {
        return 1;
      }
      return 0;
    });
    setLastName(dscLastName);
    setIsAsc(false);
    return lastName && isAsc;
  };

  const getAscFirstName = () => {
    const ascFirstName = usersList.sort((a, b) => {
      const firstFirstName = a.firstName.toLowerCase();
      const secondFirstName = b.firstName.toLowerCase();
      if (firstFirstName < secondFirstName) {
        return -1;
      }
      if (firstFirstName > secondFirstName) {
        return 1;
      }
      return 0;
    });
    setFirstName(ascFirstName);
    setIsAsc(true);
    return firstName && isAsc;
  };
  const getDscFirstName = () => {
    const dscFirstName = usersList.sort((a, b) => {
      const firstFirstName = a.firstName.toLowerCase();
      const secondFirstName = b.firstName.toLowerCase();
      if (firstFirstName > secondFirstName) {
        return -1;
      }
      if (firstFirstName < secondFirstName) {
        return 1;
      }
      return 0;
    });
    setFirstName(dscFirstName);
    setIsAsc(false);
    return firstName && isAsc;
  };

  const getAscEmail = () => {
    const ascEmail = usersList.sort((a, b) => {
      const firstEmail = a.email.toLowerCase();
      const secondEmail = b.email.toLowerCase();
      if (firstEmail < secondEmail) {
        return -1;
      }
      if (firstEmail > secondEmail) {
        return 1;
      }
      return 0;
    });
    setEmail(ascEmail);
    setIsAsc(true);
    return email && isAsc;
  };
  const getDscEmail = () => {
    const dscEmail = usersList.sort((a, b) => {
      const firstEmail = a.email.toLowerCase();
      const secondEmail = b.email.toLowerCase();
      if (firstEmail > secondEmail) {
        return -1;
      }
      if (firstEmail < secondEmail) {
        return 1;
      }
      return 0;
    });
    setEmail(dscEmail);
    setIsAsc(false);
    return email && isAsc;
  };

  const getAscCountry = () => {
    const ascCountry = usersList.sort((a, b) => {
      const firstCountry = a.country.toLowerCase();
      const secondCountry = b.country.toLowerCase();
      if (firstCountry < secondCountry) {
        return -1;
      }
      if (firstCountry > secondCountry) {
        return 1;
      }
      return 0;
    });
    setCountry(ascCountry);
    setIsAsc(true);
    return country && isAsc;
  };
  const getDscCountry = () => {
    const dscCountry = usersList.sort((a, b) => {
      const firstCountry = a.country.toLowerCase();
      const secondCountry = b.country.toLowerCase();
      if (firstCountry > secondCountry) {
        return -1;
      }
      if (firstCountry < secondCountry) {
        return 1;
      }
      return 0;
    });
    setCountry(dscCountry);
    setIsAsc(false);
    return country && isAsc;
  };

  const deleteUsers = async () => {
    try {
      const userId = usersList.find((user) => user.id);
      await Axios.delete(`${host}/api/v1/users/${userId.id}`, {
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

  return (
    <Col>
      <Table borderless id="emp">
        <thead className={styles.theadBackground}>
          <tr>
            <th className={styles.thFontsize}>
              Nom
              <RiArrowDropDownLine onClick={getAscLastName} size="25" />
              <RiArrowDropUpLine onClick={getDscLastName} size="25" />
            </th>
            <th className={styles.thFontsize}>
              Prénom
              <RiArrowDropDownLine onClick={getAscFirstName} size="25" />
              <RiArrowDropUpLine onClick={getDscFirstName} size="25" />
            </th>
            <th className={styles.thFontsize}>
              Email
              <RiArrowDropDownLine nClick={getAscEmail} size="25" />
              <RiArrowDropUpLine onClick={getDscEmail} size="25" />
            </th>
            <th className={styles.thFontsize}>
              Pays
              <RiArrowDropDownLine onClick={getAscCountry} size="25" />
              <RiArrowDropUpLine onClick={getDscCountry} size="25" />
            </th>
            <th className={styles.thFontsize}>Type d&apos;utilisateur</th>
            <th className={styles.thFontsize}>Role</th>
            <th className={styles.thFontsize}>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <tr key={user.id} id={user.id}>
                <td>{user.lastName}</td>
                <td>{user.firstName}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>{user.UserType ? user.UserType.label : ''} </td>
                {/* <td>{user.RoleId ? user.Role.label : ''}</td> */}
                <ChangeRole
                  user={user}
                  token={token}
                  key={user.id}
                  getAllUsers={getAllUsers}
                />
                <td className={styles.crossImg}>
                  <IoMdClose
                    onClick={deleteUsers}
                    fill="#dd2b25"
                    className={styles.cross}
                  />
                </td>
              </tr>
            );
          })}
          <ReactHTMLTableToExcel
            className={styles.export}
            table="emp"
            filename="ReportExcel"
            sheet="Sheet"
            buttonText="Export excel"
          />
        </tbody>
      </Table>
    </Col>
  );
}
const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

UsersListTable.propTypes = {
  usersList: PropTypes.arrayOf.isRequired,
  token: PropTypes.string.isRequired,
  getAllUsers: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(UsersListTable);
