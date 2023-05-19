import React from 'react'
import { useLocation } from 'react-router-dom';


// .slice(0,2)
const standings = [
    {
        position: '1',
        name: 'SSBE',
        points: '30.5',
    },
    {
        position: '2',
        name: 'River Rats',
        points: '29',
    },
    {
        position: '3',
        name: 'Sneed Insurance',
        points: '28.5',
    },
    {
        position: '4',
        name: 'Maddogs',
        points: '27.5',
    },
    {
        position: '5',
        name: 'P-Burg Vet',
        points: '26',
    },
    {
        position: '6',
        name: 'Wyffels',
        points: '25.5',
    },
    {
        position: '7',
        name: 'Beer Muscles',
        points: '24',
    },
    {
        position: '8',
        name: 'City Sanitary Service',
        points: '21',
    },
    {
        position: '9',
        name: 'Falcons',
        points: '19.5',
    },
    {
        position: '10',
        name: 'Busch League',
        points: '19',
    },
    {
        position: '11',
        name: 'Catfish',
        points: '17.5',
    },
    {
        position: '12',
        name: 'JL Construction',
        points: '16.5',
    },
    {
        position: '13',
        name: 'Stub\'s Stallions',
        points: '16',
    },
    {
        position: '14',
        name: 'Thirteen Bricks',
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