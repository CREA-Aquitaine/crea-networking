import React from 'react';
import { Line } from 'react-chartjs-2';
import { Container } from 'reactstrap';
// import PropTypes from 'prop-types';

import styles from './DashboardAdmin.module.css';

function LineInscription() {
  return (
    <>
      <Container Fluid className={styles.line}>
        <p className={styles.userTypes}>
          Taux d&apos;inscrition sur les 6 dernières semaines
        </p>
        <Line
          data={{
            labels: [
              'Mois 1',
              'Mois 2',
              'Mois 3',
              'Mois 4',
              'Mois 5',
              'Mois 6',
              'Mois 7',
              'Mois 8',
              'Mois 9',
              'Mois 10',
              'Mois 11',
              'Mois 12',
            ],
            datasets: [
              {
                label: 'Rainfall',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [15, 12, 20, 18, 12, 11],
              },
            ],
          }}
          options={{
            legend: {
              display: false,
              position: 'right',
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    stepSize: 5,
                    suggestedMin: 0,
                    suggestedMax: 30,
                  },
                },
              ],
            },
          }}
        />
      </Container>
    </>
  );
}

// LineInscription.propTypes = {
//   users: PropTypes.string.isRequired,
// };
export default LineInscription;
