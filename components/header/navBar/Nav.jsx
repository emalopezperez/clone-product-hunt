import Link from "next/link"

const Nav = () => {
  return (
      <nav className='conteiner mx-auto flex gap-4 text-gray-500 font-medium font-xl'>
        <Link href="/">Inicio</Link>
        <Link href="/">Populares</Link>
        <Link href="/">Nuevo producto</Link>
      </nav>
  )
}

export default Nav