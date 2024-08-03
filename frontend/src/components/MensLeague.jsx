import React from 'react'


// .slice(0,2)
const standings = [
    {
        position: '1',
        name: 'Wyffels',
        points: '231.5',
    },
    {
        position: '2',
        name: 'P-Burg Vet',
        points: '214',
    },
    {
        position: '3',
        name: 'JL Construction',
        points: '212.5',
    },
    {
        position: '4',
        name: 'River Rats',
        points: '212',
    },
    {
        position: '5',
        name: 'Stub\'s Stallions',
        points: '210',
    },
    {
        position: '6',
        name: 'Beer Muscles',
        points: '209',
    },
    {
        position: '7',
        name: 'Maddogs',
        points: '208',
    },
    {
        position: '8',
        name: 'Last Place',
        points: '205.5',
    },
    {
        position: '9',
        name: 'Catfish',
        points: '204.5',
    },
    {
        position: '10',
        name: 'Busch League',
        points: '192.5',
    },
    {
        position: '11',
        name: 'Putt Pirates',
        points: '189.5',
    },
    {
        position: '12',
        name: 'Sneeds Insurance',
        points: '180.5',
    },
    {
        position: '13',
        name: 'Falcons',
        points: '181.5',
    },
    {
        position: '14',
        name: 'SSBE',
        points: '175.5',
    },
    {
        position: '15',
        name: 'New Old Guys',
        points: '163',
    },
    
  ]


function MensLeague() {
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

export default MensLeague