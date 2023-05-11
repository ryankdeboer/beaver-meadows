import React from "react";
import ReactPlayer from 'react-player'

function Hole1Page() {
  //   const video = document.getElementById('myVideo');
  // video.load();
  // video.addEventListener('loadeddata', function() {
  //   console.log("Loadded")
  // }, false);
  return (
    <div className="bg-black">
      <main className="h-screen relative">
        <div className="lg:max-w-screen-2xl mx-auto">
          <div className="absolute bottom-0 left-0 z-10">
            <h1 className="text-3xl mx-4 pt-4 sm:pt-28 text-white drop-shadow-lg">
              Hole 1
            </h1>
            <div className="text-base mx-4 mb-2 pb-2 text-white drop-shadow">
              Par 4 - Reds:317 Blacks:370
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="h-full w-full absolute top-0 left-0 object-cover">
          {/* <video id="myVideo" className="z-0 h-full w-full absolute top-0 left-0 object-cover" loop autoplay="" muted playsinline="" preload="auto">
            <source src="https://www.dropbox.com/s/ey74h69zsmgoy7z/Windmills-IG.mp4?dl=0" type="video/mp4"/>
        </video> */}
        <ReactPlayer 
          url='https://player.vimeo.com/video/809725408?h=61129dbd32' 
          muted={true}
          playing={true}
          height="100%"
          width="100%"
          loop={true}
          className="react-player"
        />
          {/* <div style="padding:56.25% 0 0 0;position:relative;">
            <iframe
              src="https://player.vimeo.com/video/809725408?h=61129dbd32&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
              title="Legends-2-11-23"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script> */}
          <div className="z-0 h-full w-full absolute top-0 left-0 bg-gray-900/25"></div>
        </div>
      </main>
      <section className="bg-gray-50 dark:bg-zinc-800 dark:text-white px-10 p-12 border-b border-zinc-200 dark:border-zinc-700">
        <div className="lg:max-w-3xl mx-auto text-center text-xl ">
          Hole 1 offers 370 yards that should be aimed at the left of the
          fareway. With a tree in the middle of the fairway, fields to the left,
          and trees on the right, don't overlook this hole. A shot on the left
          side will give a clear shot the the green.
        </div>
      </section>
    </div>
  );
}

export default Hole1Page;
