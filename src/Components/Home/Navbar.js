import React, { useState, useEffect } from "react";
import logo from "../../Assets/navlogo.svg";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 30 ? setScroll(true) : setScroll(false);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full bg-[#57AC4990]">
      <nav
        className={clsx(
          "flex items-center justify-between flex-wrap p-4 rounded-sm",
          {
            "bg-transparent": !scroll,
          }
        )}
      >
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="flex items-center flex-shrink-0 text-black mr-6 gap-8">
          <Link to="/disease" className="font-semibold text-xl tracking-tight">
            Disease
          </Link>
          <Link to="/crop" className="font-semibold text-xl tracking-tight">
            Crop
          </Link>
          <Link to="/fertilizer" className="font-semibold text-xl tracking-tight">
            Fertilizer
          </Link>
          <Link to="/anouncement" className="font-semibold text-xl tracking-tight">
            Announcements
          </Link>
          <Link to="/voice" className="font-semibold text-xl tracking-tight">
            Assistant
          </Link>
        </div>

        <div className="flex items-center gap-2 text-white">
          <div id="google_element"></div>

          {Cookies.get("uid") ? (
            <Link to="/login">
              <button
                className="inline-block text-sm px-4 py-2 leading-none rounded bg-white text-teal-500 hover:border-transparent hover:bg-teal-500 hover:text-white mt-4 lg:mt-0"
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
                <button className="inline-block text-sm px-4 py-2 leading-none rounded text-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
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
