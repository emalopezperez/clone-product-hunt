import React, { useState } from 'react';
import BasicModal from "@/components/modals/Modals"
import useValidation from "@/hooks/UseValidation"
import validarCrearCuenta from '@/validation/validationRegisterUser';
import Error from '@/components/errors/Error';

const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}

const RegisterUsers = () => {
  const [error, guardarError] = useState(false);

  const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidation(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { nombre, email, password } = valores;

  function crearCuenta() {
    console.log(valores)
  }
  return (
    <BasicModal>
      <div className='flex justify-center mt-8 md:mt-4'>
        <div className="h-[600px] w-[190px] md:h-[300px] md:w-[350px] rounded-xl text-white">
          <div className="mx-auto ">
            <h1 className="text-xl md:text-3xl text-[#21293c] font-bold">Registrarse</h1>
            <form
              className="flex flex-col w-full py-4 text-black"
              onSubmit={ handleSubmit }
              noValidate
            >
              <label className="text-sm font-bold md:text-md" htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Escribe tu nombre"
                name="nombre"
                className={ errores.nombre ? " p-1 my-2 rounded-md rounded-bl-none outline-none md:p-3 border border-b-red-700" : "p-1 my-2 rounded-md rounded-bl-none outline-none md:p-3 " }
                autoComplete="nombre"
                value={ nombre }
                onChange={ handleChange }
                onBlur={ handleBlur }
              />
              { errores.nombre && <Error>  { errores.nombre }</Error> }
              <label className="text-sm font-bold md:text-md" htmlFor="email">email</label>
              <input
                value={ email }
                type="email"
                id="email"
                placeholder="Escribe tu email"
                name="email"
                className={ errores.email ? " p-1 my-2 rounded-md rounded-bl-none outline-none md:p-3 border border-b-red-700" : "p-1 my-2 rounded-md rounded-bl-none outline-none md:p-3 " }
                autoComplete="email"
                onChange={ handleChange }
                onBlur={ handleBlur }
              />
              { errores.email && <Error>  { errores.email }</Error> }
              <label className="text-sm font-bold md:text-md" htmlFor="Password">Password</label>
              <input
                value={ password }
                type="password"
                id="password"
                placeholder="Escribe tu password"
                name="password"
                className={ errores.password ? " p-1 my-2 rounded-md rounded-bl-none outline-none md:p-3 border border-b-red-700" : "p-1 my-2 rounded-md rounded-bl-none outline-none md:p-3 " }
                autoComplete="password"
                onChange={ handleChange }
                onBlur={ handleBlur }
              />

              { errores.password && <Error>  { errores.password }</Error> }
              <button
                type="submit"
                className="bg-[#ff6154] text-white py-2 md:py-3 my-4 md:my-6 rounded font-bold"
              >
                Registrarse
              </button>
              <p className="mt-3 mb-2 md:mt-6 ">
                <span className="text-gray-600">Already subscribed?</span>{ " " }
                <button className="text-[#ff6154] ">
                  Iniciar sesion
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </BasicModal>
  )
}

export default RegisterUsers