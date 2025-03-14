import React from "react";
import MensLeague from "../components/MensLeague";

function MensLeaguePage() {
  return (
    <div className="bg-gray-50 dark:bg-[#0B0E0B]">
      <main>
        <div className="subpage-hero h-96 md:96 relative">
        
        </div>
      </main>
      <div className="-mt-28 md:px-6 py-1 lg:max-w-screen-2xl relative lg:grid grid-rows-1 grid-cols-3 mx-auto ">
        <section className="m-4 col-span-2 text-center sm:text-left ">
          <h1 className="uppercase text-white text-2xl tracking-wide font-normal pb-2">
            Men's League
          </h1>
          <div className="p-8 mb-8 bg-white dark:bg-zinc-900 rounded-sm drop-shadow">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  {/* <MensLeague /> */}
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
                                <td className="whitespace-nowrap px-6 py-4 font-medium">2024</td>
                                <td className="whitespace-nowrap px-6 py-4">River Rats</td>
                              </tr>
                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">2023</td>
                                <td className="whitespace-nowrap px-6 py-4">Catfish</td>
                              </tr>
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
            <h3 className="mb-2">2024 Team Names</h3>
              <hr className="mb-2"/>
              <table className="min-w-full table-fixed text-sm font-light">
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">1. Catfish</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">2. Wyffels</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">3. SSBE</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">4. JL Construction</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">5. Stub's Stallions</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">6. P-Burg Vet</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">7. Sneeds Insurance</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">8. Busch League</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">9. Maddogs</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">10. River Rats</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">11. Beer Muscles</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">12. Putt Pirates</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">13. Last Place</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">14. Falcons</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-3 py-2">15. New Old Guys</td>
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
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                 
                  <div className="mb-12 overflow-hidden">
                      <table className="min-w-full table-fixed text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500 text-center">
                          <tr>
                            <th scope="col" className="px-3 py-4 w-10"></th>
                            <th scope="col" className="px-3 py-4 font-medium">Hole 1</th>
                            <th scope="col" className="px-3 py-4">Hole 2</th>
                            <th scope="col" className="px-3 py-4">Hole 3</th>
                            <th scope="col" className="px-3 py-4">Hole 4</th>
                            <th scope="col" className="px-3 py-4">Hole 5</th>
                            <th scope="col" className="px-3 py-4">Hole 6</th>
                            <th scope="col" className="px-3 py-4">Hole 7</th>
                            <th scope="col" className="px-3 py-4">Hole 8</th>
                            <th scope="col" className="px-3 py-4">Hole 9</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Week 1</td>
                            <td className="whitespace-nowrap px-3 py-4">2 v 15</td>
                            <td className="whitespace-nowrap px-3 py-4">3 v 14</td>
                            <td className="whitespace-nowrap px-3 py-4">4 v 13</td>
                            <td className="whitespace-nowrap px-3 py-4">5 v 12</td>
                            <td className="whitespace-nowrap px-3 py-4">6 v 11</td>
                            <td className="whitespace-nowrap px-3 py-4">7 v 10</td>
                            <td className="whitespace-nowrap px-3 py-4">8 v 9</td>
                            <td className="whitespace-nowrap px-3 py-4"></td>
                            <td className="whitespace-nowrap px-3 py-4">1 v 16</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Week 2</td>
                            <td className="whitespace-nowrap px-3 py-4">7 v 8</td>
                            <td className="whitespace-nowrap px-3 py-4">6 v 9</td>
                            <td className="whitespace-nowrap px-3 py-4">5 v 10</td>
                            <td className="whitespace-nowrap px-3 py-4">4 v 11</td>
                            <td className="whitespace-nowrap px-3 py-4">3 v 12</td>
                            <td className="whitespace-nowrap px-3 py-4">2 v 13</td>
                            <td className="whitespace-nowrap px-3 py-4">1 v 15</td>
                            <td className="whitespace-nowrap px-3 py-4"></td>
                            <td className="whitespace-nowrap px-3 py-4">14 v 16</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Week 3</td>
                            <td className="whitespace-nowrap px-3 py-4">1 v 14</td>
                            <td className="whitespace-nowrap px-3 py-4">13 v 15</td>
                            <td className="whitespace-nowrap px-3 py-4">2 v 11</td>
                            <td className="whitespace-nowrap px-3 py-4">3 v 10</td>
                            <td className="whitespace-nowrap px-3 py-4">4 v 9</td>
                            <td className="whitespace-nowrap px-3 py-4">5 v 8</td>
                            <td className="whitespace-nowrap px-3 py-4">6 v 7</td>
                            <td className="whitespace-nowrap px-3 py-4"></td>
                            <td className="whitespace-nowrap px-3 py-4">12 v 16</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Week 4</td>
                            <td className="whitespace-nowrap px-3 py-4">5 v 6</td>
                            <td className="whitespace-nowrap px-3 py-4">4 v 7</td>
                            <td className="whitespace-nowrap px-3 py-4">3 v 8</td>
                            <td className="whitespace-nowrap px-3 py-4">2 v 9</td>
                            <td className="whitespace-nowrap px-3 py-4">1 v 13</td>
                            <td className="whitespace-nowrap px-3 py-4">11 v 15</td>
                            <td className="whitespace-nowrap px-3 py-4">12 v 14</td>
                            <td className="whitespace-nowrap px-3 py-4"></td>
                            <td className="whitespace-nowrap px-3 py-4">10 v 16</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Week 5</td>
                            <td className="whitespace-nowrap px-3 py-4">11 v 13</td>
                            <td className="whitespace-nowrap px-3 py-4">3 v 6</td>
                            <td className="whitespace-nowrap px-3 py-4">9 v 15</td>
                            <td className="whitespace-nowrap px-3 py-4">4 v 5</td>
                            <td className="whitespace-nowrap px-3 py-4">10 v 14</td>
                            <td className="whitespace-nowrap px-3 py-4">1 v 12</td>
                            <td className="whitespace-nowrap px-3 py-4">2 v 7</td>
                            <td className="whitespace-nowrap px-3 py-4"></td>
                            <td className="whitespace-nowrap px-3 py-4">8 v 16</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Week 6</td>
                            <td className="whitespace-nowrap px-3 py-4">3 v 4</td>
                            <td className="whitespace-nowrap px-3 py-4">10 v 12</td>
                            <td className="whitespace-nowrap px-3 py-4">2 v 5</td>
                            <td className="whitespace-nowrap px-3 py-4">8 v 14</td>
                            <td className="whitespace-nowrap px-3 py-4">7 v 15</td>
                            <td className="whitespace-nowrap px-3 py-4">9 v 13</td>
                            <td className="whitespace-nowrap px-3 py-4">1 v 11</td>
                            <td className="whitespace-nowrap px-3 py-4"></td>
                            <td className="whitespace-nowrap px-3 py-4">6 v 16</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Week 7</td>
                            <td className="whitespace-nowrap px-3 py-4">5 v15</td>
                            <td className="whitespace-nowrap px-3 py-4">9 v 11</td>
                            <td className="whitespace-nowrap px-3 py-4">6 v 14</td>
                            <td className="whitespace-nowrap px-3 py-4">7 v 13</td>
                            <td className="whitespace-nowrap px-3 py-4">2 v 3</td>
                            <td className="whitespace-nowrap px-3 py-4">1 v 10</td>
                            <td className="whitespace-nowrap px-3 py-4">8 v 12</td>
                            <td className="whitespace-nowrap px-3 py-4"></td>
                            <td className="whitespace-nowrap px-3 py-4">4 v 16</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Week 8</td>
                            <td className="whitespace-nowrap px-3 py-4">1 v 9</td>
                            <td className="whitespace-nowrap px-3 py-4">5 v 13</td>
                            <td className="whitespace-nowrap px-3 py-4">8 v 10</td>
                            <td className="whitespace-nowrap px-3 py-4">3 v 15</td>
                            <td className="whitespace-nowrap px-3 py-4">6 v 12</td>
                            <td className="whitespace-nowrap px-3 py-4">7 v 11</td>
                            <td className="whitespace-nowrap px-3 py-4">4 v 14</td>
                            <td className="whitespace-nowrap px-3 py-4"></td>
                            <td className="whitespace-nowrap px-3 py-4">2 v 16</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Week 9</td>
                            <td className="whitespace-nowrap px-3 py-4">2 v 14</td>
                            <td className="whitespace-nowrap px-3 py-4">1 v 8</td>
                            <td className="whitespace-nowrap px-3 py-4">7 v 9</td>
                            <td className="whitespace-nowrap px-3 py-4">6 v 10</td>
                            <td className="whitespace-nowrap px-3 py-4">5 v 11</td>
                            <td className="whitespace-nowrap px-3 py-4">4 v 12</td>
                            <td className="whitespace-nowrap px-3 py-4">3 v 13</td>
                            <td className="whitespace-nowrap px-3 py-4"></td>
                            <td className="whitespace-nowrap px-3 py-4">15 v 16</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Week 10</td>
                            <td className="whitespace-nowrap px-3 py-4">4 v 10</td>
                            <td className="whitespace-nowrap px-3 py-4">2 v 12</td>
                            <td className="whitespace-nowrap px-3 py-4">3 v 11</td>
                            <td className="whitespace-nowrap px-3 py-4">5 v 9</td>
                            <td className="whitespace-nowrap px-3 py-4">14 v 15</td>
                            <td className="whitespace-nowrap px-3 py-4">6 v 8</td>
                            <td className="whitespace-nowrap px-3 py-4">1 v 7</td>
                            <td className="whitespace-nowrap px-3 py-4"></td>
                            <td className="whitespace-nowrap px-3 py-4">13 v 16</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Week 11</td>
                            <td className="whitespace-nowrap px-3 py-4">5 v 7</td>
                            <td className="whitespace-nowrap px-3 py-4">3 v 9</td>
                            <td className="whitespace-nowrap px-3 py-4">12 v 15</td>
                            <td className="whitespace-nowrap px-3 py-4">4 v 8</td>
                            <td className="whitespace-nowrap px-3 py-4">1 v 6</td>
                            <td className="whitespace-nowrap px-3 py-4">13 v 14</td>
                            <td className="whitespace-nowrap px-3 py-4">2 v 10</td>
                            <td className="whitespace-nowrap px-3 py-4"></td>
                            <td className="whitespace-nowrap px-3 py-4">11 v 16</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Week 12</td>
                            <td className="whitespace-nowrap px-3 py-4">11 v 14</td>
                            <td className="whitespace-nowrap px-3 py-4">4 v 6</td>
                            <td className="whitespace-nowrap px-3 py-4">1 v 5</td>
                            <td className="whitespace-nowrap px-3 py-4">10 v 15</td>
                            <td className="whitespace-nowrap px-3 py-4">2 v 8</td>
                            <td className="whitespace-nowrap px-3 py-4">3 v 7</td>
                            <td className="whitespace-nowrap px-3 py-4">12 v 13</td>
                            <td className="whitespace-nowrap px-3 py-4"></td>
                            <td className="whitespace-nowrap px-3 py-4">9 v 16</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Week 13</td>
                            <td className="whitespace-nowrap px-3 py-4">8 v 15</td>
                            <td className="whitespace-nowrap px-3 py-4">11 v 12</td>
                            <td className="whitespace-nowrap px-3 py-4">2 v 6</td>
                            <td className="whitespace-nowrap px-3 py-4">9 v 14</td>
                            <td className="whitespace-nowrap px-3 py-4">10 v 13</td>
                            <td className="whitespace-nowrap px-3 py-4">1 v 4</td>
                            <td className="whitespace-nowrap px-3 py-4">3 v 5</td>
                            <td className="whitespace-nowrap px-3 py-4"></td>
                            <td className="whitespace-nowrap px-3 py-4">7 v 16</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Week 14</td>
                            <td className="whitespace-nowrap px-3 py-4">10 v 11</td>
                            <td className="whitespace-nowrap px-3 py-4">7 v 14</td>
                            <td className="whitespace-nowrap px-3 py-4">8 v 13</td>
                            <td className="whitespace-nowrap px-3 py-4">1 v 3</td>
                            <td className="whitespace-nowrap px-3 py-4">9 v 12</td>
                            <td className="whitespace-nowrap px-3 py-4">6 v 15</td>
                            <td className="whitespace-nowrap px-3 py-4">2 v 4</td>
                            <td className="whitespace-nowrap px-3 py-4"></td>
                            <td className="whitespace-nowrap px-3 py-4">5 v 16</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500 bg-zinc-100 dark:bg-zinc-800">
                            <td className="whitespace-nowrap px-3 py-4 w-10 font-medium">Week 15</td>
                            <td className="whitespace-nowrap px-3 py-4">1 v 2</td>
                            <td className="whitespace-nowrap px-3 py-4">9 v 10</td>
                            <td className="whitespace-nowrap px-3 py-4">5 v 14</td>
                            <td className="whitespace-nowrap px-3 py-4">6 v 13</td>
                            <td className="whitespace-nowrap px-3 py-4">4 v 15</td>
                            <td className="whitespace-nowrap px-3 py-4">7 v 12</td>
                            <td className="whitespace-nowrap px-3 py-4">8 v 11</td>
                            <td className="whitespace-nowrap px-3 py-4"></td>
                            <td className="whitespace-nowrap px-3 py-4">3 v 16</td>
                          </tr>
                        </tbody>
                      </table>
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

export default MensLeaguePage;
