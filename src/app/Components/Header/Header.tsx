import Link from "next/link";
import Image from 'next/image';

const Header = () => {
    return (
        <header className = "py-10 px-4 container mx-auto text-xl flex flex-wrap md: flex-nowrap items-center justify-between">
            <div className="flex items-center w-full md: 2/3">
                <Link href="/">
                    <Image src="/mainLogo.png" alt="MainLogo" width={200} height={100}/>
                </Link>
            </div>
        </header>

    );
};

export default Header;