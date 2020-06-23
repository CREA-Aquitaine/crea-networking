import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import styles from './Dashboard.module.css';

function DashboardBreadcrumb() {
  return (
    <>
      <Breadcrumb tag="nav" listTag="div" className={styles.fil}>
        <BreadcrumbItem tag="a" href="#">
          Accueil
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Dashboard
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}

export default DashboardBreadcrumb;
