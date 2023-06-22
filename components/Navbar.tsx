import { useCallback, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  return (
    <nav className="w-full fixed z-40">
      <div
        className="
                px-4
                md:px-16
                py-6
                flex
                flex-row
                items-center
                transition
                duration-500
                bg-zinc-900
                bg-opacity-90
            "
      >
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />
        <div
          className="
                    flex-row
                    ml-8
                    gap-7
                    hidden
                    lg:flex
                "
        >
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        {/*for mobile screens */}
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center ml-8 gap-2 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className="text-white transition" />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row gap-7 ml-auto items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition ">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition ">
            <BsBell />
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer realative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 overflow-hidden rounded-md">
              <img src="/images/default-blue.png" alt="logo" />              
            </div>
            <BsChevronDown className="text-white transition" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
