import React, { useState } from "react";
import axios from "axios";
import { API_URI } from "../../Constants/apiUrl";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../../Assets/logo.svg";
import logotext from "../../Assets/logotext.svg";
import phool from "../../Assets/phoolpatti.svg";

// import loginbg from '../../../Assets/loginbg.png'
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleLogin = () => {
    const data = {
      email,
      password,
    };
    navigate("/");

    // axios
    //   .post(`${API_URI}/login`, data)
    //   .then((res) => {
    //     console.log(res.data);
    //     // setUser(res.data.data)
    //     console.log(res.data);
    //     Cookies.set("uid", res.data.data);
    //     localStorage.setItem("user", JSON.stringify(res.data.data));
    //     console.log(Cookies);
    //     toast.success(`Login Successful`);
    //     navigate("/");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast.error(`Login Failed`);
    //   });
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-[#6261612a] bg-login-pattern bg-no-repeat bg-cover ">
        <div className="w-full flex justify-between pr-5 backdrop-brightness-50 h-full place-items-center px-10">
          <div className="w-full flex flex-col justify-center place-items-center">
            <img src={logo} />
            {/* <img src={logotext} /> */}
          </div>
          <form
            className="bg-white min-w-[35vw] w-[35vw] h-[95vh] px-16 place-items-center rounded-3xl justify-center flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            style={{
              // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 90%)",
              background: `url(${phool}), white`,
              inset: "0 0, 100% 0, 100% 100%, 0 90% round 10px",
              borderRadius: "25px",
            }}
          >
            <div className="flex flex-col text-left gap-y-1 w-full py-4">
              <div className="font-ss text-[#0E4A67] text-3xl font-black ">
                Login
              </div>
              <div className="font-ss">
                <span className="text-[#37677E]">Don't have an account?</span>{" "}
                <Link
                  to="/signup"
                  className="inline-block align-baseline font-bold text-sm text-green-700 hover:text-green-600"
                  href="#"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="mb-10  w-full">
              <div className="flex flex-col items-start justify-between py-4">
                <label
                  className="block text-[#207198] font-ss text-[12px]  text-left"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className=" border-[#207198] shadow appearance-none border rounded-xl w-full py-2 px-3 text-green-300 leading-tight focus:outline-none focus:shadow-outline h-14"
                  id="email"
                  type="email"
                  placeholder="Cob@gmail.com"
                />
              </div>
              <div className="flex flex-col items-start justify-between py-4">
                <label
                  className="block text-[#207198] text-[12px]  text-left"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-[#207198] shadow appearance-none border rounded-xl w-full py-2 px-3 text-green-300 leading-tight focus:outline-none focus:shadow-outline h-14"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>
              <div className="flex items-center justify-between py-16">
                <button
                  type={"submit"}
                  className="bg-[#57AC49] hover:bg-green-700 text-white font-ss  font-bold py-2 px-4 text-[20px] rounded-xl focus:outline-none focus:shadow-outline w-full h-14"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
