export default function Home() {
  return (
    <div className="flex pt-20">
      <aside
        className="fixed w-1/6 h-sideHeight bg-white rounded-2xl ml-3"
        aria-label="Sidebar"
      >
        {/* Sidebar content goes here */}
      </aside>
      <main className="flex-1">{/* Main content goes here */}</main>
    </div>
  );
}
