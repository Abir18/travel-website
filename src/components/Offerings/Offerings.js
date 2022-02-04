import React from 'react';
import offering1 from '../../Images/Offerings/1.svg';
import offering2 from '../../Images/Offerings/2.svg';
import offering3 from '../../Images/Offerings/3.svg';
import './Offerings.css';

const Offerings = () => {
  return (
    <>
      <h1 className="my-5">Our Offerings</h1>
      <div className="offerings m-5">
        <div>
          <img src={offering1} alt="" />
          <h3 className="m-3">Comfortable Journey</h3>
          <p>
            A wonderful serenity has taken to the possession of my entire soul.
          </p>
        </div>
        <div>
          <img src={offering2} alt="" />
          <h3 className="m-3">Luxuries Hotel</h3>
          <p>
            A wonderful serenity has taken to the possession of my entire soul.
          </p>
        </div>
        <div>
          <img src={offering3} alt="" />
          <h3 className="m-3">Easy Travel </h3>
          <p>
            A wonderful serenity has taken to the possession of my entire soul.
          </p>
        </div>
      </div>
    </>
  );
};

export default Offerings;
