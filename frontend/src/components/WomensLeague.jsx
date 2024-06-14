import React from 'react'


// .slice(0,2)
const standings = [
    {
        position: '1',
        name: 'What did John do?',
        points: '7.5',
    },
    {
        position: '2',
        name: 'Garden Girls',
        points: '7',
    },
    {
        position: '3',
        name: 'Teed Off',
        points: '7',
    },
    {
        position: '4',
        name: 'Divot & Goliath',
        points: '7',
    },
    {
        position: '5',
        name: 'Perky Putters',
        points: '7',
    },
    {
        position: '6',
        name: 'Sassy Swingers',
        points: '6.5',
    },
    {
        position: '7',
        name: 'Green Days',
        points: '6.5',
    },
    {
        position: '8',
        name: 'Life Savers',
        points: '5.5',
    },
    {
        position: '9',
        name: 'Just Fore Fun',
        points: '5.5',
    },
    {
        position: '10',
        name: 'Reckless Drivers',
        points: '4.5',
    },
    {
        position: '11',
        name: 'The Newbies',
        points: '3.5',
    },
    {
        position: '12',
        name: 'Know Clue',
        points: '3.5',
    },
    {
        position: '13',
        name: 'It is what it is & it ain\'t good',
        points: '3',
    },
    {
        position: '14',
        name: 'Just Swinging',
        points: '3',
    },
    {
        position: '15',
        name: 'Power Putt Girls',
        points: '3',
    },
    {
        position: '16',
        name: 'Dude Where\'s my Par',
        points: '3',
    },
    {
        position: '17',
        name: 'Golf Goddesses',
        points: '2.5',
    },
  ]


function WomensLeague() {
  return (
    <div className="mb-12 overflow-hidden dark:text-white">
        <h2 className="uppercase dark:text-white text-black text-xl tracking-wide font-normal pb-2">
            Week 1 Standings
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