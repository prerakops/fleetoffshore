"use client";
export default function Company() {
    return (
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-2xl text-gradient">
            Our Trusted Brands
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 h-full w-full object-contain lg:col-span-1"
              src="/BRANDS-png/ABB.png"
              alt="ABB"
            />
            <img
              className="col-span-2 h-full w-full object-contain lg:col-span-1"
              src="/BRANDS-png/furuno.webp"
              alt="furuno"
            />
            <img
              className="col-span-2 h-full w-full object-contain lg:col-span-1"
              src="/BRANDS-png/gravinear.png"
              alt="gravinear"
            />
            <img
              className="col-span-2 h-full w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/BRANDS-png/JRC.png"
              alt="JRC"
            />
            <img
              className="col-span-2 col-start-2 h-full w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/BRANDS-png/kongsberg_logo.png"
              alt="kongsberg"
            />
            <img
              className="col-span-2 h-full w-full object-contain lg:col-span-1"
              src="/BRANDS-png/Liebherr-Logo-New.png"
              alt="Liebherr"
            />
            <img
              className="col-span-2 h-full w-full object-contain lg:col-span-1"
              src="/BRANDS-png/MAN.webp"
              alt="MAN"
            />
            <img
              className="col-span-2 h-full w-full object-contain lg:col-span-1"
              src="/BRANDS-png/rolls_royce_marine.jpg"
              alt="Rolls Royce Marine"
            />
            <img
              className="col-span-2 h-full w-full object-contain sm:col-start-2 lg:col-span-1 rounded-lg"
              src="/BRANDS-png/wartsila_01.png"
              alt="wartsila"
            />
            <img
              className="col-span-2 h-full w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/BRANDS-png/macgregor.png"
              alt="macgregor"
            />
          </div>
        </div>
        <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #1e3a8a, #1e90ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
      </div>
    )
  }
  