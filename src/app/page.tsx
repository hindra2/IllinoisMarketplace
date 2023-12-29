import Image from "next/image";
export default function Home() {
  return (
    <div className="flex pt-20">
      <aside
        className="fixed w-[256px] h-sideHeight bg-white rounded-2xl ml-[10px]"
        aria-label="Sidebar"
      >
        <div className="absolute top-[350px] left-0 right-0 px-4">
          <span className="flex text-2xl text-black">Price</span>
          <input
            id="labels-range-input"
            type="range"
            defaultValue="1000"
            min="100"
            max="1500"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-300"
          />
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-3">
            <span>$100</span>
            <span>$500</span>
            <span>$1000</span>
            <span>$1500</span>
          </div>
        </div>

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
          <div className="w-[274px] h-[416px] overflow-hidden shadow-lg ml-3 mt-3 rounded-xl">
            <Image
              src="/placeholders/macbook.jpg"
              alt="Product Name"
              width={274}
              height={274}
              objectFit="cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Macbook Pro 16-inch</div>
              <p className="text-gray-700 text-base">$499</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
