const Switches = () => {
  return (
    <ul className='flex text-xs lg:max-w-lg justify-center lg:justify-start font-semibold p-5 duration-500'>
      <li className='mx-5'>
        <button className=' no-underline hover:underline focus:underline ease-in-out '>
          Yesterday
        </button>
      </li>
      <li className='mx-5'>
        <button className=' no-underline hover:underline focus:underline ease-in-out '>
          Today
        </button>
      </li>
      <li className='mx-5'>
        <button className='no-underline hover:underline focus:underline ease-in-out '>
          Tomorrow
        </button>
      </li>
      <li className='mx-5'>
        <button className='lg:hidden flex  w-20 items-center justify-between  no-underline hover:underline focus:underline ease-in-out '>
          <label for='my-modal' className='modal-button'>
            Next 7 days
          </label>
        </button>
      </li>
    </ul>
  );
};

export default Switches;
