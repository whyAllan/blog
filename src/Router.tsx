import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import PlanetIcon from "./icon/icons8-planet-66.png";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function Router() {
  let { language } = useParams();

  // Detect language
  if (language === undefined) {
    if (
      navigator.language.toLowerCase() === "pt-br" ||
      navigator.language.toLowerCase() === "pt"
    ) {
      language = "pt";
    } else language = "en";
  }

  function changeLanguage() {
    if (language === "pt") {
      language = "en";
    } else {
      language = "pt";
    }
    const url = window.location.hash;
    let path = url.split("/")[2];
    if (path === undefined) path = "";
    window.location.href = "#/" + language + "/" + path;
  }

  return (
    <>
      <Navbar language={language} />
      <div className="change-language" onClick={changeLanguage}>
        <img src={PlanetIcon} alt="change language icon" />
        <span>{language}</span>
      </div>
      <Routes>
        <Route path="/" element={<Home language={language} key={language} />} />
      </Routes>
    </>
  );
}

export default Router;
