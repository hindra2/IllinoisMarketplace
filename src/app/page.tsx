export default function Home() {
  return (
    <div className="flex pt-20">
      <aside
        className="fixed w-64 h-sideHeight bg-white rounded-2xl ml-3"
        aria-label="Sidebar"
      >
        {/* Sidebar content goes here */}
      </aside>
      <main className="flex-1"></main>
    </div>
  );
}
