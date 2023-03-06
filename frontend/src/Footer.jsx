/* const navigation = [
  { name: 'Footer Navigation', href: 'https//www.beavermeadowsgolf.org', current: false },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
*/ 
export default function Footer() {
  return (
    <footer className="bg-gray-50 shadow-inner border-t">
      <div className="bg-white py-6 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-3">

              <div className="mx-auto md:flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600"></dt>
                <dd className="order-first text-base font-semibold tracking-tight text-gray-900">
                  <p>Beaver Meadows Golf and Country Club<br/>
                  32078 HIGHWAY 14<br/>
                  Parkersburg, IA 50665<br/>
                  <a href="tel:3193461870">Ph: 319-346-1870</a></p>
                </dd>
                

              </div>
              <div className="hidden mx-auto md:flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600"></dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  
                </dd>
                

              </div>
              <div className="hidden text-center md:text-left mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600"></dt>
                <dd className="order-first text-base font-semibold tracking-tight text-gray-900">
                  
                </dd>
                

              </div>

          </dl>
        </div>
      </div>
          {/* <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                <div className="hidden sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:text-black',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center sm:static text-gray-900">
                Ph: 319-346-1870
              </div>
            </div>
          </div> */}
    </footer>
  )
}
