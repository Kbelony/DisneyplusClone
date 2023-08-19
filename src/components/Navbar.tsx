import logo from "/assets/images/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-component ">
        <ul className="nav-list flex justify-between pt-5 pl-9 ">
          <li className="nav-list-item">
            <a href="/">
              <picture className="logo">
                <img className="w-24" src={logo} alt="" />
              </picture>
            </a>
          </li>
          <li className="nav-list-item">
            <a href="/">
              <div className="login-button mr-9 p-2">
                <span>s'identifier</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
