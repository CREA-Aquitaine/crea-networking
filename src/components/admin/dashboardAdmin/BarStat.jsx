import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Container } from 'reactstrap';

import styles from './DashboardAdmin.module.css';

function BarStat() {
  return (
    <>
      <Container Fluid className={styles.pie}>
        <p className={styles.userTypes}>Suivi retour entreprise</p>
        <Bar
          data={{
            labels: ['<50', ' >50', '>200'],
            datasets: [
              {
                label: 'Taux de réponse',
                backgroundColor: ['#28262b', '#dd2b25', '#b22222'],
                borderColor: ['#28262b', '#dd2b25', '#b22222'],
                borderWidth: 2,
                data: ['10', '20', '30'],
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: 'Taux de réponse des entreprises en général',
            },
            legend: {
              display: false,
              position: 'right',
            },
            scales: {
              yAxes: [
                {
                  display: true,
                  ticks: {
                    beginAtZero: true,
                    steps: 10,
                    stepValue: 10,
                  },
                },
              ],
            },
          }}
        />
        <div className={styles.bar2}>
          <Bar
            data={{
              labels: ['Wcs', 'Total', 'Bati', 'DRT', 'CA', 'Entreprise'],
              datasets: [
                {
                  label: 'Glucose statement',
                  backgroundColor: '#dd2b25',
                  borderColor: '#dd2b25',
                  borderWidth: 2,
                  data: [80, 90, 50, 70, 60, 100, 75],
                },
              ],
            }}
            options={{
              title: {
                display: true,
                text: 'Taux de réponse par entreprise',
              },
              legend: {
                display: false,
                position: 'right',
              },
              scales: {
                xAxes: [
                  {
                    barThickness: 50,
                  },
                ],
                yAxes: [
                  {
                    display: true,
                    ticks: {
                      beginAtZero: true,
                      steps: 10,
                      stepValue: 10,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </Container>
    </>
  );
}

export default BarStat;
