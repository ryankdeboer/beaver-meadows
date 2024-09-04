import React from 'react'


// .slice(0,2)
const standings = [
    {
        position: '1',
        name: 'Wyffels',
        points: '353',
    },
    {
        position: '2',
        name: 'Catfish',
        points: '334',
    },
    {
        position: '3',
        name: 'P-Burg Vet',
        points: '328',
    },
    {
        position: '4',
        name: 'Beer Muscles',
        points: '324',
    },
    {
        position: '5',
        name: 'River Rats',
        points: '321',
    },
    {
        position: '6',
        name: 'Last Place',
        points: '319.5',
    },
    {
        position: '7',
        name: 'Busch League',
        points: '317.5',
    },
    {
        position: '8',
        name: 'JL Construction',
        points: '316.5',
    },
    {
        position: '9',
        name: 'Stub\'s Stallions',
        points: '316',
    },
    {
        position: '10',
        name: 'Maddogs',
        points: '307.5',
    },
    {
        position: '11',
        name: 'Putt Pirates',
        points: '305.5',
    },
    {
        position: '12',
        name: 'Falcons',
        points: '301.5',
    },
    {
        position: '13',
        name: 'SSBE',
        points: '297.5',
    },
    {
        position: '14',
        name: 'Sneeds Insurance',
        points: '267.5',
    },
    {
        position: '15',
        name: 'New Old Guys',
        points: '222',
    },
    
  ]


function MensLeague() {
  return (
    <div className="mb-12 overflow-hidden dark:text-white">
        <h2 className="uppercase dark:text-white text-black text-xl tracking-wide font-normal pb-2">
            Week 14 Standings
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