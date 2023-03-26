import React from 'react'
import { useLocation } from 'react-router-dom';


// .slice(0,2)
const events = [
    {
      name: 'Celebration of Life for Brian Card',
      date: 'Friday - 04-28-23 - 5pm',
      description:
        'Come out to Beaver and help celebrate and remember Brian Card',
    },
    {
      name: 'Johnson Graduation',
      date: 'Sunday - 05-07-23',
      description:
        '',
    },
    {
      name: 'Huntinger Graduation',
      date: 'Sunday - 05-21-23',
      description:
        '',
    },
    {
        name: '4 Person Best Shot/2 cup - Beaver Fundraiser',
        date: 'Saturday - 09-16-23 - 11am',
        description:
          '$80.00 per team',
    },
  ]


function Events() {
    let location = useLocation();
    // console.log(location);
  return (
    <div className="">
        {events.map((event) => (
            
            <div key={event.name} className="py-6 border-b border-zinc-200 dark:border-zinc-800 last:border-0"> 
                <h3 className="text-xl font-normal leading-6 text-black dark:text-white sm:text-2xl">{event.name}</h3>
                <p className="mt-1 mb-2 max-w-2xl text-gray-400 text-sm">{event.date}</p>
                <p className='text-sm text-gray-900 dark:text-white'>{event.description}</p>
            </div>
        ))}
    </div> 
  )
}

export default Events