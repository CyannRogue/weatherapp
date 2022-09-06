import React, { useState, useEffect } from "react";

// custom hook
import { useFetch } from "../componets/Hook/useFetch";

//components
import HourCard from "../componets/Cards/HourCard";
import WeekWeather from "../componets/Modal/WeekWeather";
import CardDesktop from "../componets/Cards/CardDesktop";
import ContentContainer from "../componets/ContentContainer/ContentContainer";
import { backGroundDB } from "../componets/utils/backGroundDB.js";

const App = () => {
  const url = "https://weather-googlegeoloapi-backend.herokuapp.com/weather/";
  const [value, setValue] = useState("");
  const [isActivated, setIsActivated] = useState(false);
  const [searchText, setSearchText] = useState(null);
  const [switched, setSwitched] = useState(true);

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

  const switchButton = () => {
    setSwitched(!switched);
  };

  const onSearch = searchTerm => {
    // searchTerm.preventDefault();
    setValue(searchTerm);
    setSearchText(searchTerm);
  };

  const { data, loading, hasError, errorMessage } = useFetch(url, searchText);

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
            {/* 
            
            
            
            */}
            {/* Right Section */}
            {/* 



            */}
            <section className='flex-1 m-6 '>
              {/* Mobile */}

              <header className='flex justify-between lg:hidden '>
                {data && (
                  <div>
                    <div>
                      <h1 className='text-3xl mb-2'>
                        {data.location.localtime.slice(-5)}
                      </h1>
                      <p className='text-sm'>{data.location.localtime}</p>
                      <p className='text-sm'>
                        {data.location.name}, {data.location.region}
                      </p>
                    </div>
                    <div className='text-2xl'>
                      <h1>{data.current.temp_c}°C</h1>
                    </div>
                  </div>
                )}
              </header>

              {/* Desktop */}

              <header className='lg:block hidden '>
                <h1 className='text-3xl mb-2'>
                  {data.location.localtime.slice(10, -3) < 10
                    ? `${0}${data.location.localtime.slice(-5).trim()}`
                    : data.location.localtime.slice(-5)}
                </h1>
                <p className='text-sm'>
                  {data.location.localtime.slice(0, -5)}
                </p>
                <p className='text-sm'>
                  {data.location.region === data.location.name
                    ? ` ${data.location.name}, ${data.location.country}`
                    : ` ${data.location.name}, ${data.location.region}`}
                </p>
              </header>
              <div
                action=''
                className={`flex bg-no-repeat items-center justify-center bg-contain bg-center h-[80%] ${backgroundImage}`}
              >
                <div className=' ease-in-out duration-500'>
                  <div>
                    <label
                      htmlFor='default-search'
                      className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'
                    >
                      Search
                    </label>
                    <div className='relative'>
                      <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                        <svg
                          aria-hidden='true'
                          className='w-5 h-5 text-gray-500 dark:text-gray-400'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                          ></path>
                        </svg>
                      </div>
                      <input
                        value={value}
                        onChange={onChange}
                        type='search'
                        id='default-search'
                        className='block p-4 pl-10 w-full text-sm text-[#4C4C4C] bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#4C4C4C] dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Search...'
                        required=''
                      />
                      <button
                        onClick={onSearch}
                        className='text-white absolute right-2.5 bottom-2.5 bg-[#4C4C4C] hover:bg-[#6d6d6d] focus:ring-4 focus:outline-none focus:ring-[#4C4C4C] font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#4C4C4C] dark:hover:bg-[#7b7b7b] dark:focus:ring-[#4C4C4C]'
                      >
                        Search
                      </button>
                    </div>
                  </div>

                  <ul
                    tabIndex='0'
                    className={`drop-shadow-md dropdown-content menu p-2 shadow bg-base-100 rounded-box max-w-[280px] max-h-52 overflow-auto ease-in-out duration-500 ${
                      isActivated ? "block" : "hidden"
                    }`}
                  >
                    {city &&
                      city.slice(0, 10).map((item, index) => (
                        <li key={item.id}>
                          <a
                            type='submit'
                            onClick={() => onSearch(item.name)}
                          >{`${item.name}, ${item.region}`}</a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </section>
            {/* 
            
            
            
            
            */}
            {/* Middle Section */}
            {/* 
            
            
            
            */}
            <section className='flex-1 hidden lg:flex justify-center items-center'>
              <CardDesktop
                uv={data.current.uv}
                is_day={data.current.is_day}
                temp_c={data.current.temp_c}
                vis_km={data.current.vis_km}
                date={data.location.localtime}
                humidity={data.current.humidity}
                gust_kph={data.current.gust_kph}
                wind_kph={data.current.wind_kph}
                wind_dir={data.current.wind_dir}
                text={data.current.condition.text}
                precip_mm={data.current.precip_mm}
                image={data.current.condition.icon}
                feelslike_c={data.current.feelslike_c}
                pressure_mb={data.current.pressure_mb}
                wind_degree={data.current.wind_degree}
              />
            </section>
            {/* 
            
            
            
            */}
            {/* Left Section */}
            {/* 
            
            
            
            
            */}
            <section className='flex-1 hidden lg:flex flex-col my-5 '>
              <h1 className='text-2xl'>
                Next <span className='font-bold'>forecast</span>
              </h1>

              <ul className=' overflow-y-scroll'>
                {data &&
                  data.forecast.forecastday.map((item, index) => (
                    <ContentContainer
                      key={index}
                      day={item.date}
                      temp={item.day.maxtemp_c}
                      wind={item.day.maxwind_kph}
                      rain={item.day.totalprecip_mm}
                      humidity={item.day.avghumidity}
                      image={item.day.condition.icon}
                      condition={item.day.condition.text}
                    />
                  ))}
              </ul>
            </section>
          </section>
          {/* 
          
          
          
          */}
          {/* Bottom Section */}
          {/* 
          
          
          
          */}
          <section className=' z-2 h-2/6  bg-[#D9D9D9] rounded-t-[24px]'>
            <label className='swap swap-flip text-2xl  mt-2 ml-7  '>
              <input type='checkbox' />
              <img
                onClick={switchButton}
                src='../../public/assets/other/Today.png'
                className=' swap-on h-7 w-7'
                alt=''
              />
              <img
                onClick={switchButton}
                src='../../public/assets/other/tomorrow.png'
                className=' swap-off h-7 w-7'
                alt=''
              />
            </label>
            {switched ? (
              <h2 className='ml-5'>
                Tod<span className='font-bold'>ay</span>
              </h2>
            ) : (
              <h2 className='ml-5'>
                Tomo<span className='font-bold'>rrow</span>
              </h2>
            )}

            <ul className='flex overflow-x-auto h-[70%] items-center justify-center'>
              {switched
                ? data &&
                  data.forecast.forecastday[1].hour.map((item, index) => (
                    <HourCard
                      key={index}
                      temp_c={item.temp_c}
                      time={item.time.slice(-5)}
                      image={item.condition.icon}
                      currentTime={data.location.localtime.slice(-5)}
                    />
                  ))
                : data &&
                  data.forecast.forecastday[0].hour.map((item, index) => (
                    <HourCard
                      key={index}
                      temp_c={item.temp_c}
                      time={item.time.slice(-5)}
                      image={item.condition.icon}
                      currentTime={data.location.localtime.slice(-5)}
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
