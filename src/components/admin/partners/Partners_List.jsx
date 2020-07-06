import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Row,
  Col,
  Input,
  Button,
  Label,
} from 'reactstrap';

import styles from './Partner.module.css';
import PartnerModal from './PartnerModal';

const partners = [
  {
    title: 'Lorem ipsum',
    logo: 'https://via.placeholder.com/250',
    url: 'http://hello.fr',
    star: 'https://image.flaticon.com/icons/svg/1828/1828970.svg',
    presentation:
      'Praesent blandit orci a interdum mollis. Vestibulum congue tincidunt mauris eu accumsan. Aliquam feugiat quam justo, vitae maximus arcu molestie sed. Curabitur sed est sed ante pulvinar vestibulum vitae ut nunc. Donec hendrerit mi nec sem bibendum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur venenatis tristique eleifend. Sed fringilla, erat a euismod lacinia, dolor risus blandit elit, in tempor erat urna volutpat risus. Sed mattis mollis massa vitae interdum. Etiam ac lacus lorem. ',
  },
  {
    title: 'Lorem ipsum',
    logo: 'https://via.placeholder.com/250',
    url: 'http://hello.fr',
    star: 'https://image.flaticon.com/icons/svg/1828/1828970.svg',
    presentation:
      'Praesent blandit orci a interdum mollis. Vestibulum congue tincidunt mauris eu accumsan. Aliquam feugiat quam justo, vitae maximus arcu molestie sed. Curabitur sed est sed ante pulvinar vestibulum vitae ut nunc. Donec hendrerit mi nec sem bibendum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur venenatis tristique eleifend. Sed fringilla, erat a euismod lacinia, dolor risus blandit elit, in tempor erat urna volutpat risus. Sed mattis mollis massa vitae interdum. Etiam ac lacus lorem. ',
  },
  {
    title: 'Lorem ipsum',
    logo: 'https://via.placeholder.com/250',
    url: 'http://hello.fr',
    star: 'https://image.flaticon.com/icons/svg/1828/1828884.svg',
    presentation:
      'Praesent blandit orci a interdum mollis. Vestibulum congue tincidunt mauris eu accumsan. Aliquam feugiat quam justo, vitae maximus arcu molestie sed. Curabitur sed est sed ante pulvinar vestibulum vitae ut nunc. Donec hendrerit mi nec sem bibendum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur venenatis tristique eleifend. Sed fringilla, erat a euismod lacinia, dolor risus blandit elit, in tempor erat urna volutpat risus. Sed mattis mollis massa vitae interdum. Etiam ac lacus lorem. ',
  },
  {
    title: 'Lorem ipsum',
    logo: 'https://via.placeholder.com/250',
    url: 'http://hello.fr',
    star: 'https://image.flaticon.com/icons/svg/1828/1828970.svg',
    presentation:
      'Praesent blandit orci a interdum mollis. Vestibulum congue tincidunt mauris eu accumsan. Aliquam feugiat quam justo, vitae maximus arcu molestie sed. Curabitur sed est sed ante pulvinar vestibulum vitae ut nunc. Donec hendrerit mi nec sem bibendum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur venenatis tristique eleifend. Sed fringilla, erat a euismod lacinia, dolor risus blandit elit, in tempor erat urna volutpat risus. Sed mattis mollis massa vitae interdum. Etiam ac lacus lorem. ',
  },
];

function FaqList() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>Accueil</BreadcrumbItem>
        <BreadcrumbItem active>Partenaires</BreadcrumbItem>
      </Breadcrumb>
      <Container fluid className={styles.containerQR}>
        <Row className={styles.searchBar}>
          <Col xs="3" className={styles.faqTitle}>
            Gérer les partenaires
          </Col>
        </Row>
        <Container fluid className={styles.addQR}>
          <Input
            className={styles.inputQR}
            type="text"
            name="search"
            id="search"
            placeholder="Ajouter le nom de votre partenaire"
          />
          <Input
            className={styles.inputQR}
            type="text"
            name="search"
            id="search"
            placeholder="Texte descriptif"
          />
          <Input
            className={styles.inputQR}
            type="text"
            name="search"
            id="search"
            placeholder="URL du site du partenaire"
          />
          <Row>
            <Col xs="3" className={styles.logo}>
              <Label for="exampleFile">Logo du partenaire</Label>
            </Col>
            <Col>
              <Input type="file" name="file" id="exampleFile" />
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 2, offset: 10 }}>
              <Button className="button">Valider</Button>
            </Col>
          </Row>
        </Container>
        <div Fluid className={styles.container}>
          {partners.map((item) => (
            <>
              <Row className={styles.row}>
                <Input type="checkbox" />
                <Col xs="3">
                  <img src={item.logo} alt="logo" />
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <p className={styles.titreDescription}>{item.title}</p>
                    </Col>
                    <Col xs="1">
                      <img className={styles.star} src={item.star} alt="star" />
                    </Col>
                  </Row>
                  <p className={styles.titreDescription}>{item.presentation}</p>
                  <p className={styles.titreDescription}>{item.url}</p>
                </Col>
              </Row>
            </>
          ))}
        </div>
        <Row>
          <Col xs={{ size: 1.5, offset: 8 }}>
            <PartnerModal />
          </Col>
          <Col xs="2">
            <Button className="button">Supprimer</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FaqList;
