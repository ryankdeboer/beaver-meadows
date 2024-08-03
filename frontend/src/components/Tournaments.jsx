import React from 'react'
import { useLocation } from 'react-router-dom';


// .slice(0,2)
const tournaments = [
    {
        name: 'Calcutta - Men’s League Members Only',
        date: 'Saturday - 8-10-24',
        description:
          '',
    },
    {
        name: 'Ladies Mid Iowa Over 50 - 4 Person Best Shot',
        date: 'Monday - 8-12-24 - 8:30am',
        description:
          'Mid Iowa Members Only $25 per person',
    },
    {
        name: 'City Tournament',
        date: 'Sunday - 8-18-24 - 1pm',
        description:
          '$10 per division',
    },
    {
        name: 'Labor Day Tournament - 8” Cup',
        date: 'Monday - 9-2-24 - 10:00am',
        description:
          '$10.00 per person',
    },
    {
        name: 'Women’s Brunch Tournament',
        date: 'Sunday - 9-15-24 - 11:00am',
        description:
          '$30 per person (brunch included)',
    },
  ]


function Tournaments() {
    let location = useLocation();
    return (
        <div className="">
            {/* <p class="text-white">Thank you to everyone who came out this 2023 season to support Beaver Meadows and participate in our tournaments. Stay tuned for the 2024 schedule that will be posted on the website as soon as it's available.</p> */}
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