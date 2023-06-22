import React from 'react'
import Features from "../components/Features";
import Tournaments from "../components/Tournaments";
import Events from "../components/Events";
import MensLeague from "../components/MensLeague";
import WomensLeague from "../components/WomensLeague";

//bg-[#010f01]
export default function HomePage() {
    return (
    <div className="">
        <div className="isolate bg-[#0B0E0B]">
            <main>
                <div className="hero h-80 sm:h-screen relative border-b border-zinc-800">
                {/* <div className="hidden dark:block z-0 h-full w-full absolute top-0 left-0 bg-gray-900/25"></div> */}
                    <div className="relative px-6 lg:px-8 flex items-center h-80 sm:h-screen">
                        <div className="mx-auto">
                            <div className="sm:mb-8 sm:flex sm:justify-center">
                                <div className="flex text-center">
                                    {/* <h1 className="text-2xl font-bold tracking-normal text-white sm:text-6xl uppercase drop-shadow-lg"></h1> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <section className="md:px-6 py-1 -mt-20 sm:-mt-80 text-center lg:grid grid-cols-3 grid-rows-1 md:text-left lg:max-w-screen-2xl mx-auto">
                <div className="relative m-4 col-span-2 row-span-1">
                    <div className="">

                        <h3 className='uppercase text-white text-2xl tracking-wide font-normal pb-2'>Contact</h3>
                            <div className="p-8 mb-8 sm:grid sm:grid-cols-2 bg-white dark:bg-zinc-900 rounded-sm drop-shadow ">
                                <div className="mb-4 pb-4 sm:mb-0 sm:pb-0 border-b border-zinc-200 dark:border-zinc-800 sm:border-none">
                                    <h4 className="mb-2 text-base font-medium leading-6 text-black dark:text-white">Club House</h4>
                                    <div className='text-sm text-gray-700 dark:text-white'> 
                                        <ul>
                                            <li>
                                            Hours are seasonal
                                            </li>
                                            <li>
                                            Mon - Tues: 3pm to Close
                                            </li> 
                                            <li>
                                            Wed - Fri: 1pm to Close
                                            </li>
                                            <li>
                                            Sat - Sun: 9am to Close
                                            </li>
                                            <br/>
                                        </ul>
                                    </div>
                                </div>
                                <div className="">
                                <h4 className="mb-2 font-medium leading-6 text-black dark:text-white">Address</h4>
                                    <div className='text-sm text-gray-700 dark:text-white'> 
                                    <p><a href="https://www.google.com/maps/dir//Beaver+Meadows+Golf+and+Country+Club+32078+HIGHWAY+14+Parkersburg,+IA+50665/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x87f021ee328888d3:0x5dd7a4a163042361?sa=X&ved=2ahUKEwirh9jW_OX9AhVIlGoFHfLmAXEQ9Rd6BAhEEAQ" target="_blank" rel="noreferrer">Beaver Meadows Golf & Country Club<br/>
                                    32078 HIGHWAY 14<br/>
                                    Parkersburg, IA 50665</a>
                                    </p>
                                    
                                    </div>
                                
                                    <a className="text-sm dark:text-white" href="tel:3193461870">Ph: 319-346-1870</a>
                                            
                                </div>
                            </div>

                        <h3 className='uppercase text-white text-2xl tracking-wide font-normal pb-2'>Men's League</h3>
                            <div className="p-8 mb-8 bg-white dark:bg-zinc-900 rounded-sm drop-shadow">
                                <MensLeague />
                            </div>
                        <h3 className='uppercase text-white text-2xl tracking-wide font-normal pb-2'>Women's League</h3>
                            <div className="p-8 mb-8 bg-white dark:bg-zinc-900 rounded-sm drop-shadow">
                                <WomensLeague />
                            </div>

                        
                    </div>
                </div>
                <div className="col-span-1 relative m-4">
                    <h3 className='uppercase text-white text-2xl tracking-wide font-normal pb-2'>Tournaments</h3>
                        <div className="p-8 mb-8 bg-white dark:bg-zinc-900 rounded-sm drop-shadow">
                            <Tournaments />
                        </div>
                    <h3 className='uppercase text-white text-2xl tracking-wide font-normal pb-2'>Upcoming Events</h3>
                        <div className="p-8 mb-8 bg-white dark:bg-zinc-900 rounded-sm drop-shadow">
                            <Events />
                        </div>
                    
                    
                </div>
            </section>
        </div>
        <Features />
    </div>
    
  )
}
