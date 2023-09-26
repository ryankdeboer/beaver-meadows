import React from 'react'
import { useLocation } from 'react-router-dom';


// .slice(0,2)
const tournaments = [
    // {
    //     name: 'Kevin Kyhl Memorial/ALS Benefit - 4-Man Best Shot',
    //     date: 'Saturday - 09-23-23 - 7:30am & 1pm Shotgun Start',
    //     description:
    //       '$50.00 per person',
    // }
  ]


function Tournaments() {
    let location = useLocation();
    return (
        <div className="">
            <p class="text-white">Thank you to everyone who came out this 2023 season to support Beaver Meadows and participate in our tournaments. Stay tuned for the 2024 schedule that will be posted on the website as soon as it's available.</p>
            {tournaments.map((tournament, index) => {
                if(location.pathname === "/" && index < 4) {
                    return (
                        <div key={tournament.name} className="pb-6 mb-6 border-b border-zinc-200 dark:border-zinc-800 last:mb-0 last:pb-0 last:border-0">
                           
                                <h3 className="text-xl font-normal leading-6 text-black dark:text-white sm:text-2xl">{tournament.name}</h3>
                                <p className="mt-1 mb-2 max-w-2xl text-gray-400 text-sm">{tournament.date}</p>
                                <p className='text-sm text-gray-900 dark:text-white'>{tournament.description}</p>
                            
                        </div>
                    )
                } else if (location.pathname === "/tournaments") {
                    return (
                        <div key={tournament.name} className="py-4 border-b border-zinc-200 dark:border-zinc-800 last:mb-0 last:pb-0 last:border-0">
                            
                                <h3 className="text-xl font-normal leading-6 text-black dark:text-white sm:text-2xl">{tournament.name}</h3>
                                <p className="mt-1 mb-2 max-w-2xl text-gray-400 text-sm">{tournament.date}</p>
                                <p className='text-sm text-gray-900 dark:text-white'>{tournament.description}</p>
                            
                        </div>
                    )
                } else {
                    return null
                }
            
            }
        )}
    </div> 
    )
}

export default Tournaments