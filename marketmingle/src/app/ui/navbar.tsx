'use client'

export default function Navbar() {
    return (
      <main>
        <nav className="bg-[#333] flex justify-between items-center p-3 z-10">
          <div className="text-2xl text-white">
            <a href="#">MarketMingle</a>
          </div>
          <button className="text-white md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
          <ul className="list-none m-0 p-0 hidden md:flex">
            <li className="px-3 py-3"><a href="#" className="text-white">Home</a></li>
            <li className="px-3 py-3"><a href="#" className="text-white">Products</a></li>
            <li className="px-3 py-3 relative group">
              <a href="#" className="text-white block decoration-none">Categories</a>
              <div className="hidden group-hover:block absolute top-full left-0 bg-[#333] text-white w-64">
                <a href="#" className="block py-3 px-5 hover:bg-[#555] hover:text-white">Shoes</a>
                <a href="#" className="block py-3 px-5 hover:bg-[#555] hover:text-white">Clothings</a>
                <a href="#" className="block py-3 px-5 hover:bg-[#555] hover:text-white">Bags</a>
              </div>
            </li>
            <li className="px-3 py-3"><a href="#" className="text-white">About</a></li>
            <li className="px-3 py-3">
              <form action="/action_page.php" className="inline">
                <input type="text" placeholder="Search" name="search" className="border-none outline-none bg-white text-black w-50" />
              </form>
            </li>
          </ul>
        </nav>
      </main>
    );
}
  