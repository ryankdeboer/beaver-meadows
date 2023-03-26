import React from 'react'
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
  
function Features() {
  return (



        <div className="bg-gray-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                <p className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Beaver Meadows Golf & Country Club
                </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {features.map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                        <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-900">
                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {feature.name}
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-white">{feature.description}</dd>
                    </div>
                    ))}
                </dl>
                </div>
            </div>
        </div> 
        )
    }
    
export default Features