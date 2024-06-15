import Contact from "./Contact";

const Header = () => {
  return (
    <div className="navbar bg-white text-blue-900 flex justify-between ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              a
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black-900 rounded-box w-52"
          >
            <li>
              <a className="hover:bg-blue-100">Parent</a>
            </li>
            <li>
              <a className="hover:bg-blue-100">Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-blue-900">Reading Book</a>
      </div>
      <div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="hover:bg-blue-100" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:bg-blue-100" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:bg-blue-100" href="#ReadNow">
                Read Now
              </a>
            </li>
            <li>
              <a className="hover:bg-blue-100" href="#contact">
                Contact Now
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-blue-500 text-white hover:bg-blue-700 border-none">
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
