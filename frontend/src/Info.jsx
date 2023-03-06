import { BuildingStorefrontIcon, FlagIcon, ChatBubbleLeftRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Public Course',
    description:
      'Enjoy 9 challenging holes as you play seven par 4s and two par 3s with many trees to increase difficulty.',
    icon: FlagIcon,
  },
  {
    name: 'Restaurant & Bar',
    description:
      'Club house offers a restaurant and bar along with an outdoor patio to relax and enjoy the day.',
    icon: BuildingStorefrontIcon,
  },
  {
    name: 'Cart Rentals',
    description:
      "Don't feel like walking? We got you covered with our cart rentals.",
    icon: CheckCircleIcon,
  },
  {
    name: 'Friendly Environment',
    description:
      'The atmoshere at Beaver Meadows is unmatched, always a good time!',
    icon: ChatBubbleLeftRightIcon,
  },
]

export default function Info() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Beaver Meadows Golf & Country Club
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-900">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>


      {/* <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold leading-6 text-green-900 sm:text-3xl">Event Name</h3>
                <p className="mt-1 mb-5 max-w-2xl text-md text-black">04-29-23</p>
                <p className='text-base text-gray-800'>Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</p>
            </div>

            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 bg-gray-50">
                <h3 className="text-xl font-semibold leading-6 text-green-900 sm:text-3xl">Event Name</h3>
                <p className="mt-1 mb-5 max-w-2xl text-md text-black-500">Date</p>
                <p className='text-base text-gray-800'>Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</p>
            </div>
            
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold leading-6 text-green-900 sm:text-3xl">Event Name</h3>
                <p className="mt-1 mb-5 max-w-2xl text-md text-black-500">Date</p>
                <p className='text-base text-gray-800'>Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</p>
            </div>

            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 bg-gray-50">
                <h3 className="text-xl font-semibold leading-6 text-green-900 sm:text-3xl">Event Name</h3>
                <p className="mt-1 mb-5 max-w-2xl text-md text-black-500">Date</p>
                <p className='text-base text-gray-800'>Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</p>
            </div>

            
        </div> */}
    </div>

    
  )
}