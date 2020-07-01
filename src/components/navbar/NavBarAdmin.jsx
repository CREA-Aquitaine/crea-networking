import React from 'react';

import FirstNavbar from './FirstNavbar';

import SecondNavbar from './SecondNavbar';
import banner from '../image/img_header_crea_networking.jpg';

import styles from './NavBarAdmin.module.css';

function NavBar() {
  return (
    <div>
      <FirstNavbar />
      <SecondNavbar />
      <img src={banner} className={styles.banner} alt="banner" />
    </div>
  );
}

export default NavBar;
