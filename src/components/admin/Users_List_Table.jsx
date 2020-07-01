import React from 'react';
import { Table, Col, Input } from 'reactstrap';

function UsersListTable() {
  return (
    <Col>
      <Table borderless>
        <thead>
          <tr>
            <th>
              <Input type="checkbox" />
            </th>
            <th>
              Nom
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                classNameName="bi bi-arrow-down-short"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
                />
                <path
                  fillRule="evenodd"
                  d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                classNameName="bi bi-arrow-up-short"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 5.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 5.707 5.354 8.354a.5.5 0 1 1-.708-.708l3-3z"
                />
              </svg>
            </th>
            <th>
              Prénom
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                classNameName="bi bi-arrow-down-short"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
                />
                <path
                  fillRule="evenodd"
                  d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                classNameName="bi bi-arrow-up-short"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 5.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 5.707 5.354 8.354a.5.5 0 1 1-.708-.708l3-3z"
                />
              </svg>
            </th>
            <th>
              Localisation
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                classNameName="bi bi-arrow-down-short"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
                />
                <path
                  fillRule="evenodd"
                  d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </th>
            <th>
              Type
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                classNameName="bi bi-arrow-down-short"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
                />
                <path
                  fillRule="evenodd"
                  d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <Input type="checkbox" />
            </th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Espagne</td>
            <td>Admin</td>
          </tr>
          <tr>
            <th>
              <Input type="checkbox" />
            </th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>France</td>
            <td>Entreprise</td>
          </tr>
          <tr>
            <th>
              <Input type="checkbox" />
            </th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>Espagne</td>
            <td>Chercheur d&apos;emploi</td>
          </tr>
          <tr>
            <th>
              <Input type="checkbox" />
            </th>
            <td>Roger</td>
            <td>McFly</td>
            <td>Espagne</td>
            <td>Etudiant</td>
          </tr>
          <tr>
            <th>
              <Input type="checkbox" />
            </th>
            <td>Antoine</td>
            <td>Grant</td>
            <td>France</td>
            <td>Chercheur d&apos;emploi</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
}

export default UsersListTable;
