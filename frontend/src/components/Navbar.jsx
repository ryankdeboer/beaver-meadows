import { React, Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  FlagIcon,
  XMarkIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

// const holes = [
//   { name: 'Hole 1', href: 'hole-1', icon: FlagIcon },
//   { name: 'Hole 2', href: 'hole-2', icon: FlagIcon },
//   { name: 'Hole 3', href: 'hole-3', icon: FlagIcon },
//   { name: 'Hole 4', href: 'hole-4', icon: FlagIcon },
//   { name: 'Hole 5', href: 'hole-5', icon: FlagIcon },
//   { name: 'Hole 6', href: 'hole-6', icon: FlagIcon },
//   { name: 'Hole 7', href: 'hole-7', icon: FlagIcon },
//   { name: 'Hole 8', href: 'hole-8', icon: FlagIcon },
//   { name: 'Hole 9', href: 'hole-9', icon: FlagIcon },
// ]

const rates = [
  { name: 'Daily Rates', href: '/daily-rates', icon: CurrencyDollarIcon },
  { name: 'Memberships', href: '/memberships', icon: ChatBubbleLeftIcon },
  { name: 'Clubhouse Rental', href: '/clubhouse-rental', icon: BuildingStorefrontIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [state] = useState(false);

  return (
    
      <header className="bg-white shadow-sm w-full sm:bg-white/[1] sm:fixed top-0 left-0 right-0 z-40">
        <div className={state?"sm:bg-white":""}>
        <nav className="mx-auto flex lg:max-w-screen-2xl items-center justify-between p-3 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Beaver Meadows Golf & Country Club</span>
              <span className="">
                <img src="../images/logo.svg" alt="" className="w-auto h-10" />
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden uppercase lg:flex lg:gap-x-5">
            <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-900">
              About
            </Link>
            
            <Link to="/tournaments" className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-900">
              Tournaments
            </Link>
            <Link to="/events" className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-900">
              Events
            </Link>
            <Link to="/league-standings" className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-900">
              League Standings
            </Link>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 uppercase text-sm font-semibold leading-6 text-gray-900 hover:text-green-900">
                Rates
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-900" aria-hidden="true" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute top-full right-0 z-10 mt-3 w-60 min-w-sm overflow-hidden rounded-sm bg-white  shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {rates.map((rate) => (
                      <div
                        key={rate.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-6 flex-none items-center justify-center rounded-lg group-hover:bg-gray-50">
                          <rate.icon className="h-6 w-6 text-gray-600 group-hover:text-green-900" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={rate.href} className="block font-semibold text-gray-900 hover:text-green-900">
                            {rate.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            {/* <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 uppercase text-sm font-semibold leading-6 text-gray-900 hover:text-green-900">
                Course
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-900" aria-hidden="true" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute top-full right-0 z-10 mt-3 w-56 min-w-sm overflow-hidden rounded-sm bg-white  shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {holes.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-6 flex-none items-center justify-center rounded-lg group-hover:bg-gray-50">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-green-900" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900 hover:text-green-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover> */}
          </Popover.Group> 
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
            
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5">
                <span className="sr-only">Beaver Meadows Golf Course & Country Club</span>
                <span className="">
                  <img src="../images/logo_small.svg" alt="" className="w-auto h-10" />
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 uppercase">
                  <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-green-900" >
                    About
                  </Link>
                  
                  <Link to="/tournaments" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-green-900" >
                    Tournaments
                  </Link>
                  <Link to="/events" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-green-900" >
                    Events
                  </Link>
                  
                  <Link to="/league-standings" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-green-900" >
                      League Standings
                  </Link>
                  
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold uppercase leading-7 hover:bg-gray-50">
                          Rates
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...rates].map((rate) => (
                            <Disclosure.Button
                              key={rate.name}
                              as="a"
                              href={rate.href}
                              className="flex gap-x-3 items-center rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              <div className="h-6 items-center justify-center rounded-lg">
                                <rate.icon className="h-6 w-6 text-gray-600 group-hover:text-green-900" aria-hidden="true" />
                              </div>
                              {rate.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  {/* <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold uppercase leading-7 hover:bg-gray-50">
                          Course
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...holes].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="flex gap-x-3 items-center rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              <div className="h-6 items-center justify-center rounded-lg">
                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-green-900" aria-hidden="true" />
                              </div>
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure> */}
                  
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        </div>
      </header>

    
    
  )
}
