import React from 'react'


// .slice(0,2)
const standings = [
    {
        position: '1',
        name: 'Guess What John Did?',
        points: '24',
    },
    {
        position: '2',
        name: '2 Girls 1 Putt',
        points: '20',
    },
    {
        position: '3',
        name: 'Garden Girls',
        points: '16.5',
    },
    {
        position: '4',
        name: 'Just Swinging',
        points: '16.5',
    },
    {
        position: '5',
        name: 'Tee Time',
        points: '15',
    },
    {
        position: '6',
        name: 'Divot and Goliath',
        points: '14.5',
    },
    {
        position: '7',
        name: 'Classy and Sassy',
        points: '13.5',
    },
    {
        position: '8',
        name: 'Know Clue',
        points: '12.5',
    },
    {
        position: '9',
        name: 'Talk Birdie Too Me',
        points: '12',
    },
    {
        position: '10',
        name: 'Life Savers',
        points: '11.5',
    },
    {
        position: '11',
        name: 'Perky Putters',
        points: '11',
    },
    {
        position: '12',
        name: 'Power Putt Girls',
        points: '9.5',
    },
    {
        position: '13',
        name: '2 fer 1',
        points: '7',
    },
    {
        position: '14',
        name: 'Reckless Drivers',
        points: '6',
    },
    {
        position: '15',
        name: 'Twisted Squirrels',
        points: '2',
    },
  ]


function WomensLeague() {
  return (
    <div className="mb-12 overflow-hidden dark:text-white">
        <h2 className="uppercase dark:text-white text-black text-xl tracking-wide font-normal pb-2">
            Week 2 Standings
        </h2>
        <table className="min-w-full table-fixed text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                <th scope="col" className="px-3 py-4 w-2.5"></th>
                <th scope="col" className="px-3 py-4">Team</th>
                <th scope="col" className="px-3 py-4">Points</th>
                
                </tr>
            </thead>
            <tbody>
                {standings.map((standing) => (
                    <tr key={standing.position} className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-3 py-4">{standing.position}</td>
                        <td className="whitespace-nowrap px-3 py-4 font-medium">{standing.name}</td>
                        <td className="whitespace-nowrap px-3 py-4">{standing.points}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>  
  )
}

export default WomensLeague