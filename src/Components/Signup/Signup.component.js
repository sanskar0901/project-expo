import React, { useEffect, useState } from "react";
import logo from "../../Assets/logo.svg";
import logotext from "../../Assets/logotext.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URI } from "../../Constants/apiUrl";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import phool from "../../Assets/phoolpatti.svg";
// import { useNavigate } from "react-router";
function SignupComponent() {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const [phone, setPhone] = useState(null);
  const handleSignup = () => {
    const data = {
      name,
      email,
      password,
      phone,
    };
    navigate("/login");


    // axios
    //   .post(`${API_URI}/register/farmer`, data)
    //   .then((res) => {
    //     console.log(res.data);

    //     toast.success(`Signup Successful`);
    //     navigate("/login");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast.error(`Signup Failed`);
    //   });
  };
  const checkPassword = (a, b) => {
    if (a === b && a !== null && b !== null) {
      return true;
    }
    return false;
  };
  console.log(checkPassword(password, confirmPassword));
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-[#6261612a] bg-login-pattern bg-no-repeat bg-cover ">
        <div className="w-full flex justify-between pr-5 backdrop-brightness-50 h-full place-items-center px-10">
          <div className="w-full flex flex-col justify-center place-items-center">
            <img src={logo} />
            {/* <img src={logotext} /> */}
          </div>
          <form
            className="bg-white min-w-[35vw] w-[35vw] h-[95vh] px-16 place-items-center rounded-[20px] justify-center flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              handleSignup();
            }}
            style={{
              //   clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 90%)",
              //   inset: "0 0, 100% 0, 100% 100%, 0 90% round 30px",
              background: `url(${phool}), white`,
              borderRadius: "25px",
            }}
          >
            <div className="flex flex-col text-left gap-y-1 w-full py-4">
              <div className="font-ss text-[#0E4A67] text-3xl font-black ">
                Create Your Account
              </div>
              <div className="font-ss">
                <span className="text-[#37677E]">Already have an account?</span>{" "}
                <Link
                  to="/login"
                  className="inline-block align-baseline font-bold text-sm text-green-700 hover:text-green-600"
                  href="#"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="mb-16  w-full">
              <div className="flex flex-col items-start justify-between py-2">
                <label
                  className="block text-[#207198] font-ss text-[12px]   text-left"
                  htmlFor="email"
                >
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  className=" border-[#207198] shadow appearance-none border rounded-xl w-full py-2 px-3 text-green-300 leading-tight focus:outline-none focus:shadow-outline h-12"
                  id="email"
                  type="name"
                  placeholder="Cobb Spider"
                />
              </div>
              <div className="flex flex-col items-start justify-between py-2">
                <label
                  className="block text-[#207198] font-ss text-[12px]   text-left"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className=" border-[#207198] shadow appearance-none border rounded-xl w-full py-2 px-3 text-green-300 leading-tight focus:outline-none focus:shadow-outline h-12"
                  id="email"
                  type="email"
                  placeholder="Cob@gmail.com"
                />
              </div>
              <div className="flex flex-col items-start justify-between py-2">
                <label
                  className="block text-[#207198] font-ss text-[12px]   text-left"
                  htmlFor="email"
                >
                  Phone number
                </label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  className=" border-[#207198] shadow appearance-none border rounded-xl w-full py-2 px-3 text-green-300 leading-tight focus:outline-none focus:shadow-outline h-12"
                  id="email"
                  type="tel"
                  placeholder="+919284719..."
                />
              </div>
              <div className="flex flex-col items-start justify-between py-2">
                <label
                  className="block text-[#207198] text-[12px]   text-left"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-[#207198] shadow appearance-none border rounded-xl w-full py-2 px-3 text-green-300 leading-tight focus:outline-none focus:shadow-outline h-12"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>
              <div className="flex flex-col items-start justify-between py-2">
                <label
                  className="block text-[#207198] text-[12px]   text-left"
                  htmlFor="password"
                >
                  Confirm Password
                </label>
                <input
                  className="border-[#207198] shadow appearance-none border rounded-xl w-full py-2 px-3 text-green-300 leading-tight focus:outline-none focus:shadow-outline h-12"
                  id="password"
                  type="password"
                  placeholder="******************"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>
              <div className="flex items-center justify-between py-6">
                <button
                  type={"submit"}
                  disabled={!checkPassword(password, confirmPassword)}
                  className="bg-[#57AC49] disabled:bg-red-100 hover:bg-green-700 text-white font-ss  font-bold py-2 px-4 text-[20px] rounded-xl focus:outline-none focus:shadow-outline w-full h-12"
                >
                  Signup
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupComponent;
