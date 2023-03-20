import React from 'react'
import Features from "../components/Features";
import Tournaments from "../components/Tournaments";
import Events from "../components/Events";


export default function HomePage() {
    return (
    <div className="">
        <div className="isolate bg-[#010f01]">
            <main>
                <div className="hero h-80 sm:h-screen relative">
                    <div className="relative px-6 lg:px-8 flex items-center h-80 sm:h-screen">
                        <div className="mx-auto">
                            <div className="sm:mb-8 sm:flex sm:justify-center">
                                <div className="flex text-center">
                                    <h1 className="text-2xl font-bold tracking-normal text-white sm:text-6xl uppercase drop-shadow-lg"></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <section className="md:px-6 py-1 -mt-20 sm:-mt-72 text-center lg:grid grid-cols-3 grid-rows-1 md:text-left lg:max-w-screen-2xl mx-auto">
                
                <div className="relative m-4 col-span-2 row-span-1">
                    <div className="">
                        <h3 className='uppercase text-white text-2xl tracking-wide font-normal pb-2'>Contact</h3>
                        <div className="p-8 mb-8 sm:grid sm:grid-cols-2 bg-white rounded-sm drop-shadow ">
                            <div className="mb-4 pb-4 sm:mb-0 sm:pb-0 border-b sm:border-none">
                                <h4 className="mb-2 text-base font-medium leading-6 text-black ">Club House</h4>
                                <div className='pb-5 text-sm text-gray-700'> 
                                    <ul>
                                        <li>
                                        Hours are seasonal
                                        </li> 
                                        <li>
                                        <a href="tel:3193461870">Ph: 319-346-1870</a>
                                        </li>    
                                    </ul>
                                
                                </div>
                            </div>
                            <div className="">
                            <h4 className="mb-2 text-base font-medium leading-6 text-black">Address</h4>
                                <div className='pb-5 text-sm text-gray-700'> 
                                <p><a href="https://www.google.com/maps/dir//Beaver+Meadows+Golf+and+Country+Club+32078+HIGHWAY+14+Parkersburg,+IA+50665/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x87f021ee328888d3:0x5dd7a4a163042361?sa=X&ved=2ahUKEwirh9jW_OX9AhVIlGoFHfLmAXEQ9Rd6BAhEEAQ" target="_blank" rel="noreferrer">Beaver Meadows Golf & Country Club<br/>
                                32078 HIGHWAY 14<br/>
                                Parkersburg, IA 50665</a>
                                </p>
                                
                                </div>
                            </div>
                        </div>
                        <h3 className='uppercase text-white text-2xl tracking-wide font-normal pb-2'>Upcoming Events</h3>
                        <div className="p-8 mb-8 bg-white rounded-sm drop-shadow">
                            <Events />
                        </div>
                            
                        


                        {/* <h3 className='uppercase text-white text-2xl tracking-wide font-normal pb-2'>League</h3>
                            <div className="p-8 mb-8 bg-white rounded-sm drop-shadow ">
                                <div className="">
                                    <h4 className="mb-2 text-base font-medium leading-6 text-black ">Men's League</h4>
                                    <div class="mb-12 flex flex-col">
                                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                            <div class="overflow-hidden">
                                            <table class="min-w-full text-left text-sm font-light">
                                                <thead class="border-b font-medium dark:border-neutral-500">
                                                <tr>
                                                    <th scope="col" class="px-6 py-4">Pos</th>
                                                    <th scope="col" class="px-6 py-4">Team Name</th>
                                                    <th scope="col" class="px-6 py-4">Points</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr class="border-b dark:border-neutral-500">
                                                    <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                                    <td class="whitespace-nowrap px-6 py-4">Maddogs</td>
                                                    <td class="whitespace-nowrap px-6 py-4">250</td>
                                                </tr>
                                                <tr class="border-b dark:border-neutral-500">
                                                    <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                                    <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                                                    <td class="whitespace-nowrap px-6 py-4">250</td>
                                                </tr>
                                                <tr class="border-b dark:border-neutral-500">
                                                    <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                                    <td class="whitespace-nowrap px-6 py-4">Larry</td>
                                                    <td class="whitespace-nowrap px-6 py-4">250</td>
                                                </tr>
                                                <tr class="border-b dark:border-neutral-500">
                                                    <td class="whitespace-nowrap px-6 py-4 font-medium">4</td>
                                                    <td class="whitespace-nowrap px-6 py-4">Larry</td>
                                                    <td class="whitespace-nowrap px-6 py-4">250</td>
                                                </tr>
                                                <tr class="border-b dark:border-neutral-500">
                                                    <td class="whitespace-nowrap px-6 py-4 font-medium">5</td>
                                                    <td class="whitespace-nowrap px-6 py-4">Larry</td>
                                                    <td class="whitespace-nowrap px-6 py-4">250</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div> */}
                        
                        
                    </div>
                </div>
                <div className="col-span-1 relative m-4">
                    <h3 className='uppercase text-white text-2xl tracking-wide font-normal pb-2'>Tournaments</h3>
                    <div className="p-8 mb-8 bg-white rounded-sm drop-shadow">
                        <Tournaments />
                    </div>
                </div>
            </section>
        </div>
        <Features />
    </div>
    
  )
}
