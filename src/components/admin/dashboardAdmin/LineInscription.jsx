import React from 'react';
import { Line } from 'react-chartjs-2';
import { Container } from 'reactstrap';

import styles from './DashboardAdmin.module.css';

function LineInscription() {
  return (
    <>
      <Container Fluid className={styles.pie}>
        <p className={styles.userTypes}>
          Taux d&apos;inscrition sur les 6 dernières semaines
        </p>
        <Line
          data={{
            labels: [
              'Semaine 1',
              'Semaine 2',
              'Semaine 3',
              'Semaine 4',
              'Semaine 5',
              'Semaine 6',
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
export default LineInscription;
