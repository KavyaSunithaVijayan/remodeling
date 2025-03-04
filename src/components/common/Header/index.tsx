import { Link } from "react-router-dom";
import { RouteNavigation } from "../../../Routes";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <div className="pt-2 md:fixed left-0 top-0 right-0 z-50">
      <div className="text-center mx-auto max-w-[1200px] md:hidden">
        <a href="tel:555-555-5555">
          <button type="button" className="text-white ">
            CALL NOW
          </button>
        </a>
      </div>
      <hr className="border-white md:hidden" />

      <div className="mx-auto max-w-[1200px] p-4 md:p-0">
        <div className="flex justify-between items-center">
          <h5 className="font-semibold text-[#F8F7F7] leading-5">
            Newel
            <br /> Residential <br />
            Remodeling
          </h5>
          <div className="items-center gap-6 hidden md:flex">
            <h6 className="text-[#F8F7F7] hover:text-[#BEB7B0]">
              {" "}
              <Link to={RouteNavigation.home}>HOME</Link>
            </h6>
            <button className="text-[#F8F7F7] hover:text-[#BEB7B0]">
              <Link to={RouteNavigation.service}>SERVICES</Link>
            </button>
              <h6 className="text-[#F8F7F7] hover:text-[#BEB7B0]">
              <a href="#contact">CONTACT</a>
            </h6>
            <a href="tel:555-555-5555">
            <button
              type="submit"
              className="text-[#F8F7F7] border border-white py-2 px-2 hover:text-[#BEB7B0] hover:border-[#BEB7B0] font-semibold"
            >
              CALL NOW
            </button>
            </a>
          </div>
          <div className="md:hidden ">
            <RxHamburgerMenu className="text-white text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
