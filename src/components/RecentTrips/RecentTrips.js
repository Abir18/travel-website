import React from 'react';
import recent1 from '../../Images/Recent/recent1.png';
import recent2 from '../../Images/Recent/recent2.png';

const RecentTrips = () => {
  return (
    <div>
      <h1 className="m-5">Recent Trips</h1>
      <div className="offerings">
        <div>
          <img src={recent1} alt="" />
          <h4 className="m-3">Journeys Are Best Measured In New Friends</h4>
        </div>
        <div>
          <img src={recent2} alt="" />
          <h4 className="m-3">Journeys Are Best Measured In New Friends</h4>
        </div>
        <div>
          <img src={recent1} alt="" />
          <h4 className="m-3">Journeys Are Best Measured In New Friends</h4>
        </div>
      </div>
    </div>
  );
};

export default RecentTrips;
