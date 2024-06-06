/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const BoxEvent = () => {
  return (
    <>
      <div className="px-4 flex flex-row gap-2">
        <div className="w-[25%] h-40 bg-black rounded-md">
          <img
            className="h-full w-full object-cover rounded-md"
            src="/assets/images/moments/moment1.jpg"
            alt=""
          />
        </div>
        <div className="w-[50%] h-40 flex flex-col gap-1 justify-start items-center">
          <div className=" w-full h-24 bg-black rounded-md">
            <img
              className="h-full w-full object-cover rounded-md"
              src="/assets/images/masjid.jpg"
              alt=""
            />
          </div>
          <i className="text-[8px] font-serif">Masjid Raya Ar-Rahman Solo</i>

          <Link
            href="https://google.com"
            className=" bg-gray-100 mt-4 shadow-md px-8 py-1 text-[9px] tracking-wide flex flex-row justify-center items-center rounded-full"
          >
            Direction
          </Link>
        </div>

        <div className="w-[25%] h-40 bg-black rounded-md">
          <img
            className="h-full w-full object-cover rounded-md"
            src="/assets/images/moments/moment4.jpg"
            alt=""
          />
        </div>
      </div>
      <div className=' mt-8 flex flex-row gap-4 px-4'>
        <div className=' flex flex-col gap-2 py-2 justify-center items-center h-24 w-[50%] bg-gray-200 rounded-md shadow-lg'>
            <h1 className='text-sm font-semibold tracking-wider text-opacity-70 text-black'>Akad Nikah</h1>
            <p className='text-[12px] font-medium text-gray-900'>Selasa, 23 September 2024</p>
            <p className='text-[12px] font-medium text-gray-900'>08:00 WIB</p>

        </div>
        <div className=' flex flex-col gap-2 py-2 justify-center items-center h-24 w-[50%] bg-gray-200 rounded-md shadow-lg'>
            <h1 className='text-sm font-semibold tracking-wider text-opacity-70 text-black'>Resepsi</h1>
            <p className='text-[12px] font-medium text-gray-900'>Selasa, 23 September 2024</p>
            <p className='text-[12px] font-medium text-gray-900'>10:00 WIB</p>

        </div>

      </div>
    </>
  );
}

export default BoxEvent
