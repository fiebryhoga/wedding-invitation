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
        <div className="w-[50%] h-40 flex flex-col gap-3 justify-between items-center">
          <div className=" w-full h-[80%] bg-black rounded-md">
            <img
              className="h-full w-full object-cover rounded-md"
              src="/assets/images/masjid.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-0 justify-center items-center">
            <i className="text-[8px] font-serif">Akad Nikah</i>
            <i className="text-[8px] font-serif">
              Masjid Raya Syeikh Zayed Solo
            </i>
          </div>

          {/* <Link
            href="https://google.com"
            className=" bg-gray-100 mt-4 shadow-md px-8 py-1 text-[9px] tracking-wide flex flex-row justify-center items-center rounded-full"
          >
            Direction
          </Link> */}
        </div>

        <div className="w-[25%] h-40 bg-black rounded-md">
          <img
            className="h-full w-full object-cover rounded-md"
            src="/assets/images/moments/moment4.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default BoxEvent
