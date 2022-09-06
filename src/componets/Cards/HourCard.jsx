import WeatherIcon from "../IconBD/WeatherIcon.jsx";

const HourCard = ({ image, time, temp_c, currentTime }) => {
  const imagePath = image.slice(-7, -4);

  let currentHour =
    currentTime.slice(0, 2) < 1
      ? `${0}${currentTime.slice(0, 2).trim()}`
      : currentTime.slice(0, 2);

  if (currentHour === time.slice(0, 2)) {
    return (
      <div className='flex flex-col justify-center max-w-[40px] max-h-[110px] content-center text-xs mx-2  items-center  rounded-[50px] drop-shadow-xl -translate-y-1.5  bg-[#4C4C4C] fill-white text-white   duration-500 '>
        <p className='mt-4 mx-2 text-[10px]'>{time}</p>
        <WeatherIcon imagePath={imagePath} />
        <p className='mb-4 mx-2 text-[10px]'>{temp_c}°C</p>
      </div>
    );
  } else {
    return (
      <div className='flex flex-col justify-center max-w-[40px] max-h-[110px] content-center text-xs mx-2  items-center bg-white rounded-[50px] drop-shadow-xl    duration-500 '>
        <p className='mt-4 mx-2 text-[10px]'>{time}</p>
        <WeatherIcon imagePath={imagePath} />
        <p className='mb-4 mx-2 text-[10px]'>{temp_c}°C</p>
      </div>
    );
  }
};

export default HourCard;
