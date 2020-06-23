import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function PostAnnounceBreadcrumb() {
  return (
    <>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">
          Accueil
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Inter entreprises
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Déposer une annonce
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}

export default PostAnnounceBreadcrumb;
