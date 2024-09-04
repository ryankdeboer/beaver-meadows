import React from 'react'


// .slice(0,2)
const standings = [
    {
        position: '1',
        name: 'Teed Off',
        points: '51',
    },
    {
        position: '2',
        name: 'Perky Putters',
        points: '51',
    },
    {
        position: '3',
        name: 'Garden Girls',
        points: '46.5',
    },
    {
        position: '4',
        name: 'What did John do?',
        points: '45',
    },
    {
        position: '5',
        name: 'Sassy Swingers',
        points: '44',
    },
    {
        position: '6',
        name: 'Power Putt Girls',
        points: '43.5',
    },
    {
        position: '7',
        name: 'Divot & Goliath',
        points: '42.5',
    },
    {
        position: '8',
        name: 'Golf Goddesses',
        points: '40',
    },
    {
        position: '9',
        name: 'The Newbies',
        points: '40',
    },
    {
        position: '10',
        name: 'Green Days',
        points: '38.5',
    },
    {
        position: '11',
        name: 'Life Savers',
        points: '37.5',
    },
    {
        position: '12',
        name: 'Dude Where\’s My Par',
        points: '37',
    },
    {
        position: '13',
        name: 'Just Swinging',
        points: '35.5',
    },
    {
        position: '14',
        name: 'Reckless Drivers',
        points: '35.5',
    },
    {
        position: '15',
        name: 'It is what it is & it ain\'t good',
        points: '35.5',
    },
    {
        position: '16',
        name: 'Know Clue',
        points: '34.5',
    },
    {
        position: '17',
        name: 'Just Fore Fun',
        points: '31.5',
    },
  ]


function WomensLeague() {
  return (
    <div className="mb-12 overflow-hidden dark:text-white">
        <h2 className="uppercase dark:text-white text-black text-xl tracking-wide font-normal pb-2">
            Week 8 Standings
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