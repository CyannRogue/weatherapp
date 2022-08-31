import React from "react";
// import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const SearchElement = () => {
  const [value, setValue] = useState(null);
  return (
    <div className='form-control mt-6'>
      {/* <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: setValue,
        }}
      /> */}
      <div className='input-group '>
        <input
          type='text'
          placeholder='Search City...'
          className='input input-bordered opacity-50 hover:opacity-100'
          ref={inputRef}
        />

        <button className='btn btn-square  bg-[#4C4C4C] border-[#4C4C4C]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchElement;
