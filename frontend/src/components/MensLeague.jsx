import React from 'react'


// .slice(0,2)
const standings = [
    {
        position: '1',
        name: 'Wyffels',
        points: '112.5',
    },
    {
        position: '2',
        name: 'Stub\'s Stallions',
        points: '108.5',
    },
    {
        position: '3',
        name: 'Catfish',
        points: '99',
    },
    {
        position: '4',
        name: 'Falcons',
        points: '98',
    },
    {
        position: '5',
        name: 'JL Construction',
        points: '95',
    },
    {
        position: '6',
        name: 'Busch League',
        points: '93',
    },
    {
        position: '7',
        name: 'Beer Muscles',
        points: '92.5',
    },
    {
        position: '8',
        name: 'Maddogs',
        points: '88.5',
    },
    {
        position: '9',
        name: 'River Rats',
        points: '87.5',
    },
    {
        position: '10',
        name: 'P-Burg Vet',
        points: '85',
    },
    {
        position: '11',
        name: 'Putt Pirates',
        points: '83',
    },
    {
        position: '12',
        name: 'Last Place',
        points: '77',
    },
    {
        position: '13',
        name: 'New Old Guys',
        points: '76.5',
    },
    {
        position: '14',
        name: 'Sneeds Insurance',
        points: '72',
    },
    {
        position: '15',
        name: 'SSBE',
        points: '69.5',
    },
    
  ]


function MensLeague() {
  return (
    <div className="mb-12 overflow-hidden dark:text-white">
        <h2 className="uppercase dark:text-white text-black text-xl tracking-wide font-normal pb-2">
            Week 4 Standings
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