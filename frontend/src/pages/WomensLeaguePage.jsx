import React from "react";
import WomensLeague from "../components/WomensLeague";

function WomensLeaguePage() {
  return (
    <div className="bg-gray-50 dark:bg-[#0B0E0B]">
      <main>
        <div className="subpage-hero h-96 md:96 relative">
        
        </div>
      </main>
      <div className="-mt-28 md:px-6 py-1 lg:max-w-screen-2xl relative lg:grid grid-rows-1 grid-cols-3 mx-auto ">
        <section className="m-4 col-span-2 text-center sm:text-left ">
          <h1 className="uppercase text-white text-2xl tracking-wide font-normal pb-2">
            Women's League
          </h1>
          <div className="p-8 mb-8 bg-white dark:bg-zinc-900 rounded-sm drop-shadow">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  {/* <WomensLeague /> */}
                  <h3 className="text-xl mb-2 pb-2 dark:text-white border-b border-zinc-200 dark:border-zinc-800">Previous Years Women's League Winners</h3>
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
                          <td className="whitespace-nowrap px-6 py-4 font-medium">2023</td>
                          <td className="whitespace-nowrap px-6 py-4">What Did John Do?</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="m-4 col-span-1 row-span-1">
          <div>
            <h3 className='uppercase text-center sm:text-left text-gray-900 dark:text-white lg:text-white text-2xl tracking-wide font-normal pb-2'>Teams</h3>
            <div className="p-8 mb-4 text-center sm:text-left bg-white dark:bg-zinc-900 rounded-sm drop-shadow dark:text-white">
            <div className="mb-12 overflow-hidden">
              <h3 className="mb-2">2023 Team Names</h3>
              <hr className="mb-2"/>
              <table className="min-w-full table-fixed text-sm font-light">
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">Twisted Squirrels</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">Tee Time</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">Perky Putters</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">Classy and Sassy</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">Divot and Goliath</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">Life Savers</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">2 Girls 1 Putt</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">Guess what John Did?</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">PowerPutt Girls</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">The Course</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">Talk Birdie Too Me</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">Garden Girls</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">Just Swinging</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">Reckless Drivers</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">Know Clue</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">2 fer 1</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
                
            </div>
          </div>


          
        </section>
      </div>
      {/* <div className="md:px-6 py-1 lg:max-w-screen-2xl relative mx-auto ">
        <section className="m-4 col-span-2 text-center sm:text-left ">
          <h1 className="uppercase text-white text-2xl tracking-wide font-normal pb-2">
            Schedule
          </h1>
          <div className="p-8 mb-8 bg-white dark:bg-zinc-900 rounded-sm drop-shadow">
            <div className="flex flex-col dark:text-white">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="lg:grid gap-2 grid-cols-2">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="mb-12 overflow-hidden">
                      <table className="min-w-full table-fixed text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500 text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-xl">Week 1</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-center">Thursday, June 1, 2023</th>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 1</td>
                            <td className="whitespace-nowrap px-3 py-4">Twisted Squirrels</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Tee Time</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 2</td>
                            <td className="whitespace-nowrap px-3 py-4">Perky Putters</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Classy and Sassy</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 3</td>
                            <td className="whitespace-nowrap px-3 py-4">Divot and Goliath</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Life Savers</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 5</td>
                            <td className="whitespace-nowrap px-3 py-4">2 Girls 1 Putt</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Guess what John Did?</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 6</td>
                            <td className="whitespace-nowrap px-3 py-4">PowerPutt Girls</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">The Course</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 7</td>
                            <td className="whitespace-nowrap px-3 py-4">Talk Birdie Too Me</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Garden Girls</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 8</td>
                            <td className="whitespace-nowrap px-3 py-4">Just Swinging</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Reckless Drivers</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 9</td>
                            <td className="whitespace-nowrap px-3 py-4">Know Clue</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">2 fer 1</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>


                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="mb-12 overflow-hidden">
                      <table className="min-w-full table-fixed text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500 text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-xl">Week 2</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-center">Thursday, June 8, 2023</th>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 1</td>
                            <td className="whitespace-nowrap px-3 py-4">Garden Girls</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Reckless Drivers</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 2</td>
                            <td className="whitespace-nowrap px-3 py-4">Life Savers</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Tee Time</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 3</td>
                            <td className="whitespace-nowrap px-3 py-4">Talk Birdie Too Me</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Just Swinging</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 4</td>
                            <td className="whitespace-nowrap px-3 py-4">Guess what John Did?</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Twisted Squirrels</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 6</td>
                            <td className="whitespace-nowrap px-3 py-4">2 fer 1</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">2 Girls 1 Putt</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 7</td>
                            <td className="whitespace-nowrap px-3 py-4">PowerPutt Girls</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Know Clue</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 8</td>
                            <td className="whitespace-nowrap px-3 py-4">Classy and Sassy</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Divot and Goliath</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 9</td>
                            <td className="whitespace-nowrap px-3 py-4">The Course</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Perky Putters</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


                <div className="lg:grid gap-2 grid-cols-2">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="mb-12 overflow-hidden">
                      <table className="min-w-full table-fixed text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500 text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-xl">Week 3</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-center">Thursday, June 15, 2023</th>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 1</td>
                            <td className="whitespace-nowrap px-3 py-4">Divot and Goliath</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">The Course</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 2</td>
                            <td className="whitespace-nowrap px-3 py-4">Just Swinging</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Life Savers</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 3</td>
                            <td className="whitespace-nowrap px-3 py-4">Guess what John Did?</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">PowerPutt Girls</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 4</td>
                            <td className="whitespace-nowrap px-3 py-4">Know Clue</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Classy and Sassy</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 5</td>
                            <td className="whitespace-nowrap px-3 py-4">Twisted Squirrels</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Perky Putters</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 6</td>
                            <td className="whitespace-nowrap px-3 py-4">Reckless Drivers</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Tee Time</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 7</td>
                            <td className="whitespace-nowrap px-3 py-4">2 fer 1</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Talk Birdie Too Me</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 8</td>
                            <td className="whitespace-nowrap px-3 py-4">2 Girls 1 Putt</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Garden Girls</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>


                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="mb-12 overflow-hidden">
                      <table className="min-w-full table-fixed text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500 text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-xl">Week 4</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-center">Thursday, June 22, 2023</th>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 1</td>
                            <td className="whitespace-nowrap px-3 py-4">PowerPutt Girls</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">2 Girls 1 Putt</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 2</td>
                            <td className="whitespace-nowrap px-3 py-4">Garden Girls</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Know Clue</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 3</td>
                            <td className="whitespace-nowrap px-3 py-4">Reckless Drivers</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">2 fer 1</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 4</td>
                            <td className="whitespace-nowrap px-3 py-4">Life Savers</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">The Course</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 5</td>
                            <td className="whitespace-nowrap px-3 py-4">Talk Birdie Too Me</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Classy and Sassy</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 6</td>
                            <td className="whitespace-nowrap px-3 py-4">Twisted Squirrels</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Just Swinging</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 7</td>
                            <td className="whitespace-nowrap px-3 py-4">Perky Putters</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Divot and Goliath</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 9</td>
                            <td className="whitespace-nowrap px-3 py-4">Tee Time</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Guess what John Did?</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


                <div className="lg:grid gap-2 grid-cols-2">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="mb-12 overflow-hidden">
                      <table className="min-w-full table-fixed text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500 text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-xl">Week 5</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-center">Thursday, June 29, 2023</th>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 1</td>
                            <td className="whitespace-nowrap px-3 py-4">Reckless Drivers</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Life Savers</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 2</td>
                            <td className="whitespace-nowrap px-3 py-4">Classy and Sassy</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Tee Time</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 4</td>
                            <td className="whitespace-nowrap px-3 py-4">Perky Putters</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">PowerPutt Girls</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 5</td>
                            <td className="whitespace-nowrap px-3 py-4">2 fer 1</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Garden Girls</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 6</td>
                            <td className="whitespace-nowrap px-3 py-4">Divot and Goliath</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Just Swinging</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 7</td>
                            <td className="whitespace-nowrap px-3 py-4">The Course</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Guess what John Did?</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 8</td>
                            <td className="whitespace-nowrap px-3 py-4">Know Clue</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Twisted Squirrels</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 9</td>
                            <td className="whitespace-nowrap px-3 py-4">2 Girls 1 Putt</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Talk Birdie Too Me</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>


                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="mb-12 overflow-hidden">
                      <table className="min-w-full table-fixed text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500 text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-xl">Week 6</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-center">Thursday, July 6, 2023</th>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 1</td>
                            <td className="whitespace-nowrap px-3 py-4">Just Swinging</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Perky Putters</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 2</td>
                            <td className="whitespace-nowrap px-3 py-4">PowerPutt Girls</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">2 fer 1</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 3</td>
                            <td className="whitespace-nowrap px-3 py-4">2 Girls 1 Putt</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">The Course</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 4</td>
                            <td className="whitespace-nowrap px-3 py-4">Tee Time</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Divot and Goliath</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 5</td>
                            <td className="whitespace-nowrap px-3 py-4">Talk Birdie Too Me</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Know Clue</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 6</td>
                            <td className="whitespace-nowrap px-3 py-4">Guess what John Did?</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Reckless Drivers</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 8</td>
                            <td className="whitespace-nowrap px-3 py-4">Garden Girls</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Life Savers</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 9</td>
                            <td className="whitespace-nowrap px-3 py-4">Classy and Sassy</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Twisted Squirrels</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


                <div className="lg:grid gap-2 grid-cols-2">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="mb-12 overflow-hidden">
                      <table className="min-w-full table-fixed text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500 text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-xl">Week 7</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-center">Thursday, July 13, 2023</th>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 2</td>
                            <td className="whitespace-nowrap px-3 py-4">Twisted Squirrels</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">2 fer 1</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 3</td>
                            <td className="whitespace-nowrap px-3 py-4">Tee Time</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">The Course</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 4</td>
                            <td className="whitespace-nowrap px-3 py-4">Know Clue</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Guess what John Did?</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 5</td>
                            <td className="whitespace-nowrap px-3 py-4">Just Swinging</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">PowerPutt Girls</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 6</td>
                            <td className="whitespace-nowrap px-3 py-4">Life Savers</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Sara and Loren</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 7</td>
                            <td className="whitespace-nowrap px-3 py-4">Classy and Sassy</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">2 Girls 1 Putt</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 8</td>
                            <td className="whitespace-nowrap px-3 py-4">Perky Putters</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Reckless Drivers</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 9</td>
                            <td className="whitespace-nowrap px-3 py-4">Divot and Goliath</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Garden Girls</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>


                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="mb-12 overflow-hidden">
                      <table className="min-w-full table-fixed text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500 text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-xl">Week 8</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-center">Thursday, July 20, 2023</th>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 1</td>
                            <td className="whitespace-nowrap px-3 py-4">2 fer 1</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Perky Putters</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 2</td>
                            <td className="whitespace-nowrap px-3 py-4">Guess what John Did?</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Talk Birdie Too Me</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 3</td>
                            <td className="whitespace-nowrap px-3 py-4">Garden Girls</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Twisted Squirrels</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 4</td>
                            <td className="whitespace-nowrap px-3 py-4">Reckless Drivers</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">2 Girls 1 Putt</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 5</td>
                            <td className="whitespace-nowrap px-3 py-4">Life Savers</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Classy and Sassy</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 7</td>
                            <td className="whitespace-nowrap px-3 py-4">Tee Time</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Just Swinging</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 8</td>
                            <td className="whitespace-nowrap px-3 py-4">The Course</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Know Clue</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 9</td>
                            <td className="whitespace-nowrap px-3 py-4">PowerPutt Girls</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Divot and Goliath</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                

                <div className="lg:grid gap-2 grid-cols-2">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="mb-12 overflow-hidden">
                      <table className="min-w-full table-fixed text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500 text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-xl">Week 9</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-center">Thursday, July 27, 2023</th>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 1</td>
                            <td className="whitespace-nowrap px-3 py-4">The Course</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Classy and Sassy</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 3</td>
                            <td className="whitespace-nowrap px-3 py-4">2 Girls 1 Putt</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Life Savers</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 4</td>
                            <td className="whitespace-nowrap px-3 py-4">Talk Birdie Too Me</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Twisted Squirrels</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 5</td>
                            <td className="whitespace-nowrap px-3 py-4">Divot and Goliath</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Reckless Drivers</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 6</td>
                            <td className="whitespace-nowrap px-3 py-4">Garden Girls</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Perky Putters</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 7</td>
                            <td className="whitespace-nowrap px-3 py-4">PowerPutt Girls</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Tee Time</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 8</td>
                            <td className="whitespace-nowrap px-3 py-4">2 fer 1</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Guess what John Did?</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 9</td>
                            <td className="whitespace-nowrap px-3 py-4">Know Clue</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Just Swinging</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>


                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="mb-12 overflow-hidden">
                      <table className="min-w-full table-fixed text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500 text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-xl">Week 10</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <th scope="col" colspan="4" className="px-3 py-4 text-center">Thursday, August 3, 2023</th>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 1</td>
                            <td className="whitespace-nowrap px-3 py-4">Twisted Squirrels</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">PowerPutt Girls</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 2</td>
                            <td className="whitespace-nowrap px-3 py-4">Divot and Goliath</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">2 fer 1</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 3</td>
                            <td className="whitespace-nowrap px-3 py-4">Perky Putters</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Know Clue</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 4</td>
                            <td className="whitespace-nowrap px-3 py-4">Just Swinging</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">2 Girls 1 Putt</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 5</td>
                            <td className="whitespace-nowrap px-3 py-4">The Course</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Garden Girls</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 7</td>
                            <td className="whitespace-nowrap px-3 py-4">Reckless Drivers</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Classy and Sassy</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 8</td>
                            <td className="whitespace-nowrap px-3 py-4">Sara and Loren</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Tee Time</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Hole 9</td>
                            <td className="whitespace-nowrap px-3 py-4">Guess what John Did?</td>
                            <td className="whitespace-nowrap px-3 py-4">vs</td>
                            <td className="whitespace-nowrap px-3 py-4">Life Savers</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div> */}
    </div>
  );
}

export default WomensLeaguePage;
