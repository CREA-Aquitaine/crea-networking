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
  FormGroup,
} from 'reactstrap';

import styles from './Faq_List.module.css';
import FaqModal from './FaqModal';

const QR = [
  {
    question:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id est ac lorem porttitor eleifend. Praesent rutrum molestie magna. Curabitur ac nisl ut massa pharetra sodales ?',
    response:
      'Praesent blandit orci a interdum mollis. Vestibulum congue tincidunt mauris eu accumsan. Aliquam feugiat quam justo, vitae maximus arcu molestie sed. Curabitur sed est sed ante pulvinar vestibulum vitae ut nunc. Donec hendrerit mi nec sem bibendum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur venenatis tristique eleifend. Sed fringilla, erat a euismod lacinia, dolor risus blandit elit, in tempor erat urna volutpat risus. Sed mattis mollis massa vitae interdum. Etiam ac lacus lorem. ',
  },
  {
    question:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id est ac lorem porttitor eleifend. Praesent rutrum molestie magna. Curabitur ac nisl ut massa pharetra sodales ?',
    response:
      'Praesent blandit orci a interdum mollis. Vestibulum congue tincidunt mauris eu accumsan. Aliquam feugiat quam justo, vitae maximus arcu molestie sed. Curabitur sed est sed ante pulvinar vestibulum vitae ut nunc. Donec hendrerit mi nec sem bibendum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur venenatis tristique eleifend. Sed fringilla, erat a euismod lacinia, dolor risus blandit elit, in tempor erat urna volutpat risus. Sed mattis mollis massa vitae interdum. Etiam ac lacus lorem. ',
  },
  {
    question:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id est ac lorem porttitor eleifend. Praesent rutrum molestie magna. Curabitur ac nisl ut massa pharetra sodales ?',
    response:
      'Praesent blandit orci a interdum mollis. Vestibulum congue tincidunt mauris eu accumsan. Aliquam feugiat quam justo, vitae maximus arcu molestie sed. Curabitur sed est sed ante pulvinar vestibulum vitae ut nunc. Donec hendrerit mi nec sem bibendum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur venenatis tristique eleifend. Sed fringilla, erat a euismod lacinia, dolor risus blandit elit, in tempor erat urna volutpat risus. Sed mattis mollis massa vitae interdum. Etiam ac lacus lorem. ',
  },
  {
    question:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id est ac lorem porttitor eleifend. Praesent rutrum molestie magna. Curabitur ac nisl ut massa pharetra sodales ?',
    response:
      'Praesent blandit orci a interdum mollis. Vestibulum congue tincidunt mauris eu accumsan. Aliquam feugiat quam justo, vitae maximus arcu molestie sed. Curabitur sed est sed ante pulvinar vestibulum vitae ut nunc. Donec hendrerit mi nec sem bibendum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur venenatis tristique eleifend. Sed fringilla, erat a euismod lacinia, dolor risus blandit elit, in tempor erat urna volutpat risus. Sed mattis mollis massa vitae interdum. Etiam ac lacus lorem. ',
  },
];

function PartnerList() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>Accueil</BreadcrumbItem>
        <BreadcrumbItem active>FAQ</BreadcrumbItem>
      </Breadcrumb>
      <Container fluid className={styles.containerQR}>
        <Row className={styles.searchBar}>
          <Col xs="2" className={styles.faqTitle}>
            Gérer la FAQ
          </Col>
          <Col xs={{ size: 2, offset: 7 }}>
            <Input
              className={styles.inputSearch}
              type="text"
              name="search"
              id="search"
              placeholder="RECHERCHER"
            />
          </Col>
        </Row>
        <Container fluid className={styles.addQR}>
          <Input
            className={styles.inputQR}
            type="text"
            name="search"
            id="search"
            placeholder="Votre question"
          />
          <Input
            className={styles.inputQR}
            type="text"
            name="search"
            id="search"
            placeholder="Votre réponse"
          />
          <Row>
            <Col xs={{ size: 2, offset: 10 }}>
              <Button className="button">Valider</Button>
            </Col>
          </Row>
        </Container>
        <div Fluid className={styles.container}>
          {QR.map((item) => (
            <>
              <FormGroup check className={styles.checkbox}>
                <Label check />
                <Input type="checkbox" /> {item.question}
              </FormGroup>
              <p className={styles.response}>{item.response}</p>
            </>
          ))}
        </div>
        <Row>
          <Col xs={{ size: 1.5, offset: 8 }}>
            <FaqModal />
          </Col>
          <Col xs="2">
            <Button className="button">Supprimer</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default PartnerList;
