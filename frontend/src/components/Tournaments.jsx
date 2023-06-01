import React from 'react'
import { useLocation } from 'react-router-dom';


// .slice(0,2)
const tournaments = [
    {
        name: '3 Course 4 Person Best Shot',
        date: 'Saturday - 06-03-23 - 8:30am',
        description:
          '$250 per team (lunch included) - Contact Chad Campbell for entry. Ph: 319-415-3951 Email: campbellchad@mchsi.com',
    },
    {
        name: 'Men’s Mid Iowa Over 50',
        date: 'Monday - 06-05-23 - 8am',
        description:
          `2 Person Best Shot - \n Mid Iowa Members Only $25 per person`,
    },
    {
        name: 'July 4th Tournament',
        date: 'Tuesday - 07-04-23 - 10am',
        description:
          '$10.00 per person',
    },
    {
        name: '2 Couple Best Shot',
        date: 'Saturday - 07-15-23 - 10am',
        description:
          '$60.00 per team',
    },
    {
        name: '4 Gal Best Shot',
        date: 'Thursday - 07-20-23 - 9am',
        description:
          '$25 per person, $20 cart',
    },
    {
        name: 'Calcutta',
        date: 'Saturday - 08-12-23 - 8am',
        description:
          'Men’s League Members Only',
    },
    {
        name: 'Ladies Mid Iowa Over 50 - 2 Person Best Shot',
        date: 'Monday - 08-14-23 - 8:30am',
        description:
          'Mid Iowa Members Only $25 per person',
    },
    {
        name: 'City Tournament',
        date: 'Sunday - 08-20-23 - 1pm',
        description:
          '$10 per division',
    },
    {
        name: 'Labor Day Tournament - 8” Cup',
        date: 'Monday - 09-04-23 - 10am',
        description:
          '$10.00 per person',
    },
    {
        name: '4 Person Best Shot/2 cup - Beaver Fundraiser',
        date: 'Saturday - 09-16-23 - 11am',
        description:
          '$80.00 per team',
    },
  ]


function Tournaments() {
    let location = useLocation();
    return (
        <div className="">
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