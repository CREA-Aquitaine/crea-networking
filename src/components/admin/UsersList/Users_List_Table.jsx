import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect } from 'react-redux';

import { Table, Col } from 'reactstrap';

import styles from './Users_List_Table.module.css';
import cross from './img/cross.png';

const host = process.env.REACT_APP_HOST;

function UsersListTable({ usersList, token, getAllUsers }) {
  const [isAsc, setIsAsc] = useState(false);
  const [lastName, setLastName] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [email, setEmail] = useState([]);
  const [country, setCountry] = useState([]);
  const [userTypeState, setUserTypeState] = useState([]);
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

  const getAscUserType = () => {
    const ascUserTypeFilter = usersList.filter((user) => {
      if (
        user.UserType !== null &&
        user.UserTypeId.label !== null &&
        user.UserTypeId !== null
      ) {
        return user.UserType.label;
      }
      return '';
    });
    const ascUserType = ascUserTypeFilter.sort((a, b) => {
      const firstCountry = a.UserType.label.toLowerCase();
      const secondCountry = b.UserType.label.toLowerCase();
      if (firstCountry < secondCountry) {
        return -1;
      }
      if (firstCountry > secondCountry) {
        return 1;
      }
      return 0;
    });
    setUserTypeState(ascUserType);
    setIsAsc(true);
    return userTypeState && isAsc;
  };
  const getDscUserType = () => {
    const dscUserTypeFilter = usersList.filter((user) => {
      if (
        user.UserType !== null &&
        user.UserTypeId.label !== null &&
        user.UserTypeId !== null
      ) {
        return user.UserType.label;
      }
      return '';
    });
    const dscUserType = dscUserTypeFilter.sort((a, b) => {
      const firstCountry = a.UserType.label.toLowerCase();
      const secondCountry = b.UserType.label.toLowerCase();
      if (firstCountry > secondCountry) {
        return -1;
      }
      if (firstCountry < secondCountry) {
        return 1;
      }
      return 0;
    });
    setUserTypeState(dscUserType);
    setIsAsc(false);
    return userTypeState && isAsc;
  };

  const deleteUsers = async (id) => {
    try {
      await Axios.delete(`${host}/api/v1/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getAllUsers();
    } catch (err) {
      setError(error);
    }
  };

  return (
    <Col>
      <Table borderless>
        <thead>
          <tr>
            <th>
              Nom
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getAscLastName}
              >
                <span className={styles.arrowDown} />
              </button>
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getDscLastName}
              >
                <span className={styles.arrowUp} />
              </button>
            </th>
            <th>
              Prénom
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getAscFirstName}
              >
                <span className={styles.arrowDown} />
              </button>
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getDscFirstName}
              >
                <span className={styles.arrowUp} />
              </button>
            </th>
            <th>
              Email
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getAscEmail}
              >
                <span className={styles.arrowDown} />
              </button>
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getDscEmail}
              >
                <span className={styles.arrowUp} />
              </button>
            </th>
            <th>
              Pays
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getAscCountry}
              >
                <span className={styles.arrowDown} />
              </button>
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getDscCountry}
              >
                <span className={styles.arrowUp} />
              </button>
            </th>
            <th>
              Type d&apos;utilisateur
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getAscUserType}
              >
                <span className={styles.arrowDown} />
              </button>
              <button
                type="button"
                className={styles.arrowButtons}
                onClick={getDscUserType}
              >
                <span className={styles.arrowUp} />
              </button>
            </th>
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
                <td className={styles.crossImg}>
                  <button
                    type="button"
                    className={styles.deleteButton}
                    onClick={deleteUsers}
                  >
                    <img src={cross} alt="cross" width="80%" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Col>
  );
}
const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

UsersListTable.propTypes = {
  usersList: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  getAllUsers: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(UsersListTable);
