import React from 'react'
import { useLocation } from 'react-router-dom';


// .slice(0,2)
const standings = [
    {
        position: '1',
        name: 'River Rats',
        points: '192.5',
    },
    {
        position: '2',
        name: 'Maddogs',
        points: '187.5',
    },
    {
        position: '3',
        name: 'SSBE',
        points: '182',
    },
    {
        position: '4',
        name: 'Beer Muscles',
        points: '180.5',
    },
    {
        position: '5',
        name: 'Sneed Insurance',
        points: '154',
    },
    {
        position: '6',
        name: 'City Sanitary Service',
        points: '152.5',
    },
    {
        position: '7',
        name: 'Catfish',
        points: '152',
    },
    {
        position: '8',
        name: 'P-Burg Vet',
        points: '150',
    },
    {
        position: '9',
        name: 'Busch League',
        points: '147',
    },
    {
        position: '10',
        name: 'Wyffels',
        points: '146.5',
    },
    {
        position: '11',
        name: 'Falcons',
        points: '143',
    },
    {
        position: '12',
        name: 'Stub\'s Stallions',
        points: '140.5',
    },
    {
        position: '13',
        name: 'Thirteen Bricks',
        points: '136.5',
    },
    {
        position: '14',
        name: 'JL Construction',
        points: '128',
    },
  ]


function MensLeague() {
  return (
    <div className="mb-12 overflow-hidden dark:text-white">
        <h2 className="uppercase dark:text-white text-black text-xl tracking-wide font-normal pb-2">
            Week 7 Standings
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