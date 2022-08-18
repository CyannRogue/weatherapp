import CloseButton from "../Buttons/CloseButton";
import CardMobile from "../Cards/CardMobile";
import ContentContainer from "../ContentContainer/ContentContainer";

const WeekWeather = () => {
  return (
    <section className='relative'>
      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box lg:flex flex-col my-5'>
          <CardMobile />
          {/* Modal body */}
          <h1 className='text-2xl mt-5'>
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

          {/* Modal body */}
          <div className='modal-action fixed'>
            <label for='my-modal' className='modal-button'>
              <CloseButton />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeekWeather;
