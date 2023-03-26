import { React } from 'react'
import { Link } from 'react-router-dom'

const navigations = [
  {
    id:1,
    name: "About",
    href: "/about"
  },
  {
    id:2,
    name: "Tournaments",
    href: "/tournaments"
  },
  {
    id:3,
    name: "Events",
    href: "/events"
  },
  {
    id:4,
    name: "League Standings",
    href: "/league-standings"
  },
];

const rates = [
  {
    id:1,
    name: "Daily Rates",
    href: "/daily-rates"
  },
  {
    id:2,
    name: "Memberships",
    href: "/memberships"
  },
  {
    id:3,
    name: "Clubhouse Rental",
    href: "/clubhouse-rental"
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-zinc-900 p-8 sm:py-12 text-sm leading-6 ">
      <div className=" max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex">
          <div className="text-center justify-center md:flex-none w-1/2 lg:flex lg:space-y-0">
            <div className="">
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                Navigation
              </h2>
              <ul className="mt-3 space-y-2">
                {navigations.map((navigation) => (
                <li>
                  <Link key={navigation.id} to={navigation.href} className={classNames(
                     'text-gray-900 dark:text-white hover:text-green-900',
                      'py-2 text-sm font-medium'
                    )} >
                    {navigation.name}
                  </Link>
                </li>
                ))}
              </ul>
            </div>
            
          </div>
          <div className="text-center justify-center md:flex-none w-1/2 lg:flex lg:space-y-0">
            <div className="">
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                Rates
              </h2>
              <ul className="mt-3 space-y-2">
                {rates.map((rate) => (
                <li>
                  <Link key={rate.id} to={rate.href} className={classNames(
                     'text-gray-900 dark:text-white hover:text-green-900',
                      'py-2 text-sm font-medium'
                    )} >
                    {rate.name}
                  </Link>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-10 border-t dark:border-t-zinc-800 flex-none text-center md:text-left md:flex justify-between">
          <div>
            <a href="https://www.google.com/maps/dir//Beaver+Meadows+Golf+and+Country+Club+32078+HIGHWAY+14+Parkersburg,+IA+50665/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x87f021ee328888d3:0x5dd7a4a163042361?sa=X&ved=2ahUKEwirh9jW_OX9AhVIlGoFHfLmAXEQ9Rd6BAhEEAQ">
              <span className="dark:hidden">
                <img src="../images/logo.svg" alt="" className="mx-auto mb-10 w-auto h-10" />
              </span>
              <span className="hidden dark:block">
                <img src="../images/logo_dark.svg" alt="" className="mx-auto mb-10 w-auto h-10" />
              </span>
            </a>
          </div>
          <div className="dark:text-white">
            <a href="tel:3193461870">Ph: 319-346-1870</a><br/>
            <a href="https://www.facebook.com/profile.php?id=100057310845821">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
