import React from 'react';
import {
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Announces.module.css';
import AnnouncesListTable from './Announces_List_Table';

function AnnouncesList() {
  return (
    <>
      <Container>
        <Breadcrumb>
          <BreadcrumbItem tag={Link} to="/">
            Accueil
          </BreadcrumbItem>
          <BreadcrumbItem active tag={Link} to="/users">
            Mes Annonces
          </BreadcrumbItem>
        </Breadcrumb>
        <Container fluid className={styles.containerCadre}>
          <Row className={styles.announcesListTitle}>
            <Col xs="3" className={styles.announcesListTitleMargin}>
              Gestion des annonces
            </Col>
            <Col xs={{ size: '3', offset: '6' }}>
              <Input
                className={styles.inputSearch}
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="RECHERCHER"
              />
            </Col>
          </Row>
          <Row className={styles.announcesListPage}>
            <Col xs={{ size: '2', offset: '1' }}>
              <Button className={styles.announcesListButton}>Voir tout</Button>
            </Col>
            <Col xs="3">
              <Input type="select" name="Type" id="exampleSelect">
                <option> Sélection par défaut </option>
                <option>Partenariats</option>
                <option>Emploi</option>
                <option>Recherche d&apos;emploi</option>
                <option>Recherche & développement</option>
              </Input>
            </Col>
            <Col xs={{ size: '1.5', offset: '3' }}>
              <p>1-50 sur 568</p>
            </Col>
            <Col xs="1">
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-left-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.646 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L6.207 7.5H11a.5.5 0 0 1 0 1H6.207l2.147 2.146z"
                />
              </svg>
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-right-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z"
                />
              </svg>
            </Col>
          </Row>
          <Row>
            <AnnouncesListTable />
          </Row>
          <Row>
            <Col xs="3" className={styles.link}>
              <Link to="/" className={styles.announcesListExportButton}>
                Exporter la liste{' '}
              </Link>
            </Col>
            <Col className={styles.link} xs={{ size: '3', offset: '6' }}>
              <Button className="button">Supprimer</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default AnnouncesList;
