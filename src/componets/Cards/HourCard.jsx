import WeatherIcon from "../IconBD/WeatherIcon.jsx";

const HourCard = () => {
  return (
    <div className='flex flex-col justify-center max-w-[40px] max-h-[110px] content-center text-xs mx-2  items-center bg-white rounded-[50px] drop-shadow-xl hover:-translate-y-1.5  hover:bg-[#4C4C4C] hover:fill-white hover:text-white   duration-500 '>
      <p className='mt-4 mx-2 text-[10px]'>12AM</p>
      {/* <WeatherIcon path={path} /> */}
      <p className='mb-4 mx-2 text-[10px]'>12°</p>
    </div>
  );
};

export default HourCard;
