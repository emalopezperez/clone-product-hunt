import BasicModal from "@/components/modals/Modals"

const LoginUsers = () => {
  return (
    <BasicModal>
      <div className='flex justify-center mt-10 md:mt-4'>
        <div className="h-[600px] w-[190px] md:h-[200px] md:w-[350px] rounded-xl text-white">
          <div className="mx-auto ">
            <h1 className="text-xl md:text-3xl text-[#21293c] font-bold">Iniciar Sesion</h1>
            <form
              className="flex flex-col w-full py-4 text-black"
            >
              <label className="text-sm font-bold md:text-md" htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Escribe tu nombre"
                name="nombre"
                className="p-1 my-2 rounded-md rounded-bl-none outline-none md:p-3"
                autoComplete="nombre"
              />

              <label className="text-sm font-bold md:text-md" htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                placeholder="Escribe tu email"
                name="email"
                className="p-1 my-2 rounded-md rounded-bl-none outline-none md:p-3"
                autoComplete="email"
              />
              <label className="text-sm font-bold md:text-md" htmlFor="Password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Escribe tu password"
                name="password"
                className="p-1 my-2 rounded-md rounded-bl-none outline-none md:p-3"
                autoComplete="password"
              />
              <button
                type="submit"
                className="bg-[#ff6154] text-white py-2 md:py-3 my-4 md:my-6 rounded font-bold"
              >
                Registrarse
              </button>
              <p className="mt-3 mb-2 md:mt-6 ">
                <span className="text-gray-600">Already subscribed?</span>{ " " }
                <button className="text-[#ff6154] ">
                  Registrarse
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </BasicModal>
  )
}

export default LoginUsers