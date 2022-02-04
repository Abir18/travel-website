import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Offerings from '../Offerings/Offerings';
import RecentTrips from '../RecentTrips/RecentTrips';
// import Tours from '../Tours/Tours';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <Tours></Tours> */}
      <Offerings></Offerings>
      <RecentTrips></RecentTrips>
      <Footer></Footer>
    </div>
  );
};

export default Home;
