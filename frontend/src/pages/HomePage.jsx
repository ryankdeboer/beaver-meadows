import React from 'react'
import { BuildingStorefrontIcon, FlagIcon, ChatBubbleLeftRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'


const features = [
    {
      name: 'Public Course',
      description:
        'Enjoy 9 challenging holes as you play seven par 4s and two par 3s with many trees to increase difficulty.',
      icon: FlagIcon,
    },
    {
      name: 'Restaurant & Bar',
      description:
        'Club house offers a restaurant and bar along with an outdoor patio to relax and enjoy the day.',
      icon: BuildingStorefrontIcon,
    },
    {
      name: 'Cart Rentals',
      description:
        "Don't feel like walking? We got you covered with our cart rentals.",
      icon: CheckCircleIcon,
    },
    {
      name: 'Friendly Environment',
      description:
        'The atmoshere at Beaver Meadows is unmatched, always a good time!',
      icon: ChatBubbleLeftRightIcon,
    },
  ]




export default function HomePage() {
  return (
    <div className="">
        <div className="isolate bg-gray-200">
            <main>
                <div className="hero h-80 sm:h-screen relative">
                    <div className="relative px-6 lg:px-8 flex items-center h-80 sm:h-screen">
                        <div className="mx-auto">
                            <div className="sm:mb-8 sm:flex sm:justify-center">
                                <div className="flex text-center">
                                    <h1 className="text-2xl font-bold tracking-normal text-white sm:text-6xl uppercase drop-shadow-lg">Beaver Meadows Golf Course & Country Club</h1>
                                    {/* <h3 className="mt-6 text-2xl font-bold text-gray-600 sm:text-3xl">New Website Coming Soon!</h3>
                                    <p className="mt-6 text-gray-500">Beaver Meadows Golf and Country Club<br/>
                                        32078 HIGHWAY 14<br/>
                                        Parkersburg, IA 50665</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>
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
            
            



            
        </section> 
        </div>
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About Beaver Meadows Golf & Country Club
            </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-900">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
                ))}
            </dl>
            </div>
        </div>
        </div>                                  
    </div>
    
  )
}
