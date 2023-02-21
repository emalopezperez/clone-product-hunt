import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

const BasicModal = ({ sowModal, setSowModal, children }) => {
  const [modal, setModal] = useState(true)

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {
        modal && <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/80 z-50">
          <div className="flex ml-2 md:ml-56 mt-10">
            <div
              onClick={ handleModal }
              className="p-3 bg-white rounded-full shadow-lg cursor-pointer shadow-gray-700">
              <Link href='/'>
                <AiOutlineClose />
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="bg-white/90 h-[470px] w-[250px] md:h-[550px] md:w-[650px] rounded-xl">
              <div className="flex justify-center items-center">
                { children }
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default BasicModal;