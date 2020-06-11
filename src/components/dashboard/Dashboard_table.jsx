import React, { useState } from 'react';

import {
  Table,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
} from 'reactstrap';
import styles from './Dashboard_table.module.css';

function DashboardTable() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className={styles.dashboardTable}>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={{ active: activeTab === '1' }}
            onClick={() => {
              toggle('1');
            }}
          >
            <h3>Partenariats</h3>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={{ active: activeTab === '2' }}
            onClick={() => {
              toggle('2');
            }}
          >
            <h3>Recrutement</h3>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="1" />
            <Col sm="10" xs="8">
              <Table size="sm" className={styles.tables}>
                <thead>
                  <tr>
                    <th>Mes Annonces</th>
                    <th>Vues</th>
                    <th>Candidatures à confirmer</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Annonce 1</th>
                    <td>14</td>
                    <td>2 en attentes</td>
                    <td>
                      <img src="Envoyée" alt="Envoyée" />
                      <p>Envoyée</p>{' '}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Annonce 2</th>
                    <td>200</td>
                    <td>20 en attentes, 5 confirmés</td>
                    <td>
                      <img src="Fermée" alt="Fermée" />
                      <p>Fermée</p>{' '}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Annonce 3</th>
                    <td>18</td>
                    <td>__</td>
                    <td>
                      <img src="En attente" alt="En attente" />
                      <p>En attente</p>{' '}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col sm="1" />
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="1" />
            <Col sm="10" xs="8">
              <Table size="sm" className={styles.tables}>
                <thead>
                  <tr>
                    <th>Mes Annonces</th>
                    <th>Vues</th>
                    <th>Candidatures à confirmer</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Annonce 1</th>
                    <td>20</td>
                    <td>1 en attentes</td>
                    <td>
                      <img src="Envoyée" alt="Envoyée" />
                      <p>Envoyée</p>{' '}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Annonce 2</th>
                    <td>100</td>
                    <td>3 en attentes, 1 confirmés</td>
                    <td>
                      <img src="Fermée" alt="Fermée" />
                      <p>Fermée</p>{' '}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Annonce 3</th>
                    <td>400</td>
                    <td>__</td>
                    <td>
                      <img src="En attente" alt="En attente" />
                      <p>En attente</p>{' '}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col sm="1" />
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}
export default DashboardTable;
