import React from 'react'
import SubpageContact from "../components/SubpageContact";

function MembershipsPage() {
  return (
    <div className="bg-gray-50 dark:bg-[#0B0E0B]">
      <main>
          <div className="subpage-hero h-96 md:96 relative">
          
          </div>
      </main>
      <div className="-mt-28 md:px-6 py-1 lg:max-w-screen-2xl relative lg:grid grid-rows-1 grid-cols-3 mx-auto">
        <section className="m-4 col-span-2 text-center sm:text-left ">
        <h1 className='uppercase text-white text-2xl tracking-wide font-normal pb-2'>Memberships</h1>
          <div className="p-8 mb-8 bg-white dark:bg-zinc-900 rounded-sm drop-shadow">
            <div className="mb-12 flex flex-col dark:text-white">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" className="px-3 py-4">Memberships</th>
                          <th scope="col" className="px-3 py-4">Before 4/30/22</th>
                          <th scope="col" className="px-3 py-4">After 5/1/23</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-3 py-4 font-medium">Family (with children between ages 13-20)</td>
                          <td className="whitespace-nowrap px-3 py-4">$510.00</td>
                          <td className="whitespace-nowrap px-3 py-4">$535.00</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-3 py-4 font-medium">Couples-shared living space</td>
                          <td className="whitespace-nowrap px-3 py-4">$460.00</td>
                          <td className="whitespace-nowrap px-3 py-4">$485.00</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-3 py-4 font-medium">Single</td>
                          <td className="whitespace-nowrap px-3 py-4">$350.00</td>
                          <td className="whitespace-nowrap px-3 py-4">$375.00</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-3 py-4 font-medium">Student (HS & College)</td>
                          <td className="whitespace-nowrap px-3 py-4">$160.00</td>
                          <td className="whitespace-nowrap px-3 py-4">$185.00</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-3 py-4 font-medium">Wednesday League Only</td>
                          <td className="whitespace-nowrap px-3 py-4">$260.00</td>
                          <td className="whitespace-nowrap px-3 py-4">$285.00</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-3 py-4 font-medium">Cart Shed Rental (this includes the trail fee)</td>
                          <td className="whitespace-nowrap px-3 py-4">$175.00</td>
                          <td className="whitespace-nowrap px-3 py-4">$200.00</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-3 py-4 font-medium">Trail Fees* (Trail fees apply if you store your cart off the course premises)</td>
                          <td className="whitespace-nowrap px-3 py-4">$6/day</td>
                          <td className="whitespace-nowrap px-3 py-4">$100/year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-lg text-center mb-12 dark:text-white">HALF PRICE APPLIES TO MEMBERSHIP FEE ONLY</div>

            <ul className="text-sm mb-5 dark:text-white">
              <li>* All membership rates and fees must be paid before playing on the course or greens fees will apply.</li>
              <li>* Kids 13 years of age and older will need a student or family membership.</li>
              <li>* Couples must be living together and share same address.</li>
              <li>* Anyone over the age of 20 cannot be included on Family membership.</li>
              <li>* Membership is required to participate in the Men's League.</li>
              <li>* All College Applicants must provide a student ID along with proof of age. College applicants must be 23 years of age or younger and enrolled on a full-time basis at a college or university.</li>
              <li>* Trail fees apply if you store your cart off of the course premises.</li>
              <li>* Full Membership at Legend Trail will result in half price membership for those having a Parkersburg address.</li>
              <li>* Non Parkersburg residents who are members at ARC or Legend Trail will pay half price for membership.</li>
              <li>* Members who pay for shed rental or a trail fee will be given a card. An identification card will be placed where you park your cart in the shed.</li>
              <li>* Rental carts MUST remain on the Beaver Meadows course property at all times.</li>
              <li>* Cart Rental drivers must have a valid learners permit/license from the state.</li>
              <li>* Please fill out your complete address if you wish to receive future mailings.</li>
            </ul>
              
            <div className="block text-center mt-5 dark:text-white"><a href="./files/2023-Membership-Form.pdf" target="_blank">Download Membership Form</a></div>


















            
          </div>
          
        </section>
        <section className="m-4 col-span-1 row-span-1">
          <SubpageContact/>
        </section>
      </div>
        
      
    </div>
)
}

export default MembershipsPage