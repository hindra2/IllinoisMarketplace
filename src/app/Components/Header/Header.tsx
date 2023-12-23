import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-5 container mx-auto text-xl flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/mainLogo.png"
            alt="Illinois Logo"
            width={200}
            height={100}
          />
        </Link>
      </div>

      <div className="flex flex-grow items-center mx-4 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-8 h-8 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="search"
          placeholder="  Search Marketplace"
          className="flex-grow pl-10 pr-4 py-2 border border-white rounded-3xl focus:outline-none focus:border-blue-500 bg-white"
        />
      </div>

      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-11 h-11"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
