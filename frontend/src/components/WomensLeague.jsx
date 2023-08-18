import React from 'react'


// .slice(0,2)
const standings = [
    {
        position: '1',
        name: 'Garden Girls',
        points: '65.5',
    },
    {
        position: '2',
        name: 'Guess What John Did?',
        points: '64',
    },
    {
        position: '3',
        name: 'Just Swinging',
        points: '60',
    },
    {
        position: '4',
        name: 'Know Clue',
        points: '56',
    },
    {
        position: '5',
        name: '2 girls 1 putt',
        points: '55',
    },
    {
        position: '6',
        name: 'Divot and Goliath',
        points: '53.5',
    },
    {
        position: '7',
        name: 'Classy and Sassy',
        points: '51',
    },
    {
        position: '8',
        name: 'Perky Putters',
        points: '51',
    },
    {
        position: '9',
        name: 'Tee Time',
        points: '50.5',
    },
    {
        position: '10',
        name: 'Power Putt Girls',
        points: '50',
    },
    {
        position: '11',
        name: 'Life Savers',
        points: '49',
    },
    {
        position: '12',
        name: 'Talk Birdie to Me',
        points: '48.5',
    },
    {
        position: '13',
        name: 'Reckless Drivers',
        points: '46',
    },
    {
        position: '14',
        name: '2 fer 1',
        points: '41',
    },
    {
        position: '15',
        name: 'Twisted Squirrels',
        points: '35.5',
    },
  ]


function WomensLeague() {
  return (
    <div className="mb-12 overflow-hidden dark:text-white">
        <h2 className="uppercase dark:text-white text-black text-xl tracking-wide font-normal pb-2">
            Week 9 Standings
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