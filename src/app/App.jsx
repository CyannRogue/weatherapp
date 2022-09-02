import React, { useState, useEffect } from "react";

// custom hook
import { useFetch } from "../componets/Hook/useFetch";

//components
import HourCard from "../componets/Cards/HourCard";
import WeekWeather from "../componets/Modal/WeekWeather";
import CardDesktop from "../componets/Cards/CardDesktop";
import SearchElement from "../componets/SearchElement/SearchElement";
import ContentContainer from "../componets/ContentContainer/ContentContainer";
import { backGroundDB } from "../componets/utils/backGroundDB.js";
// context
const App = () => {
  const url = "https://weather-googlegeoloapi-backend.herokuapp.com/weather/";
  const [value, setValue] = useState("");
  const [searchText, setSearchText] = useState("empty");
  const [isActivated, setIsActivated] = useState(false);
  const { data, loading, hasError, errorMessage } = useFetch(url, searchText);

  const convertTime = epochTime => {
    const date = new Date(epochTime * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();

    return `${hours}:${minutes.slice(-2)}`;
  };

  //SearchElement

  const [city, setCity] = useState(null);
  const fetchCity = async city => {
    if (city) {
      const response = await fetch(
        `https://weather-googlegeoloapi-backend.herokuapp.com/search/${city}`
      );
      const json = await response.json();

      setCity(json);
    }
  };

  const onChange = event => {
    setValue(event.target.value);
    if (event.target.value.length > 2) {
      setIsActivated(true);
      fetchCity(event.target.value);
    } else {
      setIsActivated(false);
    }
  };

  const onSearch = searchTerm => {
    setValue(searchTerm);
    setSearchText(searchTerm);
  };

  const backgroundImage = data
    ? backGroundDB[data.current.condition.icon.slice(-7, -4)]
    : "bg-[url(../../assets/Images/Default.png)]";

  if (loading)
    return (
      <div className='flex justify-center items-center border h-screen w-auto transition-opacity bg-gray-100 duration-700'>
        <button className='  btn loading '>loading</button>
      </div>
    );
  if (hasError)
    return (
      <div className='alert alert-error shadow-lg'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current flex-shrink-0 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>Error! {errorMessage}</span>
        </div>
      </div>
    );

  return (
    <div>
      <div>
        {/* Modal */}
        <WeekWeather />
        {/* Modal */}
        <div className=' overflow-hidden h-screen w-auto text-[#454545]'>
          <section className=' flex  h-2/3 '>
            {/* First Section */}
            <section className='flex-1 m-6 '>
              {/* Mobile */}

              <header className='flex justify-between lg:hidden '>
                {data && (
                  <div>
                    <div>
                      <h1 className='text-3xl mb-2'>
                        {convertTime(data.location.localtime_epoch)}
                      </h1>
                      <p className='text-sm'>Mon, 24, Aug 2022</p>
                      <p className='text-sm'>
                        {data.location.name}, {data.location.region}
                      </p>
                    </div>
                    <div className='text-3xl'>
                      <h1>{data.current.temp_c}°</h1>
                    </div>
                  </div>
                )}
              </header>

              {/* Desktop */}

              <header className='lg:block hidden '>
                <h1 className='text-3xl mb-2'>
                  {convertTime(data.location.localtime_epoch)}
                </h1>
                <p className='text-sm'>Mon, 24, Aug 2022</p>
                <p className='text-sm'>
                  {data.location.name}, {data.location.region}
                </p>
              </header>
              <form
                action=''
                className={`flex bg-no-repeat justify-center bg-contain bg-center h-[80%] ${backgroundImage}`}
              >
                {/* Search input and Button */}
                <SearchElement
                  isActivated={isActivated}
                  onChange={onChange}
                  onSearch={onSearch}
                  city={city}
                  value={value}
                />
              </form>
            </section>
            {/* Second Section */}

            <section className='flex-1 hidden lg:flex justify-center items-center'>
              <CardDesktop
                text={data.current.condition.text}
                image={data.current.condition.icon}
                feelslike_c={data.current.feelslike_c}
                gust_kph={data.current.gust_kph}
                humidity={data.current.humidity}
                is_day={data.current.is_day}
                precip_mm={data.current.precip_mm}
                pressure_mb={data.current.pressure_mb}
                temp_c={data.current.temp_c}
                uv={data.current.uv}
                vis_km={data.current.vis_km}
                wind_degree={data.current.wind_degree}
                wind_dir={data.current.wind_dir}
                wind_kph={data.current.wind_kph}
              />
            </section>
            {/* Third Section */}
            <section className='flex-1 hidden lg:flex flex-col my-5 '>
              <h1 className='text-2xl'>
                Next <span className='font-bold'>forecast</span>
              </h1>

              <ul className=' overflow-y-scroll'>
                {data &&
                  data.forecast.forecastday.map((item, index) => (
                    <ContentContainer
                      key={index}
                      image={item.day.condition.icon}
                      day={item.date}
                      temp={item.day.maxtemp_c}
                      wind={item.day.maxwind_kph}
                      rain={item.day.totalprecip_mm}
                      humidity={item.day.avghumidity}
                      condition={item.day.condition.text}
                    />
                  ))}
              </ul>
            </section>
          </section>
          {/* Last Section */}
          <section className=' z-2 h-2/6  bg-[#D9D9D9] rounded-t-[24px]'>
            <h1>
              Hour<span className='font-bold'>ly</span>
            </h1>
            <ul className='flex overflow-x-auto h-[70%] items-center'>
              {data &&
                data.forecast.forecastday[0].hour.map((item, index) => (
                  <HourCard
                    currentTime={convertTime(data.location.localtime_epoch)}
                    key={index}
                    image={item.condition.icon}
                    temp_c={item.temp_c}
                    time={item.time}
                  />
                ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
