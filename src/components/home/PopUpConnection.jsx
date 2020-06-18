import React, { useState } from 'react';
import { NavLink } from 'reactstrap';

import ModalConnection from './ModalConnection';

import styles from './PopUpConnection.module.css';

function PopUpConnection() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <NavLink className={styles.navlink} onClick={toggle}>
        Espace connexion
      </NavLink>
      <ModalConnection modal={modal} toggle={toggle} />
    </>
  );
}

export default PopUpConnection;
