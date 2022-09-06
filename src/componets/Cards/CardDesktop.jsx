import WeatherIcon from "../IconBD/WeatherIcon";

const CardDesktop = ({
  date,
  text,
  image,
  feelslike_c,
  gust_kph,
  humidity,
  is_day,
  precip_mm,
  pressure_mb,
  temp_c,
  uv,
  vis_km,
  wind_degree,
  wind_dir,
  wind_kph,
}) => {
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
    <div className=' w-96 h-[82%] p-5 rounded-xl shadow-md hover:shadow-2xl duration-500'>
      {/* Limited Details */}
      <div>
        <h1 className='text-3xl mb-2'>{dayOfWeek(date)}</h1>
        <div className=' flex flex-row'>
          <p className='text-2xl mr-5'>{text}</p>
          <p className='text-2xl'>{temp_c} °C</p>
        </div>
        <p className='text-sm'>Feels like</p>
        <div className='flex items-center'>
          {/* Icon */}
          <WeatherIcon imagePath={imagePath} />
          <p className='text-sm ml-2'>{feelslike_c} °C</p>
        </div>
      </div>
      {/* Full Details */}
      <ul className='grid grid-cols-4 grid-rows-4 gap-2 items-center mt-8 text-[10px]'>
        {/* Wind */}
        <li>Wind</li>
        {/* Speed */}
        <li>{wind_kph}k/h</li>
        {/* Wind */}
        <li>Wind direction</li>
        {/* direction */}
        <li>{wind_dir}</li>
        {/* Pressure */}
        <li>Pressure</li>
        {/* Pressure */}
        <li>{pressure_mb} hpa</li>
        {/* Rain */}
        <li>Rain</li>
        {/* Rain */}
        <li>{precip_mm} mm</li>
        {/* Cloud */}
        <li>Cloud</li>
        {/* Cloud */}
        <li>0 %</li>
        {/* Humidity */}
        <li>Humidity</li>
        {/* Humidity */}
        <li>{humidity} %</li>
        {/* Visibility */}
        <li>Visibility</li>
        {/* Visibility */}
        <li>{vis_km} km</li>
        {/* Gust */}
        <li>Gust</li>
        {/* Gust */}
        <li>{gust_kph} km/h</li>
        {/* UV */}
        <li>UV</li>
        {/* UV */}
        <li>{uv}</li>
      </ul>
    </div>
  );
};

export default CardDesktop;
