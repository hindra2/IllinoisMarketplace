import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 py-5 flex items-center justify-between px-3 z-50">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/mainLogo.png"
            alt="Illinois Logo"
            width={256}
            height={100}
            layout="fixed"
          />
        </Link>
      </div>

      <div className="flex-grow flex items-center mx-4 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Image
            src="/searchIcon.png"
            alt="Search Icon"
            width={24} // You might want to reduce the size so it fits within the input
            height={20}
            layout="fixed"
          />
        </div>
        <input
          type="search"
          placeholder="Search Marketplace"
          className="w-full pl-10 pr-20 py-3 border border-gray-300 rounded-3xl focus:outline-none bg-white" // Adjust pl value to match icon's width plus some padding
        />
      </div>

      <div className="flex items-center">
        <Image
          src="/accountLogo.png"
          alt="Illinois Logo"
          width={46}
          height={100}
          layout="fixed"
        />
      </div>
    </header>
  );
};

export default Header;
