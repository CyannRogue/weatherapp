const SearchElement = ({ onChange, onSearch, value, city, isActivated }) => {
  return (
    <div className='form-control mt-6 drop-shadow-md'>
      <div className='input-group '>
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='Search City...'
          className='input input-bordered opacity-50 hover:opacity-100'
        />

        <button
          onClick={() => onSearch(value)}
          className='btn btn-square  bg-[#4C4C4C] border-[#4C4C4C]'
        >
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

      <ul
        tabindex='0'
        className={`drop-shadow-md dropdown-content menu p-2 shadow bg-base-100 rounded-box max-w-[280px] max-h-52 overflow-auto ${
          isActivated ? "block" : "hidden"
        }`}
      >
        {city &&
          city.slice(0, 10).map((item, index) => (
            <li key={item.id}>
              <a
                onClick={() => onSearch(item.name)}
              >{`${item.name}, ${item.region}`}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchElement;
