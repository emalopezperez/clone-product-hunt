import Link from "next/link"

const Account = () => {
  return (
    <div className="flex gap-4 items-center">
      <Link href='/auth/login'>
        <button className="text-gray-400">Iniciar Sesion</button>
      </Link>

      <Link href='/auth/register'>
        <button className="bg-[#ff6154] text-white p-2 rounded-md hover:bg-[#ef4a3b]  ">Registrarse</button>
      </Link>
    </div>
  )
}

export default Account;