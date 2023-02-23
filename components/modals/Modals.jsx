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
        modal && <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black/80">
          <div className="flex mt-10 ml-2 md:ml-56">
            <div
              onClick={ handleModal }
              className="p-3 bg-white rounded-full shadow-lg cursor-pointer shadow-gray-700">
              <Link href='/'>
                <AiOutlineClose />
              </Link>
            </div>
          </div>
          <div className="flex justify-center h-full mt-12">
            <div className="bg-white/95 h-[470px] w-[250px] md:h-[480px] md:w-[430px] rounded-xl">
              <div className="flex items-center justify-center">
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