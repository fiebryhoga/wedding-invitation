/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Quote = () => {
  return (
    <div className="px-6 py-8 flex flex-col gap-6">
      <div className="px-16">
        <img className="w-full" src="/assets/images/basmallah.png" alt="" />
      </div>
      <i className='px-6 text-[10px] leading-4 font-serif text-center text-black text-opacity-60'>
        Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
        pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa
        tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih 
        sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
        tanda-tanda (kebesaran Allah) bagi kaum yang berpikir  <br />(QS. Ar-Rum Ayat 21)
      </i>
    </div>
  );
}

export default Quote
