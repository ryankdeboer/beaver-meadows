import React from 'react'


// .slice(0,2)
const standings = [
    {
        position: '1',
        name: 'River Rats',
        points: '220.5',
    },
    {
        position: '2',
        name: 'Maddogs',
        points: '208.5',
    },
    {
        position: '3',
        name: 'SSBE',
        points: '199',
    },
    {
        position: '4',
        name: 'Beer Muscles',
        points: '198',
    },
    {
        position: '5',
        name: 'Catfish',
        points: '181',
    },
    {
        position: '6',
        name: 'Sneed Insurance',
        points: '180',
    },
    {
        position: '7',
        name: 'P-Burg Vet',
        points: '174',
    },
    {
        position: '8',
        name: 'Busch League',
        points: '174',
    },
    {
        position: '9',
        name: 'City Sanitary Service',
        points: '172.5',
    },
    {
        position: '10',
        name: 'Stub\'s Stallions',
        points: '168',
    },
    {
        position: '11',
        name: 'Wyffels',
        points: '162.5',
    },
    {
        position: '12',
        name: 'Falcons',
        points: '157',
    },
    {
        position: '13',
        name: 'Thirteen Bricks',
        points: '155.5',
    },
    {
        position: '14',
        name: 'JL Construction',
        points: '146',
    },
  ]


function MensLeague() {
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

export default MensLeague