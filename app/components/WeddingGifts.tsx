import React from 'react'
import Link from 'next/link'

const WeddingGifts = () => {
  return (
    <div className="px-8 flex flex-col gap-4 justify-center items-center w-full">
      <h1 className="text-black text-opacity-80 font-semibold">
        Wedding Gifts
      </h1>
      <i className="text-[11px] text-black text-opacity-80 px-10 text-center font-serif">
        Doa restu anda merupakan karunia kami dan dalam kesempatan bahagia kami,
        Anda dapat memberi hadiah secara online melalui tautan ini
      </i>
      <Link
        href="https://artrayd.com/gift/"
        className="py-2 px-8 text-xs text-white bg-black bg-opacity-80 shadow-md hover:bg-white hover:border hover:border-black hover:border-opacity-60 rounded-full hover:text-black hover:text-opacity-80 transition-all duration-300 ease-in-out tracking-wide font-medium"
      >
        Gift
      </Link>
    </div>
  );
}

export default WeddingGifts
