import React from 'react';
import imgHeaderCrea from './image/img_header_crea.png';
import styles from './Header.module.css';

function Header() {
  return (
    <div>
      <img className={styles.responsive} src={imgHeaderCrea} alt="yo" />
      <p>PRESENTATION</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        ullam numquam quisquam nulla doloremque inventore praesentium. Officia,
        numquam atque accusamus, saepe impedit quasi, tenetur similique in quae
        eos assumenda dolore!
      </p>
      <button type="button">Nos partenaires</button>
    </div>
  );
}
export default Header;
