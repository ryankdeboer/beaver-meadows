import React from 'react'
import SubpageContact from "../components/SubpageContact";

function AboutPage() {
  return (
    <div className="bg-gray-50 dark:bg-[#0B0E0B]">
      <main>
          <div className="subpage-hero h-80 md:96 relative">
           
          </div>
      </main>
      <div className="-mt-28 md:px-6 py-1 lg:max-w-screen-2xl relative lg:grid grid-rows-1 grid-cols-3 mx-auto border-b border-zinc-200 dark:border-zinc-700">
        <section className="m-4 col-span-2 text-center sm:text-left ">
        <h1 className='uppercase text-white text-2xl tracking-wide font-normal pb-2'>About</h1>
          <div className="p-8 mb-8 bg-white dark:text-white dark:bg-zinc-900 rounded-sm drop-shadow dark:drop-shadow-gray">
            <p className="mb-5">
              Located on the northside of Parkersburg, IA Beaver Meadows Meadows Golf & Country Club was founded in 1956. Beaver Meadows is a member owned public golf course. 
              With 7 par 4s and 2 par 3s with the longest hole being hole 9 at 400 yards. Beaver is a great course for those looking for a challenge. Swing away and you may end up 
              under multiple trees forcing you to sacrafice some strokes.
            </p>
            <p className="mb-5">
              At the heart of the course you will find our clubhouse that has indoor seating, bar and an outdoor covered patio. While eating food and drinks your able to relax and watch golfers sink putts 
              on multiple holes.
            </p>
            <p className="mb-5">
              No cart? No problem! We have you covered with cart rentals. Feel free to call ahead and reserve a cart or check availability.
            </p>
          </div>
          
        </section>
        <section className="m-4 col-span-1 row-span-1">
          <SubpageContact/>
        </section>
      </div>
        
      
    </div>
  )
}

export default AboutPage