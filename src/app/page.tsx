export default function Home() {
  return (
    <div className="flex pt-20">
      <aside
        className="fixed w-[256px] h-sideHeight bg-white rounded-2xl ml-[10px]"
        aria-label="Sidebar"
      >
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
      </aside>
      <main className="flex ml-[276px]">
        <div className="fixed rounded-2xl bg-white h-sideHeight w-5/6">
          {/* Content of the rectangle container goes here */}
        </div>
      </main>
    </div>
  );
}
