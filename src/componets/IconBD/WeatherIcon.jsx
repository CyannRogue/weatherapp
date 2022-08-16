import React from "react";

const WeatherIcon = ({ path }) => {
  return (
    <div className='py-3'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='35'
        width='35'
        viewBox='0 0 50 50'
      >
        <path d={path[113]} />
      </svg>
    </div>
  );
};

export default WeatherIcon;
