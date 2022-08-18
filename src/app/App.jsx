import React from "react";

import CardDesktop from "../componets/Cards/CardDesktop";
import ContentContainer from "../componets/ContentContainer/ContentContainer";
import SearchElement from "../componets/SearchElement/SearchElement";
import HourCard from "../componets/Cards/HourCard";

import WeekWeather from "../componets/Modal/WeekWeather";

const App = () => {
  return (
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
              <div>
                <h1 className='text-3xl mb-2 '>Rainy</h1>
                <p className='text-sm'>Mon, 24, Aug 2022</p>
                <p className='text-sm'>Somerset west, Western Cape</p>
              </div>
              <div className='text-3xl'>
                <h1>26°</h1>
              </div>
            </header>
            {/* Desktop */}
            <header className='lg:block hidden '>
              <h1 className='text-3xl mb-2'>10:37</h1>
              <p className='text-sm'>Mon, 24, Aug 2022</p>
              <p className='text-sm'>Somerset west, Western Cape</p>
            </header>
            <form
              action=''
              className='flex bg-no-repeat justify-center bg-contain bg-center h-[80%] bg-[url("../../assets/Images/119.png")]'
            >
              {/* Search input and Button */}
              <SearchElement />
            </form>
          </section>
          {/* Second Section */}
          <section className='flex-1 hidden lg:flex justify-center items-center'>
            <CardDesktop />
          </section>
          {/* Third Section */}
          <section className='flex-1 hidden lg:flex flex-col my-5 '>
            <h1 className='text-2xl'>
              Next <span className='font-bold'>7 days</span>
            </h1>
            <ul className=' overflow-y-scroll'>
              <ContentContainer />
              <ContentContainer />
              <ContentContainer />
              <ContentContainer />
              <ContentContainer />
              <ContentContainer />
            </ul>
          </section>
        </section>
        {/* Last Section */}
        <section className=' z-2 h-2/6  bg-[#D9D9D9] rounded-t-[24px]'>
          <h1>
            Hour<span className='font-bold'>ly</span>
          </h1>
          <ul className='flex overflow-x-auto h-[70%] items-center'>
            <HourCard />
          </ul>
        </section>
      </div>
    </div>
  );
};

export default App;
