import React from "react";
import Navbar from "./Navbar";
import home from "../../Assets/jaundice.svg";
import dirtyhand from "../../Assets/dirtyhand.svg";
import gptrn from "../../Assets/greenptrnbg.svg";
import paisa from "../../Assets/paisa.svg";
import FYC from "../../Assets/FindYourCrop.svg";
import ILC from "../../Assets/ILC.svg";
import IAP from "../../Assets/IAP.svg";
import CWU from "../../Assets/CWU.svg";
import ANU from "../../Assets/anounce.svg";
import form from "../../Assets/form.svg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Voice from "../Voice/Voice.component";

function HomeComponent() {
  return (
    <div>
      <Navbar className="fixed" />
      <div
        className="w-screen h-screen bg-no-repeat bg-center"
        style={{
          backgroundSize: "cover",
        }}
      >
        <img src={home} className="object-contain mx-auto w-full h-full" />
        <button
          className="bg-white text-black font-bold font-ss py-2 px-4 rounded-xl absolute w-32 sm:w-[16vw] h-14 sm:h-[7vh]"
          style={{
            left: "4vw",
            top: "66vh",
          }}
        >
          Try Now
        </button>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center bg-white p-8 sm:p-16">
          <p className="text-4xl font-bold font-ss text-[#57AC49] text-center">
            Services
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8 sm:mt-16">
            <Link to="/crop" className="hover:scale-110">
              <img src={FYC} alt="" />
            </Link>
            <Link to="/Fertilizer" className="hover:scale-110">
              <img src={ILC} alt="" />
            </Link>
            <Link to="/razorpay" className="hover:scale-110">
              <img src={IAP} alt="" />
            </Link>
            <Link to="/anouncement" className="hover:scale-110">
              <img src={ANU} alt="" />
            </Link>
            <img src={CWU} className="hover:scale-110" alt="" />
            <Link to="/forum" className="hover:scale-110">
              <img src={form} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between w-full h-[80vh] bg-wfptrn">
        <img src={dirtyhand} alt="" className="w-full sm:w-[50vw] object-contain" />
        <div className="flex flex-col gap-4 sm:gap-16 p-8 sm:p-16">
          <p className="text-4xl font-bold font-ss text-[#57AC49] text-center sm:text-left">
            Maximize Your Farming Success with GPS-Based Crop Recommendations
          </p>
          <p className="text-2xl font-normal font-ss text-[#57AC49] text-center sm:text-left">
            A Step-by-Step Guide to Selecting the Right Crop for Your Land and Climate Conditions
          </p>
          <Link
            to="/crop"
            className="bg-[#57AC49] text-white font-bold font-ss py-2 px-2 rounded-xl w-32 sm:w-[16vw] h-14 sm:h-[7vh] hover:bg-white hover:text-[#57AC49] flex justify-center items-center mx-auto sm:mx-0"
          >
            Try Now
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between w-full h-[80vh] bg-no-repeat rounded-[5vh]" style={{ background: `url(${gptrn}), #57AC49` }}>
        <img src={paisa} alt="" className="w-full sm:w-[40vw] pt-8 sm:pt-[4vh] rounded-[2vw] object-contain" />
        <div className="flex flex-col gap-4 sm:gap-16 p-8 sm:p-16">
          <p className="text-4xl font-bold font-ss text-white text-center sm:text-left">
            Stay Ahead of the Game: Stay Informed About Government Schemes and Programs for Farmers
          </p>
          <p className="text-2xl font-normal font-ss text-white text-center sm:text-left">
            A Comprehensive Guide to Available Support from Central and State Governments
          </p>
          <Link className="bg-white text-[#57AC49] font-bold font-ss py-2 px-4 rounded-xl w-32 sm:w-[16vw] h-14 sm:h-[7vh] hover:bg-white hover:text-[#57AC49] flex justify-center items-center mx-auto sm:mx-0" to="/razorpay">
            Inform Aid Programs
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeComponent;
