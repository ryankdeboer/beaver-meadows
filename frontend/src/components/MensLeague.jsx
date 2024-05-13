import React from 'react'


// .slice(0,2)
const standings = [
    {
        position: '1',
        name: 'Catfish',
        points: '31',
    },
    {
        position: '2',
        name: 'Stub\'s Stallions',
        points: '30.5',
    },
    {
        position: '3',
        name: 'SSBE',
        points: '29',
    },
    {
        position: '4',
        name: 'JL Construction',
        points: '29',
    },
    {
        position: '5',
        name: 'Maddogs',
        points: '27',
    },
    {
        position: '6',
        name: 'River Rats',
        points: '25.5',
    },
    {
        position: '7',
        name: 'Wyffels',
        points: '25',
    },
    {
        position: '8',
        name: 'P-Burg Vet',
        points: '23.5',
    },
    {
        position: '9',
        name: 'Beer Muscles',
        points: '21.5',
    },
    {
        position: '10',
        name: 'New Old Guys',
        points: '20',
    },
    {
        position: '11',
        name: 'Sneeds Insurance',
        points: '19.5',
    },
    {
        position: '12',
        name: 'Busch League',
        points: '18',
    },
    {
        position: '13',
        name: 'Falcons',
        points: '16',
    },
    {
        position: '14',
        name: 'Last Place',
        points: '16',
    },
    {
        position: '15',
        name: 'Putt Pirates',
        points: '14.5',
    },
    
  ]


function MensLeague() {
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

export default MensLeague