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
          <BreadcrumbItem active tag={Link} to="/announces">
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
