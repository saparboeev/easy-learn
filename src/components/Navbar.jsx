import { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleScroll = window.scroll({
    top: 800,
    behavior: "smooth",
  });

  return (
    <nav className="border-b-[1px] border-bgBrown container mx-auto flex justify-between items-center pt-10 rounded-md pb-8 max-[500px]:flex-col max-[500px]:gap-y-10 fixed left-0 right-0 top-[0px] z-10 bg-bgOrange px-2">
      <Link
        to="/"
        className="max-[640px]:text-2xl sm:text-4xl text-bgBrown max-[500px]:w-full "
      >
        Easy Learn
      </Link>

      {/* <i className="sm:hidden max-[640px]:absolute max-[640px]:right-4 fa-solid fa-bars"></i> */}

      <ul className="w-[40%] flex justify-between font-bold max-[500px]:w-full max-[500px]:flex-col max-[500px]:gap-y-8">
        <li>
          <NavLink className='' to="/">
            Bosh sahifa
          </NavLink>
        </li>
        <li onClick={handleScroll}>
          <NavLink className=''>Kurslar</NavLink>
        </li>
        <li>
          <NavLink className='' to="infopage">Loyiha haqida</NavLink>
        </li>
        <li>
          <NavLink className='' to="faq">FAQ</NavLink>
        </li>
      </ul>

      <button
        onClick={(e) => handleClick(e)}
        className="w-[15%] bg-bgBrown text-white py-3 rounded-md text-md font-bold max-[500px]:w-1/2 "
      >
        Kirish
      </button>
    </nav>
  );
}

export default Navbar;
