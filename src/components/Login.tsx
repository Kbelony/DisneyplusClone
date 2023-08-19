import ctalogo from "/assets/images/cta-logo-one.svg";

const Login = () => {
  return (
    <div className="login-page">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="CTA-logo-one pb-5">
          <img src={ctalogo} alt="" />
        </div>
        <h1 className=" text-5xl font-bold text-center pb-3">
          Nouvelles productions originales, grands films, séries incontournables
          et encore + en streaming
        </h1>
        <p className="mb-5">Sans coût additionnel. Sans engagement.*</p>
        <div className="signup-button mb-5">
          <a href="" className="p-4 px-24">
            <span className="text-xl">S'incrire</span>
          </a>
        </div>
        <p className="mb-6 text-center">
          Profitez de 12 mois au prix de 10 avec un abonnement annuel. Économies
          par rapport à un an d'abonnement mensuel.
        </p>
        {/* <div className="CTA-logo-two pb-5 flex items-center justify-center">
          <img src="src/assets/images/cta-logo-two.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Login;
