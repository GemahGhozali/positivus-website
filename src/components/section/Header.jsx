import MenuSvg from "../svg/MenuSvg";
import XSvg from "../svg/XSvg";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { navlinks } from "../../constants/constants";
import { useState } from "react";

const Header = () => {
   const [open, setOpen] = useState(false);
   const handleCloseNavbar = () => setOpen(false);
   const handleOpenNavbar = () => setOpen(true);

   return (
      <header className="fixed top-0 left-0 z-40 w-full bg-white xl:relative">
         <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:max-xl:container">
            {/* HEADER LOGO */}
            <Logo color="black" />

            <nav className={`paragraph xl:heading-4 hide-scrollbar z-50 flex w-full gap-10 overflow-y-auto duration-300 max-xl:absolute max-xl:top-0 max-xl:h-screen max-xl:flex-col max-xl:bg-white max-xl:p-5 min-[450px]:w-96 min-[450px]:max-xl:shadow-2xl xl:w-auto xl:items-center ${open ? "right-0" : "-right-[100%]"}`}>
               {/* CLOSE BUTTON */}
               <button onClick={handleCloseNavbar} className="w-fit xl:hidden">
                  <XSvg className="xs:size-8 size-7" />
               </button>

               {/* NAVLINKS */}
               {navlinks.map((link, index) => (
                  <a href={link.url} onClick={handleCloseNavbar} key={index}>
                     {link.name}
                  </a>
               ))}

               {/* CTA BUTTON */}
               <Button color="transparent" className="xl:w-auto">
                  Request a quote
               </Button>
            </nav>

            {/* HAMBURGER MENU */}
            <button onClick={handleOpenNavbar} className="xl:hidden">
               <MenuSvg className="xs:size-8 size-7" />
            </button>
         </div>
      </header>
   );
};

export default Header;
