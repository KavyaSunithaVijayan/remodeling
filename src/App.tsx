import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import GenericRoute from "./Routes";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa6";
import { BiLogoYelp } from "react-icons/bi";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <GenericRoute />
      </div>

      <Footer />
      <div className="hidden lg:block fixed bottom-5 left-5 ">
        <ul>
          <li className="text-white pb-5">
          <a href="https://www.facebook.com"><GrFacebookOption /></a>
          </li>
          <li className="text-white pb-5">
        <a href="https://www.instagram.com"> <FaInstagram /></a> 
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default App;
