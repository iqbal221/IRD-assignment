import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className="md:w-[1246px] md:h-[50px] w-[327px] h-[50px] navbar bg-base-100 md:mx-auto mt-[34px]">
      <div className=" dropdown  lg:hidden">
        <label tabIndex={0} className="btn btn-ghost ">
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
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Home</a>
          </li>

          <li>
            <a>Program</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li className="text-base">
            <a className={styles.btn}>Log in</a>
          </li>
        </ul>
      </div>
      <div className="navbar-start">
        <a className={styles.logo1}>
          <span className={styles.logo2}>Gym</span>baran
        </a>
      </div>
      <div className="lg:navbar-end hidden lg:flex">
        <ul className="text-base text-black menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>

          <li>
            <a>Program</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>

      <div className="text-base hidden lg:flex ">
        <a className={styles.btn}>Log in</a>
      </div>
    </div>
  );
};

export default Navbar;
