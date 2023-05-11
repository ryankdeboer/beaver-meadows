import React from 'react'
import SubpageContact from "../components/SubpageContact";

function LeagueStandingsPage() {
  return (
    <div className="bg-gray-50 dark:bg-[#0B0E0B]">
      <main>
          <div className="subpage-hero h-96 md:96 relative">
             
          </div>
      </main>
      <div className="-mt-28 md:px-6 py-1 lg:max-w-screen-2xl relative lg:grid grid-rows-1 grid-cols-3 mx-auto">
      <section className="m-4 col-span-2 text-center sm:text-left ">
      <h1 className='uppercase text-white text-2xl tracking-wide font-normal pb-2'>League Standings</h1>
          <div className="p-8 mb-8 bg-white dark:bg-zinc-900 rounded-sm drop-shadow">
            <h2 className="text-2xl mb-2 pb-2 dark:text-white border-b border-zinc-200 dark:border-zinc-800">Men's Leaugue</h2>
            <p  className='mb-10 dark:text-white'>Check back for point standings as the year progresses</p>

            
            {/* <div class="mb-12 flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-left text-sm font-light">
                      <thead class="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" class="px-6 py-4">Pos</th>
                          <th scope="col" class="px-6 py-4">Team Name</th>
                          <th scope="col" class="px-6 py-4">Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                          <td class="whitespace-nowrap px-6 py-4">Mark</td>
                          <td class="whitespace-nowrap px-6 py-4">Otto</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                          <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                          <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                          <td class="whitespace-nowrap px-6 py-4">Larry</td>
                          <td class="whitespace-nowrap px-6 py-4">Wild</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div> */}

            <h3 className="text-xl mb-2 pb-2 dark:text-white border-b border-zinc-200 dark:border-zinc-800">Previous Years Men's League Winners</h3>
            <div className="mb-12 flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 dark:text-white">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" className="px-6 py-4">Year</th>
                          <th scope="col" className="px-6 py-4">Team Name</th>
                        
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">2022</td>
                          <td className="whitespace-nowrap px-6 py-4">Maddogs</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">2021</td>
                          <td className="whitespace-nowrap px-6 py-4">S.S.B.E.</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">2020</td>
                          <td className="whitespace-nowrap px-6 py-4">Busch League</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">2019</td>
                          <td className="whitespace-nowrap px-6 py-4">Maddogs</td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl mb-2 pb-2 dark:text-white border-b border-zinc-200 dark:border-zinc-800">Women's Leaugue</h2>
            <p  className='mb-10 dark:text-white'>Check back for point standings as the year progresses</p>
          </div>
        </section>
        <section className="m-4 col-span-1 row-span-1">
          <SubpageContact/>
        </section>
      </div>
    </div>
  )
}

export default LeagueStandingsPage