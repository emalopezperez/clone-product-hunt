import { useState } from 'react';
import { HiUser } from 'react-icons/hi';

const AccountAuth = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      <div
        className="cursor-pointer flex gap-4 items-center focus:outline-none bg-gray-300 p-2 rounded-3xl"
        onMouseEnter={ toggleMenu }
      >
        <HiUser className="hover:scale-110" size={21} />
      </div>

      { showMenu && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-40"
          onClick={ toggleMenu }
        ></div>
      ) }

      { showMenu && (
        <div className="absolute top-6 right-0 bg-white shadow-md rounded-md py-2 z-50 w-64 mx-aut flex flex-col p-2">
          <button
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={ toggleMenu }
          >
            Opción 1
          </button>
          <button
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={ toggleMenu }
          >
            Opción 2
          </button>
          <button
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={ toggleMenu }
          >
            Opción 3
          </button>
          <button className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-black hover:text-white rounded-sm">Cerrar Sesión</button>
        </div>
      ) }
    </div>
  );
};

export default AccountAuth;