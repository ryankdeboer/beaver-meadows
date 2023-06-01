import React from 'react'
import { useLocation } from 'react-router-dom';


// .slice(0,2)
const standings = [
    {
        position: '1',
        name: 'SSBE',
        points: '84',
    },
    {
        position: '2',
        name: 'Maddogs',
        points: '84',
    },
    {
        position: '3',
        name: 'River Rats',
        points: '83',
    },
    {
        position: '4',
        name: 'Beer Muscles',
        points: '77.5',
    },
    {
        position: '5',
        name: 'Wyffels',
        points: '74.5',
    },
    {
        position: '6',
        name: 'Busch League',
        points: '69.5',
    },
    {
        position: '7',
        name: 'Catfish',
        points: '67.5',
    },
    {
        position: '8',
        name: 'Sneed Insurance',
        points: '62.5',
    },
    {
        position: '9',
        name: 'City Sanitary Service',
        points: '62',
    },
    {
        position: '10',
        name: 'P-Burg Vet',
        points: '61.5',
    },
    {
        position: '11',
        name: 'Falcons',
        points: '61.5',
    },
    {
        position: '12',
        name: 'Thirteen Bricks',
        points: '56.5',
    },
    {
        position: '13',
        name: 'Stub\'s Stallions',
        points: '48.5',
    },
    {
        position: '14',
        name: 'JL Construction',
        points: '47.5',
    },
  ]


function MensLeague() {
  return (
    <div className="mb-12 overflow-hidden dark:text-white">
        <h2 className="uppercase dark:text-white text-black text-xl tracking-wide font-normal pb-2">
            Week 3 Standings
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
                    <tr key={standings.position} className="border-b dark:border-neutral-500">
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