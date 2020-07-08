import React from 'react';
import Blocs from './Blocs';
import Steps from './Steps';
import BestFriends from './BestFriends';
import Header from './Header';

import PutSchool from '../putAccount/PutSchool';
import PutUser from '../putAccount/PutUserInfo';
import PutCompany from '../putAccount/PutCompany';

function Home() {
  return (
    <>
      <Header />
      <Blocs />
      <Steps />
      <BestFriends />
      <PutSchool />
      <PutUser />
      <PutCompany />
    </>
  );
}

export default Home;
