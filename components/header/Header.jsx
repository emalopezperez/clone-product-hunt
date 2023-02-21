import { useState } from "react"
import Nav from "./navBar/Nav"
import Icon from "./icon/Icon"
import Searcher from "./searcher/Searcher"
import Account from "./account/Account"
import AccountAuth from "./account/AccountAuth"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [userAuth, setUserAuth] = useState(false)
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className='bg-[#ffffff]  z-10 left-0 right-0 border border-gray-200'>
      <div className='container mx-auto hidden lg:flex w-[1280px] py-5 justify-between '>
        <div className=" flex gap-10 items-center ">
          <Icon />
          <Searcher />
          <Nav />
        </div>

        <div className=" flex items-center ">
          {
            userAuth ? <AccountAuth /> : <Account />
          }
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-[#01070c]"
            : ""
        }>
        {/* Side Drawer Menu */ }

        {/* Menu mobile */ }
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }>

          <div className="flex flex-col gap-12">
            <div className="flex justify-between w-full">
              <Icon />
              <div
                onClick={ handleNav }
                className="p-3 bg-white rounded-full shadow-lg cursor-pointer shadow-gray-700">
                <AiOutlineClose />
              </div>
            </div>

            <Nav />
            <div className="flex justify-center">
              {
                userAuth ? <AccountAuth /> : <Account />
              }
            </div>
          </div>
        </div>
      </div>


      {/* Vista mobile */ }

      <div className="flex justify-between text-black aling-center lg:hidden sm:flex-nowrap m-5">
        <Icon />
        <Searcher />
        <button
          id="title-color-boton"
          onClick={ handleNav }
          className="cursor-pointer md:hidden ">
          <AiOutlineMenu size={ 20 } />
        </button>
      </div>
    </header>
  )
}

export default Header