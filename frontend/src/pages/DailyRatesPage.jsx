import React from "react";
import SubpageContact from "../components/SubpageContact";

function DailyRatesPage() {
  return (
    <div className="bg-gray-50 dark:bg-[#0B0E0B]">
      <main>
        <div className="subpage-hero h-96 md:96 relative">
        
        </div>
      </main>
      <div className="-mt-28 md:px-6 py-1 lg:max-w-screen-2xl relative lg:grid grid-rows-1 grid-cols-3 mx-auto ">
        <section className="m-4 col-span-2 text-center sm:text-left ">
          <h1 className="uppercase text-white text-2xl tracking-wide font-normal pb-2">
            Daily Rates
          </h1>
          <div className="p-8 mb-8 bg-white dark:bg-zinc-900 rounded-sm drop-shadow">
            


            <div className="mb-12 flex flex-col dark:text-white">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" className="px-3 py-4"></th>
                          <th scope="col" className="px-3 py-4">Green Fees</th>
                          <th scope="col" className="px-3 py-4">Cart Rental</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-3 py-4 font-medium">9 Hole Costs</td>
                          <td className="whitespace-nowrap px-3 py-4">$15</td>
                          <td className="whitespace-nowrap px-3 py-4">$15</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-3 py-4 font-medium">18 Hole Cost</td>
                          <td className="whitespace-nowrap px-3 py-4">$20</td>
                          <td className="whitespace-nowrap px-3 py-4">$20</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-3 py-4 font-medium">Trail Fees</td>
                          <td className="whitespace-nowrap px-3 py-4"></td>
                          <td className="whitespace-nowrap px-3 py-4">$6</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="m-4 col-span-1 row-span-1">
          <SubpageContact />
        </section>
      </div>
    </div>
  );
}

export default DailyRatesPage;
