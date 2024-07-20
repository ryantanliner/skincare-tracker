export default function Navbar({username}) {
  return(
    <div className="flex-none w-64 p-4 bg-gray-800 h-screen fixed">
      <div className="text-center mb-8">
        <img src="profile.jpg" alt="Profile" className="w-24 h-24 mx-auto rounded-full" />
        <h2 className="mt-4 text-xl font-semibold">{username}</h2>
      </div>
      <nav>
        <ul>
          <li className="mb-4"><a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-700"><span>Tracker</span></a></li>
          <li className="mb-4"><a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-700"><span>Profile</span></a></li>
          <li className="mb-4"><a href="/" className="flex items-center px-4 py-2 rounded hover:bg-gray-700" onClick={() => window.localStorage.removeItem('loggedUser')}><span>Log Out</span></a></li>
        </ul>
      </nav>
    </div>
  )
}