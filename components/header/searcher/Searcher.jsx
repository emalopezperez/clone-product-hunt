import { FaSearch } from 'react-icons/fa';

const Searcher = () => {
  return (
    <form action="" className="flex border border-gray-200 rounded-md py-2 px-2 w-[180px] md:w-[250px] justify-end">
      <input
        type="text"
        placeholder="Buscar"
        className="bg-transparent outline-none hidden"
      />
      <button type="submit" className="bg-white rounded-full p-2 ">
        <FaSearch className='text-gray-400' />
      </button>
    </form>
  );
};

export default Searcher;