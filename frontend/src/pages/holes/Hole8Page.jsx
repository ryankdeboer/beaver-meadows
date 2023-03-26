import React from "react";


function Hole8Page() {
  return (
    <div className="bg-gray-50">
      <main className="h-screen relative">
        <div className="lg:max-w-screen-2xl mx-auto">
          <div className="absolute bottom-0 left-0 z-10">
            <h1 className="text-3xl mx-4 pt-4 sm:pt-28 text-white drop-shadow-lg">Hole 8</h1>
            <div className="text-base mx-4 mb-2 pb-2 text-white drop-shadow">
              Par 3 - Reds:159 Blacks:159<br/>
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
        Hole 8 is the second par 3. Straight as can be with OB to the right. Depending on the flag stick your either on top or below the green so be sure to check where the pin is at.
      </section>
    </div>
  );
}

export default Hole8Page;
