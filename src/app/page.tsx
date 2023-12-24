import Image from "next/image";
export default function Home() {
  return (
    <div className="flex pt-20">
      <aside
        className="fixed w-[256px] h-sideHeight bg-white rounded-2xl ml-[10px]"
        aria-label="Sidebar"
      >
        <Image
          src="/categories/medicine.png"
          alt="Medical"
          width={20}
          height={100}
          layout="fixed"
        />
      </aside>
      <main className="flex ml-[276px]">
        <div className="fixed rounded-2xl bg-white h-sideHeight w-5/6">
          {/* Content of the rectangle container goes here */}
        </div>
      </main>
    </div>
  );
}
