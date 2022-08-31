import WeatherIcon from "../IconBD/WeatherIcon";

const ContentContainer = ({ image, day, temp, wind, rain, humidity }) => {
  const imagePath = image.slice(-7, -4);

  const dayOfWeek = date => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date(date);
    return days[d.getDay()];
  };

  return (
    <div className='flex justify-between my-5 hover:shadow-md rounded-xl duration-500'>
      <div className='flex items-center'>
        <WeatherIcon imagePath={imagePath} />
        <div className='flex flex-col ml-2'>
          <h1 className=''>{dayOfWeek(day)}</h1>
          <p className='text-2xl'>{temp}°</p>
        </div>
      </div>
      <div className=' flex lg:px-10 text-[10px] items-center'>
        <div className='flex flex-col items-center px-3'>
          <p className='pb-2'>Wind</p>
          <p>{wind} kph</p>
        </div>
        <div className='flex flex-col items-center px-3'>
          <p className='pb-2'>Rain</p>
          <p>{rain} mm</p>
        </div>
        <div className='flex flex-col items-center px-3'>
          <p className='pb-2'>Humidity</p>
          <p>{humidity}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
