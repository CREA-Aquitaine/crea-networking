import React from 'react';
import { Row, Table, Col } from 'reactstrap';

function DashboardTable() {
  return (
    <Row>
      <Col>
        <Table size="sm">
          <thead>
            <tr>
              <th>Mes Annonces</th>
              <th>Vues</th>
              <th>Candidateures à confirmer</th>
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
    </Row>
  );
}
export default DashboardTable;
