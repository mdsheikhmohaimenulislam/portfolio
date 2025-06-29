import { Link } from "react-scroll";

const NavBar = () => {

const likn = (
  <>
    <li>
      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        activeClass="text-blue-500 font-extrabold border-b-2 border-blue-500"
        className="text-xl font-extrabold cursor-pointer"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="project"
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        activeClass="text-blue-500 font-extrabold border-b-2 border-blue-500"
        className="text-xl font-extrabold cursor-pointer"
      >
        Project
      </Link>
    </li>
    <li>
      <Link
        to="skills"
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        activeClass="text-blue-500 font-extrabold border-b-2 border-blue-500"
        className="text-xl font-extrabold cursor-pointer"
      >
        Skills
      </Link>
    </li>
    <li>
      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        activeClass="text-blue-500 font-extrabold border-b-2 border-blue-500"
        className="text-xl font-extrabold cursor-pointer"
      >
        About
      </Link>
    </li>
    <li>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        activeClass="text-blue-500 font-extrabold border-b-2 border-blue-500"
        className="text-xl font-extrabold cursor-pointer"
      >
        Contact
      </Link>
    </li>
  </>
);



  return (
    <div className="sticky top-0 z-50 bg-gray-200  px-4">
      <div className="navbar">
        {/* Start */}
        <div className="navbar-start">
          <Link to="/">
            <div className="flex items-center">
              <div className="avatar">
                <div className="w-10 rounded-full bg-blue-500">
                  <img src="/logo1.png" alt="Logo" />
                </div>
              </div>
              <h1 className="hidden md:block ml-2 text-2xl font-extrabold">
                Mohaimenul Islam
              </h1>
            </div>
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden md:block lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
{likn}
          </ul>
        </div>

        {/* End */}
        <div className="navbar-end space-x-3">
          <button className="btn bg-blue-500 text-white rounded-2xl font-bold hidden md:block">
            Resume
          </button>

          {/* Mobile Dropdown */}
          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-40"
            >
              {likn}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
