import React from 'react'
import Tournaments from "../components/Tournaments";
import SubpageContact from "../components/SubpageContact";

function TournamentsPage() {
  return (
    <div className="bg-gray-50 dark:bg-[#0B0E0B]">
      <main>
          <div className="subpage-hero h-80 md:96 relative">
            
          </div>
      </main>
      <div className="-mt-28 md:px-6 py-1 lg:max-w-screen-2xl relative lg:grid grid-rows-1 grid-cols-3 mx-auto border-b border-zinc-200 dark:border-zinc-700">
          <section className="m-4 col-span-2 text-center sm:text-left ">
          <h1 className='uppercase text-white text-2xl tracking-wide font-normal pb-2'>'23 Tournaments</h1>
            <div className="p-8 mb-8 bg-white dark:bg-zinc-900 rounded-sm drop-shadow">
            <Tournaments />
            <a className="mt-5 inline-block dark:text-white" href="/files/2023-Tournament-Schedule.pdf" target="_blank">Tournaments Download</a>
            </div>
          </section>
          <section className="m-4 col-span-1 row-span-1">
            <SubpageContact/>
          </section>
        </div>
    </div>
    
  )
}

export default TournamentsPage