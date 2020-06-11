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
import send from '../image/greenbutton.png';
import closed from '../image/redbutton.png';
import inProgress from '../image/yellowbutton.png';

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
            <h3 className={activeTab === '1' ? 'activeOn' : 'activeOff'}>
              Partenariats
            </h3>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={{ active: activeTab === '2' }}
            onClick={() => {
              toggle('2');
            }}
          >
            <h3 className={activeTab === '2' ? 'activeOn' : 'activeOff'}>
              Recrutement
            </h3>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="2" />
            <Col sm="8" xs="8">
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
                    <td className={styles.rowTd}>
                      <img
                        src={send}
                        alt="Envoyée"
                        width="16px"
                        height="16px"
                      />
                      <p>Envoyée</p>{' '}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Annonce 2</th>
                    <td>200</td>
                    <td>20 en attentes, 5 confirmés</td>
                    <td className={styles.rowTd}>
                      <img
                        src={closed}
                        alt="Fermée"
                        width="16px"
                        height="16px"
                      />
                      <p>Fermée</p>{' '}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Annonce 3</th>
                    <td>18</td>
                    <td>__</td>
                    <td className={styles.rowTd}>
                      <img
                        src={inProgress}
                        alt="En attente"
                        width="16px"
                        height="16px"
                      />
                      <p>En attente</p>{' '}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col sm="2" />
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="2" />
            <Col sm="8" xs="8">
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
                    <td className={styles.rowTd}>
                      <img
                        src={send}
                        alt="Envoyée"
                        width="16px"
                        height="16px"
                      />
                      <p>Envoyée</p>{' '}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Annonce 2</th>
                    <td>100</td>
                    <td>3 en attentes, 1 confirmés</td>
                    <td className={styles.rowTd}>
                      <img
                        src={closed}
                        alt="Fermée"
                        width="16px"
                        height="16px"
                      />
                      <p>Fermée</p>{' '}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Annonce 3</th>
                    <td>400</td>
                    <td>__</td>
                    <td className={styles.rowTd}>
                      <img
                        src={inProgress}
                        alt="En attente"
                        width="16px"
                        height="16px"
                      />
                      <p>En attente</p>{' '}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col sm="2" />
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}
export default DashboardTable;
