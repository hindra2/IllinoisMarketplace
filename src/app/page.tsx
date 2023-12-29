import Image from "next/image";
export default function Home() {
  return (
    <div className="flex pt-20">
      <aside
        className="fixed w-[256px] h-sideHeight bg-white rounded-2xl ml-[10px]"
        aria-label="Sidebar"
      >
        <span className="absolute flex text-2xl ml-4 text-black mt-[463px]">
          Categories
        </span>

        <div className="absolute flex items-center ml-3 mt-[500px]">
          <div className="w-12 h-12 bg-buttonBlue rounded-full flex justify-center items-center">
            <Image
              src="/categories/electronic.png"
              alt="Electronic"
              width={25}
              height={25}
            />
          </div>
          <span className="ml-2 text-xl">Electronics</span>
        </div>

        <div className="absolute flex items-center ml-3 mt-[555px]">
          <div className="w-12 h-12 bg-buttonBlue rounded-full flex justify-center items-center">
            <Image
              src="/categories/apparel.png"
              alt="Apparel"
              width={25}
              height={25}
            />
          </div>
          <span className="ml-2 text-xl">Apparel</span>
        </div>

        <div className="absolute flex items-center ml-3 mt-[610px]">
          <div className="w-12 h-12 bg-buttonBlue rounded-full flex justify-center items-center">
            <Image
              src="/categories/medicine.png"
              alt="Medicine"
              width={25}
              height={25}
            />
          </div>
          <span className="ml-2 text-xl">Medicine</span>
        </div>

        <div className="absolute flex items-center ml-3 mt-[665px]">
          <div className="w-12 h-12 bg-buttonBlue rounded-full flex justify-center items-center">
            <Image
              src="/categories/books.png"
              alt="Books"
              width={25}
              height={25}
            />
          </div>
          <span className="ml-2 text-xl">Books</span>
        </div>

        <div className="absolute flex items-center ml-3 mt-[720px]">
          <div className="w-12 h-12 bg-buttonBlue rounded-full flex justify-center items-center">
            <Image
              src="/categories/appliances.png"
              alt="Appliances"
              width={25}
              height={25}
            />
          </div>
          <span className="ml-2 text-xl">Appliances</span>
        </div>
      </aside>
      <main className="flex ml-[276px]">
        <div className="fixed rounded-2xl bg-white h-sideHeight w-5/6">
          {/* Content of the rectangle container goes here */}
        </div>
      </main>
    </div>
  );
}
