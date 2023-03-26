import React from "react";


function Hole7Page() {
  return (
    <div className="bg-gray-50">
      <main className="h-screen relative">
        <div className="lg:max-w-screen-2xl mx-auto">
          <div className="absolute bottom-0 left-0 z-10">
            <h1 className="text-3xl mx-4 pt-4 sm:pt-28 text-white drop-shadow-lg">Hole 7</h1>
            <div className="text-base mx-4 mb-2 pb-2 text-white drop-shadow">
              Par 4 - Reds:325 Blacks:325<br/>
             <br/>
              
            </div>
          </div>
        </div>
        <div className="">
        <video className="z-0 h-full w-full absolute top-0 left-0 object-cover" loop autoplay="" muted playsinline="" preload="auto">
            <source src="./video/Legends.mp4" type="video/mp4"/>
        </video>
        <div className="z-0 h-full w-full absolute top-0 left-0 bg-gray-900/25"></div>
        </div>
      </main>
      <section className="bg-gray-50 px-10 pt-12 lg:max-w-3xl mx-auto text-center text-xl">
        Hole 7 bends right around the 250 yard mark. A shot on the left of the fairway would give a clear shot to the green. Anything past this though is dangerous grounds and the formely known 6 pack! A slice off the tee box and over the road is considered OB so keep your balls to the left.
      </section>
    </div>
  );
}

export default Hole7Page;
