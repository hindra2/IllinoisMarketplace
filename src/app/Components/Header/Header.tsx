import Link from "next/link";
import Image from 'next/image';
import {FaUserCircle} from "react-icons/fa"

const Header = () => {
    return (
        <header className="py-5 container mx-auto text-xl flex items-center justify-between">
            <div className="flex items-center">
                <Link href="/">
                    <Image src="/mainLogo.png" alt="Illinois Logo" width={200} height={100} />
                </Link>
            </div>

            <div className="flex flex-grow items-center mx-4 relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
                <input
                    type="search"
                    placeholder="Search Marketplace"
                    className="flex-grow pl-10 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500" // Adjusted padding-left to make space for the icon
                />
            </div>

            <div className="flex items-center">
                <Link href='/auth'>
                    <FaUserCircle className="cursor-pointer" size="2em" />
                </Link>
            </div>
        </header>
    );
};

export default Header;