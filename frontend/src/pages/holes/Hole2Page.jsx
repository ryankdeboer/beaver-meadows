import React from "react";


function Hole2Page() {
  return (
    <div className="bg-gray-50">
      <main className="h-screen relative">
        <div className="lg:max-w-screen-2xl mx-auto">
          <div className="absolute bottom-0 left-0 z-10">
            <h1 className="text-3xl mx-4 pt-4 sm:pt-28 text-white drop-shadow-lg">Hole 2</h1>
            <div className="text-base mx-4 mb-2 pb-2 text-white drop-shadow">
              Par 4 - Reds:314 Blacks:329<br/>
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
        Hole 2 is a dog leg left which gives players a few options off the tee. Nice and easy down the middle or swing away to go over the trees aiming for the green. Beware though, anyting in the trees on the left is OB.
      </section>
    </div>
  );
}

export default Hole2Page;
