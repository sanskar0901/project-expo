import React, { useState, useEffect } from "react";
import logo from "../../Assets/navlogo.svg";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
// import Link from 'react-router-dom'
function Navbar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > 30 ? setScroll(true) : setScroll(false);
    });
    // window.scrollY > 0 ? setScroll(true) : setScroll(false);
  }, []);
  return (
    <div className=" fixed w-[100vw] flex align-center justify-center z-20 bg-[#57AC4990]">
      <nav
        className={clsx(
          "flex items-center justify-between flex-wrap p-6  rounded-sm w-[100vw]  ",
          {
            "bg-transparent": !scroll,
          }
        )}
      >
        <img src={logo} alt="logo" />

        <div className="flex items-center flex-shrink-0 text-black mr-6 gap-8">
          <a href={"/disease"} className="font-semibold text-xl tracking-tight">
            Disease
          </a>
          <a href={"/crop"} className="font-semibold text-xl tracking-tight">
            Crop
          </a>
          <a href={"/fertilizer"} className="font-semibold text-xl tracking-tight">
            Fertilizer
          </a>
          <a href={"/anouncement"} className="font-semibold text-xl tracking-tight">
            Anouncements
          </a>
        </div>
        <div className="flex items-between  gap-2 text-white mr-6">
          <div
            className=""
            id="google_element"
          // onClick={handleClick}
          ></div>
          {Cookies.get("uid") ? (
            <Link to="/login">
              <button
                className="inline-block text-sm px-4 py-2 leading-none  rounded bg-white text-teal-500  hover:border-transparent hover:bg-teal-500 hover:text-white mt-4 lg:mt-0 "
                onClick={() => {
                  Cookies.remove("uid");
                }}
              >
                Logout
              </button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button className="inline-block text-sm px-4 py-2 leading-none  rounded text-white  hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="inline-block text-sm px-4 py-2 leading-none border bg-white rounded text-[#57AC49] hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
