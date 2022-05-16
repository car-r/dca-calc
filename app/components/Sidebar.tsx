import { Link } from "@remix-run/react";

export default function SideBar({ toggle, isOpen}: any) {
    return (
        <div className={
            isOpen ? `min-h-screen absolute z-50 w-full  transform transition duration-200 ease-in-out md:hidden`
            : `min-h-screen absolute z-50 w-full  inset-y-0 transform -translate-y-full transition duration-300 ease-in-out md:hidden`
        }
        onClick={toggle}
        >
            <nav className="py-4 bg-white shadow-sm">
            <div className="flex flex-col px-4">
                <Link to='/' className="font-bold text-2xl p-2">DCA Calc</Link>
                <div className="flex flex-col font-semibold">
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
        </nav>
        </div>
    )
}