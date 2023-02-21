import Nav from "./navBar/Nav"
import Searcher from "./searcher/Searcher"

const Header = () => {
  return (
    <header className='bg-[#ffffff] fixed z-10 left-0 right-0'>
      <div className='conteiner mx-auto flex w-[1280px] py-4'>
        <div className=" flex gap-3">
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#FF6154"></path><path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14" fill="#FFF"></path></g></svg>

          <Searcher />
        </div>

        <Nav />
        <div>
          cuenta
        </div>
      </div>
    </header>
  )
}

export default Header