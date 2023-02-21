import Link from "next/link"

const Nav = () => {
  return (
    <nav className='mx-0 lg:mx-auto flex lg:flex-row flex-col gap-3 lg:gap-6 text-gray-500 font-medium font-xl'>
      <Link className="hover:text-orange-600" href="/">Inicio</Link>
      <Link className="hover:text-orange-600" href="/populares">Populares</Link>
      <Link className="hover:text-orange-600" href="/nuevo_producto">Nuevo producto</Link>
    </nav>
  )
}

export default Nav