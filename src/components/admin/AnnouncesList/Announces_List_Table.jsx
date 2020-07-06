import React from 'react';

import { Table, Col, Input } from 'reactstrap';

import styles from './Announces.module.css';

function AnnouncesListTable() {
  return (
    <Col>
      <Table borderless>
        <thead>
          <tr>
            <th className={styles.thCheckbox}>
              <Input type="checkbox" className={styles.checkboxTh} />
            </th>
            <th>
              N° Annonce
              <svg
                width="1.5em"
                height="1.5em"
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
                width="1.5em"
                height="1.5em"
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
            <th className={styles.tableTd}>
              Titre
              <svg
                width="1.5em"
                height="1.5em"
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
                width="1.5em"
                height="1.5em"
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
              Type d&apos;annonce
              <svg
                width="1.5em"
                height="1.5em"
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
              <svg
                width="1.5em"
                height="1.5em"
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
              Catégorie
              <svg
                width="1.5em"
                height="1.5em"
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
              <svg
                width="1.5em"
                height="1.5em"
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
            <th> Statut </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <Input type="checkbox" className={styles.checkboxTh} />
            </th>
            <td>0123654d</td>
            <td>CDD à pourvoir Secretariat (H/F)</td>
            <td>Recherche d&apos;emploi</td>
            <td>Secretariat</td>
            <td>Envoyé</td>
          </tr>
          <tr>
            <th>
              <Input type="checkbox" className={styles.checkboxTh} />
            </th>
            <td>45564987d</td>
            <td>Recherche de partenariat Développement</td>
            <td>Recherche de partenariat</td>
            <td>Développement</td>
            <td>En cours</td>
          </tr>
          <tr>
            <th>
              <Input type="checkbox" className={styles.checkboxTh} />
            </th>
            <td>7898453sqd</td>
            <td>Recherche & développement pour la WildCodeSchool</td>
            <td>Recherche & développement</td>
            <td>Recherche</td>
            <td>En cours</td>
          </tr>
          <tr>
            <th>
              <Input type="checkbox" className={styles.checkboxTh} />
            </th>
            <td>054654213d</td>
            <td>CDD à pourvoir Informatique</td>
            <td>Recherche d&apos;emploi</td>
            <td>Informatique</td>
            <td>En attente</td>
          </tr>
          <tr>
            <th>
              <Input type="checkbox" className={styles.checkboxTh} />
            </th>
            <td>65431faz</td>
            <td>Stage à pourvoir Cuisine (H/F)</td>
            <td>Recherche d&apos;emploi</td>
            <td>Cuisine</td>
            <td>Envoyé</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
}

export default AnnouncesListTable;
