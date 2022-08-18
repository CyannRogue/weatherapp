import WeatherIcon from "../IconBD/WeatherIcon";
import path from "../IconBD/iconPath-BD.js";

const ContentContainer = () => {
  return (
    <li className='flex justify-between my-5 hover:shadow-md rounded-xl duration-500'>
      <div className='flex items-center'>
        <WeatherIcon path={path} />
        <div className='flex flex-col ml-2'>
          <h1 className=''>Tuesday</h1>
          <p className='text-2xl'>26 °</p>
        </div>
      </div>
      <div className=' flex lg:px-10 text-[10px] items-center'>
        <div className='flex flex-col items-center px-3'>
          <p className='pb-2'>Wind</p>
          <p>12 k/h</p>
        </div>
        <div className='flex flex-col items-center px-3'>
          <p className='pb-2'>Rain</p>
          <p>55 %</p>
        </div>
        <div className='flex flex-col items-center px-3'>
          <p className='pb-2'>Humidity</p>
          <p>55 %</p>
        </div>
      </div>
    </li>
  );
};

export default ContentContainer;
