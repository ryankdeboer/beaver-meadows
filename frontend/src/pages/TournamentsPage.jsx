import React from 'react'
import Tournaments from "../components/Tournaments";
import SubpageContact from "../components/SubpageContact";

function TournamentsPage() {
  return (
    <div className="bg-gray-50 dark:bg-[#0B0E0B]">
      <main>
          <div className="subpage-hero h-96 md:96 relative">
            
          </div>
      </main>
      <div className="-mt-28 md:px-6 py-1 lg:max-w-screen-2xl relative lg:grid grid-rows-1 grid-cols-3 mx-auto">
          <section className="m-4 col-span-2 text-center sm:text-left ">
          <h1 className='uppercase text-white text-2xl tracking-wide font-normal pb-2'>'24 Tournaments</h1>
            <div className="p-8 mb-8 bg-white dark:bg-zinc-900 rounded-sm drop-shadow">
            <Tournaments />
            <a className="mt-5 inline-block dark:text-white" href="/files/2024-Tournament-Schedule.pdf" target="_blank">2024 Tournaments Download</a>
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