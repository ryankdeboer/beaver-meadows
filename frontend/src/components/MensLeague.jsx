import React from 'react'


// .slice(0,2)
const standings = [
    {
        position: '1',
        name: 'River Rats',
        points: '311.5',
    },
    {
        position: '2',
        name: 'Catfish',
        points: '308',
    },
    {
        position: '3',
        name: 'SSBE',
        points: '298.5',
    },
    {
        position: '4',
        name: 'Maddogs',
        points: '296.5',
    },
    {
        position: '5',
        name: 'Beer Muscles',
        points: '287',
    },
    {
        position: '6',
        name: 'Sneed Insurance',
        points: '275.5',
    },
    {
        position: '7',
        name: 'P-Burg Vet',
        points: '265.5',
    },
    {
        position: '8',
        name: 'Busch League',
        points: '256.5',
    },
    {
        position: '9',
        name: 'Stub\'s Stallions',
        points: '256.5',
    },
    {
        position: '10',
        name: 'City Sanitary Service',
        points: '255.5',
    },
    {
        position: '11',
        name: 'Wyffels',
        points: '247.5',
    },
    {
        position: '12',
        name: 'Falcons',
        points: '239',
    },
    {
        position: '13',
        name: 'Thirteen Bricks',
        points: '234.5',
    },
    {
        position: '14',
        name: 'JL Construction',
        points: '203',
    },
  ]


function MensLeague() {
  return (
    <div className="mb-12 overflow-hidden dark:text-white">
        <h2 className="uppercase dark:text-white text-black text-xl tracking-wide font-normal pb-2">
            Week 12 Standings
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

export default MensLeague