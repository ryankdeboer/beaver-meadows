import React from 'react'

const events = [ 
  // {
  //       name: '5th Annual Golf Cart Poker Run',
  //       date: '8-17-24',
  //       description:
  //         'Registration at 11:30am. $20 per person',
  //   },
  ]


function Events() {
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