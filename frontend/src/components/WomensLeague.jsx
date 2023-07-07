import React from 'react'


// .slice(0,2)
const standings = [
    {
        position: '1',
        name: 'Garden Girls',
        points: '45.5',
    },
    {
        position: '2',
        name: 'Guess What John Did?',
        points: '45.5',
    },
    {
        position: '3',
        name: 'Just Swinging',
        points: '40',
    },
    {
        position: '4',
        name: '2 girls 1 putt',
        points: '36',
    },
    {
        position: '5',
        name: 'Power Putt Girls',
        points: '35',
    },
    {
        position: '6',
        name: 'Know Clue',
        points: '34.5',
    },
    {
        position: '7',
        name: 'Tee Time',
        points: '34',
    },
    {
        position: '8',
        name: 'Perky Putters',
        points: '33',
    },
    {
        position: '9',
        name: 'Divot and Goliath',
        points: '32.5',
    },
    {
        position: '10',
        name: 'Classy and Sassy',
        points: '30',
    },
    {
        position: '11',
        name: 'Talk Birdie to Me',
        points: '30',
    },
    {
        position: '12',
        name: 'Life Savers',
        points: '23',
    },
    {
        position: '13',
        name: 'Reckless Drivers',
        points: '22.5',
    },
    {
        position: '14',
        name: '2 fer 1',
        points: '15',
    },
    {
        position: '15',
        name: 'Twisted Squirrels',
        points: '14.5',
    },
  ]


function WomensLeague() {
  return (
    <div className="mb-12 overflow-hidden dark:text-white">
        <h2 className="uppercase dark:text-white text-black text-xl tracking-wide font-normal pb-2">
            Week 6 Standings
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