import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.presentation}>
      <div className={styles.cover}>
        <hr />
        <h1>
          NETWORKING <br />
          TRANSFRONTALIER
        </h1>
      </div>
      <h2>Présentation</h2>
      <p className={styles.pres}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        ullam numquam quisquam nulla doloremque inventore praesentium. Officia,
        numquam atque accusamus, saepe impedit quasi, tenetur similique in quae
        eos assumenda dolore! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eligendi molestiae odio molestias cumque sed. At, dignissimos, hic
        aut et eveniet, nobis vitae itaque tempore modi non distinctio optio
        sequi laborum?
      </p>
      <button className={styles.button} type="button">
        Nos partenaires
      </button>
    </div>
  );
}
export default Header;
