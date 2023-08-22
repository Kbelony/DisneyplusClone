import { auth, provider } from "../firebase";
import { User, signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";
import logo from "/assets/images/logo.png";
import homeicon from "/assets/images/home-icon.svg";
import searchicon from "/assets/images/search-icon.svg";
import watchlisticon from "/assets/images/watchlist-icon.svg";
import originalicon from "/assets/images/original-icon.svg";
import movieicon from "/assets/images/movie-icon.svg";
import seriesicon from "/assets/images/series-icon.svg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history("/DisneyplusClone/home");
      }
    });
  }, [userName]);
  const HandleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      signOut(auth).then(() => {
        dispatch(setSignOutState());
        history("/DisneyplusClone/");
      });
    }
  };

  const setUser = (user: User) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <nav>
      <div className="navbar-component">
        <ul className="nav-list flex justify-between pt-5 pl-9">
          <li className="nav-list-item">
            <a href="/DisneyplusClone/home">
              <picture className="logo ">
                <img className="w-24 mr-5" src={logo} alt="" />
              </picture>
            </a>
          </li>
          {userName ? (
            <>
              <div className="menu hidden md:flex">
                <li className="nav-list-item ">
                  <a href="/">
                    <div className="mr-4 p-2 flex">
                      <img className="w-8" src={homeicon} alt="" />
                      <span className="pt-1.5">HOME</span>
                    </div>
                  </a>
                </li>
                <li className="nav-list-item">
                  <a href="/">
                    <div className="mr-4 p-2 flex">
                      <img className="w-8" src={searchicon} alt="" />
                      <span className="pt-1.5">SEARCH</span>
                    </div>
                  </a>
                </li>
                <li className="nav-list-item">
                  <a href="/">
                    <div className="mr-4 p-2 flex">
                      <img className="w-8" src={watchlisticon} alt="" />
                      <span className="pt-1.5">WATCHLIST</span>
                    </div>
                  </a>
                </li>
                <li className="nav-list-item">
                  <a href="/">
                    <div className="mr-4 p-2 flex">
                      <img className="w-8" src={originalicon} alt="" />
                      <span className="pt-1.5">ORIGINALS</span>
                    </div>
                  </a>
                </li>
                <li className="nav-list-item">
                  <a href="/">
                    <div className="mr-4 p-2 flex">
                      <img className="w-8" src={movieicon} alt="" />
                      <span className="pt-1.5">MOVIES</span>
                    </div>
                  </a>
                </li>
                <li className="nav-list-item">
                  <a href="/">
                    <div className="mr-4 p-2 flex">
                      <img className="w-8" src={seriesicon} alt="" />
                      <span className="pt-1.5">SERIES</span>
                    </div>
                  </a>
                </li>
              </div>
              <li
                className="nav-list-item ml-auto"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a>
                  <img
                    className="user-photo rounded-full w-16 mr-6 mb-2 mt-2"
                    src={userPhoto}
                    alt={userName}
                  />
                </a>
                {isDropdownOpen && (
                  <div className="dropdown-menu mr-9 p-2">
                    <a onClick={HandleAuth}>Déconnexion</a>
                  </div>
                )}
              </li>
            </>
          ) : (
            <li className="nav-list-item ml-auto">
              <a onClick={HandleAuth}>
                <div className="login-button mr-9 p-2">
                  <span>s'identifier</span>
                </div>
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
