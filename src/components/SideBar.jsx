// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { RxLapTimer } from "react-icons/rx";

const SideBar = () => {
  const [Open, SetOpen]= useState(true)
  return (
    <div
      className={`bg-blue-200 p-2 h-screen fixed ${
        Open ? "w-40":"w-20"} duration-700 shadow-2xl `}
    >
      <div className="relative mt-5">
        <FaArrowLeft
          className={`absolute  ${!Open && "rotate-180"}
            -right-2 rounded-full bg-white text-2xl p-1 duration-300 cursor-pointer absolute`}
          onClick={() => SetOpen(!Open)}
        />
      </div>
      <div className='flex items-center gap-2'>
        <h1
          className={` text-sm text-nowrap font-pop cursor-pointer   font-bold flex justify-center ${
            !Open && "hidden"
          } -mt-2`}
        >
          Time picker
        </h1>
        <RxLapTimer className={`text-2xl ${!Open && "mx-4"}`}/>
      </div>
    </div>
  );
}

export default SideBar
