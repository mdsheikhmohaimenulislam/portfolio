import { Link } from "react-scroll";

const NavBar = () => {
  const navItems = (
    <>
      {["home", "project", "skills", "about", "contact"].map((item) => (
        <li key={item}>
          <Link
            to={item}
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-blue-500 font-extrabold border-b-2 border-blue-500"
            className="text-lg font-semibold cursor-pointer hover:text-blue-500"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="w-full sticky top-0 z-50 bg-gray-200 px-4 shadow">
      <div className="navbar max-w-7xl mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="avatar">
                <div className="w-10 rounded-full bg-blue-500">
                  <img src="/logo1.png" alt="Logo" />
                </div>
              </div>
              <h1 className="hidden md:block text-2xl font-extrabold">
                Mohaimenul Islam
              </h1>
            </div>
          </Link>
        </div>

        {/* Navbar Center - Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">{navItems}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {/* Resume Button */}
          <a
            href="/Mohaimenulislam.pdf"
            download
            className="hidden  lg:inline-block text-sm sm:text-base bg-blue-500 text-white font-bold rounded-2xl px-4 py-2 hover:bg-blue-600 transition"
          >
            Download Resume
          </a>

          {/* Mobile Dropdown */}
          <div className="dropdown dropdown-end lg:hidden ml-2">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 space-y-2"
            >
              {navItems}
              <li>
                <a
                  href="/MohaimenulIslam resume (2).pdf"
                  download
                  className="bg-blue-500 text-white px-3 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
