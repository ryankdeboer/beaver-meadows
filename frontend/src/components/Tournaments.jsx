import React from 'react'
import { useLocation } from 'react-router-dom';

const tournaments = [
    {
        name: 'Butler County Open - 2 Person Best Shot - 9 Holes / Course',
        date: '4/1/26 - 5-31-26',
        description:
          '$50 / Person - $15 Cart Rental @ Each Course',
    },
    {
        name: 'Sneaker/Hooker Open - Shotgun Start - 3 person',
        date: 'Saturday - 4-25-26 - 10:00am',
        description:
          '$20 per person',
    },
    {
        name: 'Ryder Cup - 27 Holes - 2 person',
        date: 'Saturday - 5-9-26 - 9:00am',
        description:
          '$50.00 per team - 100% payout',
    },
    {
        name: 'Ladies Mid Iowa Over 50 - 4 Person Best Shot',
        date: 'Monday - 5-11-26 - 8:30am',
        description:
          'Mid Iowa Members Only $25 per person',
    },
    {
        name: 'Memorial Day Tournament',
        date: 'Monday - 5-25-26 - 10:00am',
        description:
          '$10.00 per person',
    },
    {
        name: 'Men’s Mid Iowa Over 50 - 2 Person Best Shot',
        date: 'Monday - 6-1-26 - 8:00am & 1:00pm',
        description:
          'Mid Iowa Members Only $25 per person. Any Beaver Meadows member over 50 can enter',
    },
    {
        name: '3 Course - 4 Person Best Shot',
        date: 'Saturday - 6-6-26 - 8:00am',
        description:
          '$250 per team (lunch included)',
    },
    {
        name: '2 Couple Best Shot',
        date: 'Sunday - 6-14-26 - 10:00am',
        description:
          '$60.00 per team',
    },
    {
        name: 'July 4th Tournament',
        date: 'Saturday - 7-4-26 - 10:00am',
        description:
          '$10.00 per person',
    },
    {
        name: 'American Legion Tournament',
        date: 'Saturday - 7-11-26 - 10:00am',
        description:
          '',
    },
    {
        name: 'Women’s Brunch Tournament',
        date: 'Sunday - 7-19-26 - 11:00am',
        description:
          '',
    },
    {
        name: '4 Person Best Shot/2 cup - Beaver Fundraiser',
        date: 'Saturday - 7-25-26 - 10:00am',
        description:
          '$80.00 per team',
    },
    {
        name: 'Parent - Child Best Shot Tournament',
        date: 'Sunday - 8-2-26 - 10:00am',
        description:
          '$10 / Person - 9 Holes. All ages can enter - Only kids under 18 can win prizes',
    },
    {
        name: 'Calcutta - Men’s League Members Only',
        date: 'Saturday - 8-8-26',
        description:
          '',
    },
    {
        name: 'City Tournament',
        date: 'Sunday - 8-16-26 - 1:00pm',
        description:
          '$10 per division',
    },
    {
        name: 'Labor Day Tournament - 8” Cup',
        date: 'Monday - 9-7-26 - 10:00am',
        description:
          '$10.00 per person',
    },
  ]


function Tournaments() {
    let location = useLocation();
    return (
        <div className="">
            {/* <p class="text-white">Thank you to everyone who came out this 2024 season to support Beaver Meadows and participate in our tournaments. Stay tuned for the 2025 schedule that will be posted on the website as soon as it's available.</p> */}
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