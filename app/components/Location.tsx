import React from 'react'

const Location = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h2 className="text-black text-opacity-80 font-semibold">Location</h2>
      <div className="w-full h-64 px-4 rounded-lg flex flex-col justify-center items-center gap-2">
        <iframe
          className="w-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15820.38193720526!2d110.81291645248656!3d-7.5645680791898355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a17dac308ebbf%3A0xa8c652329428591d!2sMasjid%20Raya%20Sheikh%20Zayed%20Solo%20Surakarta!5e0!3m2!1sid!2sid!4v1717705783672!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <i className="text-[10px] font-semibold text-center w-full text-black text-opacity-80">
          Lokasi 1 : Masjid Raya Syeikh Zayed Solo
        </i>
      </div>
      <div className="w-full h-64 px-4 rounded-lg flex flex-col justify-center items-center gap-2 mt-4">
        <iframe
          className="w-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.275518500141!2d110.772032275292!3d-7.5449033924686155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1468d4535f6b%3A0x5d96e2a389ec9cf8!2sThe%20Alana%20Solo!5e0!3m2!1sid!2sid!4v1717707557990!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <i className="text-[10px] font-semibold text-center w-full text-black text-opacity-80">
          Lokasi 2 : The Alana Hotel & Convention Center Solo
        </i>
      </div>
    </div>
  );
}

export default Location




