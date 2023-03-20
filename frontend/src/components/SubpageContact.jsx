import React from 'react'

function SubpageContact() {
    return (
        <div>
            <h3 className='uppercase text-center sm:text-left text-gray-900 lg:text-white text-2xl tracking-wide font-normal pb-2'>Contact</h3>
            <div className="p-8 mb-4 text-center sm:text-left bg-white rounded-sm drop-shadow ">
                <div className="mb-4 pb-4 sm:mb-0 sm:pb-0 border-b sm:border-none">
                    <h4 className="mb-2 text-base font-medium leading-6 text-black ">Club House</h4>
                    <div className='pb-5 text-sm text-gray-700'> 
                        <ul>
                            <li>
                            Hours are seasonal
                            </li> 
                            <li>
                            <a href="tel:3193461870">Ph: 319-346-1870</a>
                            </li>    
                        </ul>
                    
                    </div>
                </div>
                <div className="">
                <h4 className="mb-2 text-base font-medium leading-6 text-black">Address</h4>
                    <div className='pb-5 text-sm text-gray-700'> 
                    
                    <p><a href="https://www.google.com/maps/dir//Beaver+Meadows+Golf+and+Country+Club+32078+HIGHWAY+14+Parkersburg,+IA+50665/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x87f021ee328888d3:0x5dd7a4a163042361?sa=X&ved=2ahUKEwirh9jW_OX9AhVIlGoFHfLmAXEQ9Rd6BAhEEAQ" target="_blank" rel="noreferrer">Beaver Meadows Golf & Country Club<br/>
                    32078 HIGHWAY 14<br/>
                    Parkersburg, IA 50665</a>
                    </p>
                    
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default SubpageContact
