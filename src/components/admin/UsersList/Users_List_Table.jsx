import React from 'react';
import PropTypes from 'prop-types';

import { Table, Col, Input } from 'reactstrap';

import styles from './Users_List_Table.module.css';

const labelTable = [
  { label: 'Nom' },
  { label: 'Prénom' },
  { label: 'Email' },
  { label: 'Pays' },
  { label: "Type d'utilisateur" },
];

function UsersListTable({ usersList }) {
  return (
    <Col>
      <Table borderless>
        <thead>
          <tr>
            <th className={styles.thCheckbox}>
              <Input type="checkbox" className={styles.checkboxTh} />
            </th>
            {labelTable.map((label) => {
              return (
                <th>
                  {label.label}
                  <button type="button" className={styles.arrowButtons}>
                    <span className={styles.arrowDown} />
                  </button>
                  <button type="button" className={styles.arrowButtons}>
                    <span className={styles.arrowUp} />
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <tr>
                <th>
                  <Input type="checkbox" className={styles.checkboxTh} />
                </th>
                <td>{user.lastName}</td>
                <td>{user.firstName}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>{user.UserTypeId}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Col>
  );
}

UsersListTable.propTypes = {
  usersList: PropTypes.string.isRequired,
};

export default UsersListTable;
