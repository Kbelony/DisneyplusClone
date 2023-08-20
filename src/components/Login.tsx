import { auth, provider } from "../firebase";
import { User, signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";
import ctalogo1 from "/assets/images/cta-logo-one.svg";
import ctalogo2 from "/assets/images/cta-logo-two.png";

const Login = () => {
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
    <div className="login-page">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="CTA-logo-one pb-5">
          <img src={ctalogo1} alt="" />
        </div>
        <h1 className="text-2xl md:text-5xl font-bold text-center pb-3">
          Nouvelles productions originales, grands films, séries incontournables
          et encore + en streaming
        </h1>
        <p className="mb-5">Sans coût additionnel. Sans engagement.*</p>
        <div onClick={HandleAuth} className="signup-button mb-5">
          <a className="p-4 px-24">
            <span className="text-xl ">S'IDENTIFIER</span>
          </a>
        </div>
        <p className="mb-6 text-center">
          Profitez de 12 mois au prix de 10 avec un abonnement annuel. Économies
          par rapport à un an d'abonnement mensuel.
        </p>
        <div className="CTA-logo-two pb-5 flex items-center justify-center">
          <img src={ctalogo2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
