import WeatherIcon from "../IconBD/WeatherIcon";
import path from "../IconBD/iconPath-BD";

const CardDesktop = () => {
  return (
    <div className=' p-5 rounded-xl shadow-md hover:shadow-2xl duration-500'>
      {/* Limited Details */}
      <div>
        <h1 className='text-3xl mb-2'>Monday</h1>
        <div className=' flex flex-row'>
          <p className='text-2xl mr-5'>Sunny</p>
          <p className='text-2xl'>26 °</p>
        </div>
        <p className='text-sm'>Feels Like</p>
        <div className='flex items-center'>
          {/* Icon */}
          <WeatherIcon path={path} />
          <p className='text-sm ml-2'>26 °</p>
        </div>
      </div>
      {/* Full Details */}
      <ul className='grid grid-cols-4 grid-rows-4 gap-2 items-center mt-8 text-[10px]'>
        {/* Wind */}
        <li>Wind</li>
        {/* Speed */}
        <li>12 k/h</li>
        {/* Wind */}
        <li>Wind degree</li>
        {/* direction */}
        <li>70 deg</li>
        {/* Pressure */}
        <li>Pressure</li>
        {/* Pressure */}
        <li>1000 hpa</li>
        {/* Rain */}
        <li>Rain</li>
        {/* Rain */}
        <li>0.0 mm</li>
        {/* Cloud */}
        <li>Cloud</li>
        {/* Cloud */}
        <li>0 %</li>
        {/* Humidity */}
        <li>Humidity</li>
        {/* Humidity */}
        <li>0 %</li>
        {/* Visibility */}
        <li>Visibility</li>
        {/* Visibility */}
        <li>10 km</li>
        {/* Gust */}
        <li>Gust</li>
        {/* Gust */}
        <li>0.0 km/h</li>
        {/* UV */}
        <li>UV</li>
        {/* UV */}
        <li>0.0</li>
      </ul>
    </div>
  );
};

export default CardDesktop;
