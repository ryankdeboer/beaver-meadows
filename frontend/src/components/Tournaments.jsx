import React from 'react'
import { useLocation } from 'react-router-dom';

const tournaments = [
    {
        name: 'Sneaker/Hooker Open - 3 person',
        date: 'Saturday - 4-26-25 - 10:00am',
        description:
          '$20 per person',
    },
    {
        name: 'Ryder Cup - 2 person',
        date: 'Saturday - 5-10-25 - 9:00am',
        description:
          '$50.00 per team - 100% payout',
    },
    {
        name: 'Memorial Day Tournament',
        date: 'Monday - 5-26-25 - 10:00am',
        description:
          '$10.00 per person',
    },
    {
        name: 'Men’s Mid Iowa Over 50 - 2 Person Best Shot',
        date: 'Monday - 6-2-25 - 8:00am & 1:00pm',
        description:
          'Mid Iowa Members Only $25 per person',
    },
    {
        name: '3 Course 4 Person Best Shot',
        date: 'Saturday - 6-7-25 - 8:30am',
        description:
          '$250 per team (lunch included)',
    },
    {
        name: '2 Couple Best Shot',
        date: 'Sunday - 6-8-25 - 10:00am',
        description:
          '$60.00 per team',
    },
    {
        name: '3 Course Chaos',
        date: '6-20-25 / 6-22-25',
        description:
          'Two Person Best Shot $60 Team or $30 Single Play 9 holes at CARD Clarksville, 9 holes at Round Grove Greene and 9 holes at Beaver Meadows Parkersburg. Details at Club House',
    },
    {
        name: 'July 4th Tournament',
        date: 'Friday - 7-4-25 - 10:00am',
        description:
          '$10.00 per person',
    },
    {
        name: 'American Legion Tournament',
        date: 'Saturday - 7-12-25 - 10:00am',
        description:
          '',
    },
    {
        name: 'Women’s Brunch Tournament',
        date: 'Sunday - 7-20-25 - 11:00am',
        description:
          '',
    },
    {
        name: '4 Gal Best Shot',
        date: 'Thursday - 7-24-25 - 9:00am',
        description:
          '$30 per person, $20 cart',
    },
    {
        name: '4 Person Best Shot/2 cup - Beaver Fundraiser',
        date: 'Saturday - 7-26-25 - 10:00am',
        description:
          '$80.00 per team',
    },
    {
        name: 'Calcutta - Men’s League Members Only',
        date: 'Saturday - 7-29-25',
        description:
          '',
    },
    {
        name: 'City Tournament',
        date: 'Sunday - 8-17-25 - 1:00m',
        description:
          '$10 per division',
    },
    {
        name: 'Labor Day Tournament - 8” Cup',
        date: 'Monday - 9-1-25 - 10:00am',
        description:
          '$10.00 per person',
    },
    {
        name: 'Ladies Mid Iowa Over 50 - 4 Person Best Shot',
        date: 'Thursday - 9-22-25 - 8:30am',
        description:
          'Mid Iowa Members Only $25 per person',
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