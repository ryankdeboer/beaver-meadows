import React from "react";
import SubpageContact from "../components/SubpageContact";

function WomensLeaguePage() {
  return (
    <div className="bg-gray-50 dark:bg-[#0B0E0B]">
      <main>
        <div className="subpage-hero h-96 md:96 relative">
        
        </div>
      </main>
      <div className="-mt-28 md:px-6 py-1 lg:max-w-screen-2xl relative lg:grid grid-rows-1 grid-cols-3 mx-auto ">
        <section className="m-4 col-span-2 text-center sm:text-left ">
          <h1 className="uppercase text-white text-2xl tracking-wide font-normal pb-2">
            Women's League
          </h1>
          <div className="p-8 mb-8 bg-white dark:bg-zinc-900 rounded-sm drop-shadow">
          <h2 className="uppercase text-white text-xl tracking-wide font-normal pb-2">
          Check back for standings
                      </h2>


            
          </div>
        </section>
        <section className="m-4 col-span-1 row-span-1">
          <SubpageContact />
        </section>
      </div>
    </div>
  );
}

export default WomensLeaguePage;
