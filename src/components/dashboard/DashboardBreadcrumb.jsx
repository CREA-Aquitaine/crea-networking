import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import styles from './Dashboard.module.css';

function DashboardBreadcrumb() {
  return (
    <>
      <Breadcrumb tag="nav" listTag="div" className={styles.fil}>
        <BreadcrumbItem tag="a" href="#">
          <Link tag="link" to="/">
            Accueil
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          <Link tag="Link" to="/dashboard">
            Dashboard
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}

export default DashboardBreadcrumb;
