import React from 'react';
import Blocs from './Blocs';
import Steps from './Steps';
import BestFriends from './BestFriends';
import Header from './Header';

function Home() {
  return (
    <>
      <Header />
      <Blocs />
      <Steps />
      <BestFriends />
      <hr className="hrFooter" />
    </>
  );
}

export default Home;
