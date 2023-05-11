import React from 'react'
import Events from "../components/Events";
import SubpageContact from "../components/SubpageContact";

function EventsPage() {
  return (
    <div className="bg-gray-50 dark:bg-[#0B0E0B]">
      <main>
          <div className="subpage-hero h-96 md:96 relative">
          
          </div>
      </main>
      <div className="-mt-28 md:px-6 py-1 lg:max-w-screen-2xl relative lg:grid grid-rows-1 grid-cols-3 mx-auto">
        <section className="m-4 col-span-2 text-center sm:text-left ">
          <h1 className='uppercase text-white text-2xl tracking-wide font-normal pb-2'>Events</h1>
          <div className="p-8 mb-8 bg-white dark:bg-zinc-900 rounded-sm drop-shadow dark:text-white">
            The clubhouse is available to rent for your special occasion. Please call the clubhouse to check availability and pricing at <a href="tel:3193461870">319-346-1870.</a>
            <div className="mb-10"></div>

            <h2 class="pb-4 text-xl font-normal leading-6 text-black dark:text-white sm:text-2xl border-b border-zinc-200 dark:border-zinc-800">2023 Upcoming Events</h2>
            <Events />
          </div>
          
        </section>
        <section className="m-4 col-span-1 row-span-1">
          <SubpageContact/>
        </section>
      </div>
    </div>
    
  )
}

export default EventsPage