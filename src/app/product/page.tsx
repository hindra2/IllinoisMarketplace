// rename folder "product" to [id]
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex pt-20">
      <main className="flex ml-[276px]">
        <div className="fixed rounded-2xl bg-white h-sideHeight w-5/6">
          <div className="w-[274px] h-[416px] overflow-hidden shadow-lg ml-3 mt-3 rounded-xl">
            <Image
              src="/placeholders/macbook.jpg"
              alt="Macbook"
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
