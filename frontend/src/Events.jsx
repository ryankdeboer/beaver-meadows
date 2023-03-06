import React from 'react'

function Events() {
  return (
     <section className="px-6 m-8 -mt-20 sm:-mt-60 text-center md:text-left lg:max-w-7xl lg:px-8 mx-auto relative md:grid grid-cols-3 grid-rows-1 drop-shadow">

        <div className="mb-8 md:mb-0 col-span-1 row-span-6 sm:col-start-3 bg-slate-600/[.3]">
            <div className="p-6 bg-gray-100 md:bg-gray-900/[.3]">
                <h3 className='uppercase text-black md:text-white text-base tracking-wide font-normal'>Upcoming Events</h3>
            </div>
            <div className="p-6 bg-white md:bg-zinc-800 text-white md:h-200">
                <div className="py-4 border-b">
                    <div className=" border-gray-200">
                        <h3 className="text-xl font-normal leading-6 md:text-white text-black sm:text-2xl">Celebration of Life for Brian Card</h3>
                        <p className="mt-1 mb-5 max-w-2xl text-gray-900 md:text-gray-300 text-sm">Friday - 04-28-23 - 5pm</p>
                        <p className='pb-5 text-sm text-gray-700 md:text-white'>Come out to Beaver and help celebrate and remember Brian Card</p>
                    </div>
                </div>
                <div className="py-4 border-b">
                    <div className=" border-gray-200">
                        <h3 className="text-xl font-normal leading-6 md:text-white text-black sm:text-2xl">Sneaker/Hooker Open</h3>
                        <p className="mt-1 mb-5 max-w-2xl text-gray-900 md:text-gray-300 text-sm">Saturday - 04-29-23 - 10am</p>
                        <p className='pb-5 text-sm text-gray-700 md:text-white'>Shotgun Start - 3 person - $20.00 per person</p>
                    </div>
                </div>
                <div className="py-4 border-b">
                    <div className=" border-gray-200">
                        <h3 className="text-xl font-normal leading-6 md:text-white text-black sm:text-2xl">Ryder Cup</h3>
                        <p className="mt-1 mb-5 max-w-2xl text-gray-900 md:text-gray-300 text-sm">Saturday - 05-13-23 - 9am</p>
                        <p className='pb-5 text-sm text-gray-700 md:text-white'>27 Holes -2 person - $50.00 per team - 100% payout</p>
                    </div>
                </div>
                <div className="py-4">
                    <div className=" border-gray-200">
                        <h3 className="text-xl font-normal leading-6 md:text-white text-black sm:text-2xl">Memorial Day Tournament</h3>
                        <p className="mt-1 mb-5 max-w-2xl text-gray-900 md:text-gray-300 text-sm">Monday - 05-29-23 - 10am</p>
                        <p className='pb-5 text-sm text-gray-700 md:text-white'>$10.00 per person</p>
                    </div>
                </div>
            </div>
        </div>





        <div className="col-span-2 row-span-1 sm:col-start-1">
            <div className="p-6 bg-gray-100 md:bg-gray-100/[.3]">
                <h3 className="uppercase text-black md:text-white text-base tracking-wide font-normal">Customer Info</h3>
            </div>
            <div className="p-6 bg-white md:h-200">
            <h3 className="mb-4 pb-2 text-xl font-medium border-b border-gray-200 leading-6 text-black sm:text-2xl">Green Fees</h3>
                <div className="py-2 mb-5 sm:grid sm:grid-cols-2">
                
                    <div className=" ">
                    <h4 className="mb-2 text-base font-medium leading-6 text-black sm:text-xl">Hole Fees</h4>
                        <div className='pb-5 text-sm text-gray-700'>
                            <ul>
                                <li>
                                    9 Holes: $10.00
                                </li>    
                                <li>
                                    18 Holes: $15.00
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                    <h4 className="mb-2 text-base font-medium leading-6 text-black sm:text-xl">Cart Fees</h4>
                        <div className='pb-5 text-sm text-gray-700'>
                            <ul>
                                <li>
                                    9 Holes: $15.00
                                </li>    
                                <li>
                                    18 Holes: $20.00
                                </li>
                                <li>
                                    Trail Fees: $6.00
                                </li>
                            </ul>    
                        </div>
                    </div>
                </div>

                <h3 className="mb-4 pb-2 text-xl font-medium border-b border-gray-200 leading-6 text-black sm:text-2xl">Memberships</h3>
                <div className="py-2 mb-5 sm:grid sm:grid-cols-2">
                    <div className=" ">
                    <h4 className="mb-2 text-base font-medium leading-6 text-black sm:text-xl">Single</h4>
                        <div className='pb-5 text-sm text-gray-700'> 
                            <ul>
                                <li>
                                    $375 per person
                                </li>    
                            </ul>
                        
                        </div>
                    </div>
                    <div className="">
                    <h4 className="mb-2 text-base font-medium leading-6 text-black sm:text-xl">Couples</h4>
                        <div className='pb-5 text-sm text-gray-700'>
                        <ul>
                                <li>
                                    $485 per couple
                                </li>    
                            </ul>
                        </div>
                    </div>
                    <div className=" ">
                    <h4 className="mb-2 text-base font-medium leading-6 text-black sm:text-xl">Family</h4>
                        <div className='pb-5 text-sm text-gray-700'> 
                            <ul>
                                <li>
                                    $535 per family
                                </li>    
                                
                            </ul>
                        
                        </div>
                    </div>
                    <div className="text-xs col-span-3 text-center">
                        * Early Bird pricing available before May 1st, 2023<br/>
                        * Memberships half price if individual has membership at Legend Trail or ARC
                        </div>
                </div>

                <h3 className="mb-4 pb-2 text-xl font-medium border-b border-gray-200 leading-6 text-black sm:text-2xl">Contact</h3>
                <div className="py-2 mb-5 sm:grid sm:grid-cols-2">
                    <div className=" ">
                        <h4 className="mb-2 text-base font-medium leading-6 text-black sm:text-xl">Club House</h4>
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
                    <div className=" ">
                    <h4 className="mb-2 text-base font-medium leading-6 text-black sm:text-xl">Address</h4>
                        <div className='pb-5 text-sm text-gray-700'> 
                        <p>Beaver Meadows Golf and Country Club<br/>
                        32078 HIGHWAY 14<br/>
                        Parkersburg, IA 50665<br/>
                        </p>
                        
                        </div>
                    </div>
                </div>
                
            </div>

            
            
        </div>
        
        



        {/* <section className="px-6 mt-5 sm:-mt-60 min-h-min lg:max-w-6xl lg:px-8 mx-auto relative"><h2 className="text-3xl font-bold tracking-tight text-black sm:text-6xl uppercase ">Upcoming Events 2023</h2>
        <div className="overflow-hidden my-5 sm:my-10 bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold leading-6 text-green-900 sm:text-3xl">Event Name</h3>
                <p className="mt-1 mb-5 max-w-2xl text-black">04-29-23</p>
                <p className='text-base text-gray-800'>Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</p>
            </div>
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 bg-gray-50">
                <h3 className="text-xl font-semibold leading-6 text-green-900 sm:text-3xl">Event Name</h3>
                <p className="mt-1 mb-5 max-w-2xl text-black-500">Date</p>
                <p className='text-base text-gray-800'>Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</p>
            </div>
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold leading-6 text-green-900 sm:text-3xl">Event Name</h3>
                <p className="mt-1 mb-5 max-w-2xl text-black-500">Date</p>
                <p className='text-base text-gray-800'>Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</p>
            </div>
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 bg-gray-50">
                <h3 className="text-xl font-semibold leading-6 text-green-900 sm:text-3xl">Event Name</h3>
                <p className="mt-1 mb-5 max-w-2xl text-black-500">Date</p>
                <p className='text-base text-gray-800'>Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</p>
            </div>
        </div>
        </section> */}
    </section> 
  )
}

export default Events