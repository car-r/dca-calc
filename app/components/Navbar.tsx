import { Link } from "@remix-run/react";

export default function Navbar({toggle, isOpen}: any) {
    return (

        <nav className="py-4 bg-white shadow-sm">
            <div className="md:hidden pl-4">
                { isOpen ? 
                    <div onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg"  className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </div> : 
                    <div onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={toggle} className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </div>
                }
            </div>
            <div className="hidden md:block">

            
                <div className="flex justify-between px-4 items-center">
                    <Link to='/' className="font-bold text-2xl">DCA Calc</Link>
                    <div className="flex gap-8 font-semibold">
                    <Link className='p-2 rounded-md border border-white hover:bg-neutral-200 hover:ease-in-out hover:duration-300' 
                        to='/dca-calc-btc'>
                        BTC Calculator
                    </Link>
                    <Link className='p-2 rounded-md border border-white hover:bg-neutral-200 hover:ease-in-out hover:duration-300' 
                        to='/dca-calc'>
                        Stock Calculator
                    </Link>
                    <Link className='p-2 rounded-md border border-white hover:bg-neutral-200 hover:ease-in-out hover:duration-300' 
                        to='/dca-calc'>
                        About
                    </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}