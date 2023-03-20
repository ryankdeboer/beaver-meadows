import React from "react";
import SubpageContact from "../components/SubpageContact";

function DailyRatesPage() {
  return (
    <div className="bg-gray-50">
      <main>
        <div className="subpage-hero h-80 md:96 relative"></div>
      </main>
      <div className="-mt-28 md:px-6 py-1 lg:max-w-screen-2xl relative lg:grid grid-rows-1 grid-cols-3 mx-auto">
        <section className="m-4 col-span-2 text-center sm:text-left ">
          <h1 className="uppercase text-white text-2xl tracking-wide font-normal pb-2">
            Daily Rates
          </h1>
          <div className="p-8 mb-8 bg-white rounded-sm drop-shadow">
            {/* <div class="mb-4 pb-4 sm:mb-0 sm:pb-0 border-b sm:border-none">
                <h4 class="mb-2 text-base font-medium leading-6 text-black sm:text-xl">
                  Green Fees
                </h4>
                <p class="pb-5 text-sm text-gray-700">
                  <ul>
                    <li>9 Holes: $10.00</li>
                    <li>18 Holes: $15.00</li>
                  </ul>
                </p>
              </div>
              <div class="">
                <h4 class="mb-2 text-base font-medium leading-6 text-black sm:text-xl">
                  Cart Fees
                </h4>
                <p class="pb-5 text-sm text-gray-700">
                  <ul>
                    <li>9 Holes: $15.00</li>
                    <li>18 Holes: $20.00</li>
                    <li>Trail Fees: $6.00</li>
                  </ul>
                </p>
              </div> */}


            <div class="mb-12 flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-left text-sm font-light">
                      <thead class="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" class="px-3 py-4">9 Hole Costs</th>
                          <th scope="col" class="px-3 py-4">Before 4/30/22</th>
                          <th scope="col" class="px-3 py-4">After 5/1/23</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap px-3 py-4 font-medium">Family (with children between ages 13-20)</td>
                          <td class="whitespace-nowrap px-3 py-4">$510.00</td>
                          <td class="whitespace-nowrap px-3 py-4">$535.00</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap px-3 py-4 font-medium">Couples-shared living space</td>
                          <td class="whitespace-nowrap px-3 py-4">$460.00</td>
                          <td class="whitespace-nowrap px-3 py-4">$485.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>


            <div class="mb-12 flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-left text-sm font-light">
                      <thead class="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" class="px-3 py-4">18 Hole Costs</th>
                          <th scope="col" class="px-3 py-4">Before 4/30/22</th>
                          <th scope="col" class="px-3 py-4">After 5/1/23</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap px-3 py-4 font-medium">Family (with children between ages 13-20)</td>
                          <td class="whitespace-nowrap px-3 py-4">$510.00</td>
                          <td class="whitespace-nowrap px-3 py-4">$535.00</td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap px-3 py-4 font-medium">Couples-shared living space</td>
                          <td class="whitespace-nowrap px-3 py-4">$460.00</td>
                          <td class="whitespace-nowrap px-3 py-4">$485.00</td>
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
