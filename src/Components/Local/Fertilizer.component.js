import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_URI } from "../../Constants/apiUrl";
import loc from "../../Assets/location.svg";
import Navbar from "../Home/Navbar";
import food from "../../Assets/food.svg";
import winner from "../../Assets/winner.svg";
import leaf from "../../Assets/phoolpatti.svg";
import { BsCloudRainFill } from "react-icons/bs";
import { SlChemistry } from "react-icons/sl";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { GiChemicalDrop, GiChemicalTank, GiStoneSphere } from "react-icons/gi";
import { TbPlant2 } from "react-icons/tb";
import { BsMoisture } from "react-icons/bs";

const FertilizerComp = () => {
  const [K, setK] = useState("");
  const [P, setP] = useState("");
  const [N, setN] = useState("");
  const [temp, setTemp] = useState("");
  const [humid, setHumid] = useState("");
  const [moisture, setMoisture] = useState("");
  const [cropCode, setCropCode] = useState("");
  const [soilCode, setSoilCode] = useState("");

  const [fert, setFert] = useState("");
  const soilType = ["Black", "Clayey", "Loamy", "Red", "Sandy"]
  const cropType = ["Barley", "Cotton", "Groundnuts", "Maize", "Millets", "Oilseeds", "Paddy", "Pulses", "Sugar Cane", "Tobacco", "Wheat"]

  const checkFertilizer = async () => {
    const res = await axios.post(`${API_URI}/fertilizer`, {
      temp,
      humid,
      moisture,
      N,
      K,
      P,
      soilCode,
      cropCode,
    });
    console.log(cropCode)
    console.log(soilCode)
    console.log(res.data);
    setFert(res.data);
  };




  return (
    <div className="w-full flex-col">
      <Navbar />
      <div
        className="w-[99vw] relative h-[98vh]  ml-2 rounded-3xl"
        style={{
          background: `url(${loc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col pt-[5rem] gap-12">
          <p className="font-ss text-black font-black text-[3rem] w-[80%] mx-auto">
            Unlock Your Farming Potential: "Identify Your Ideal Fertilizer with Our
            Expert Assistance"
          </p>
          <p className="font-ss text-black opacity-80 font-black text-[1.5rem] w-[80%] mx-auto ">
            A Step-by-Step Guide to Selecting the Right Fertilizer for Your Land and
            Climate Conditions
          </p>
          <div className="flex flex-row mx-auto w-[80%] justify-between  font-ss">
            <div
              className="w-[66%] bg-white rounded-xl h-[45vh] flex flex-row drop-shadow-xl shadow-md p-5 text-xl font-bold"
              style={{
                background: `url(${leaf}), #fff`,
              }}
            >
              <div className="flex flex-col basis-[50%] justify-evenly border-r-2 border-dotted gap-[2vh]">
                <div className="flex flex-row place-items-center gap-x-4">
                  <GiChemicalTank className="text-[3vw]" />
                  <div className="flex flex-col items-start">
                    <lable className=" relative mb-[-2vh] bg-[#ffffff] ml-3">Nitrogen</lable>
                    <input
                      placeholder="Nitrogen % in soil"
                      onChange={(e) => setN(e.target.value)}

                      value={N}
                      className="px-4 py-3 rounded-lg border-2"
                    ></input>
                  </div>

                </div>
                <div className="flex flex-row place-items-center gap-x-4">
                  <SlChemistry className="text-[3vw]" />
                  <div className="flex flex-col items-start">
                    <lable className=" relative mb-[-2vh] bg-[#ffffff] ml-3">Phosporus</lable>
                    <input
                      placeholder="Phosporus % in soil"
                      onChange={(e) => setP(e.target.value)}

                      value={P}
                      className="px-4 py-3 rounded-lg border-2"
                    ></input>
                  </div>

                </div>
                <div className="flex flex-row place-items-center  gap-x-4">
                  <GiChemicalDrop className="text-[3vw]" />
                  <div className="flex flex-col items-start">
                    <lable className=" relative mb-[-2vh] bg-[#ffffff] ml-3">Potassium</lable>
                    <input
                      placeholder="Pottassium % in soil"
                      onChange={(e) => setK(e.target.value)}
                      value={K}
                      className="px-4 py-3 rounded-lg border-2"
                    ></input>
                  </div>

                </div>
                <div className="flex flex-row place-items-center  gap-x-4">
                  <GiStoneSphere className="text-[3vw]" />
                  <select onChange={(e) => setSoilCode(e.target.value)} className="px-4 py-3 rounded-lg border-2 w-[18.5vw]">
                    {
                      soilType.map((item, index) => {
                        return <option value={index}>{item}</option>
                      })
                    }
                  </select>
                </div>
              </div>
              <div className="flex flex-col basis-[50%] justify-evenly border-r-2 border-dotted gap-[2vh]">
                <div className="flex flex-row place-items-center gap-x-4">
                  <CiTempHigh className="text-[3vw]" />
                  <div className="flex flex-col items-start">
                    <lable className=" relative mb-[-2vh] bg-[#ffffff] ml-3">Temperature</lable>
                    <input
                      placeholder="temperature in Kelvin"
                      onChange={(e) => setTemp(e.target.value)}
                      value={temp}
                      className="px-4 py-3 rounded-lg border-2"
                    ></input>
                  </div>

                </div>
                <div className="flex flex-row place-items-center gap-x-4">
                  <WiHumidity className=" text-[3vw]" />
                  <div className="flex flex-col items-start">
                    <lable className=" relative mb-[-2vh] bg-[#ffffff] ml-3">Humidity</lable>
                    <input
                      placeholder="humidity in %"
                      onChange={(e) => setHumid(e.target.value)}

                      value={humid}
                      className="px-4 py-3 rounded-lg border-2"
                    ></input>
                  </div>

                </div>
                <div className="flex flex-row place-items-center gap-x-4">
                  <BsMoisture className=" text-[3vw]" />
                  <div className="flex flex-col items-start">
                    <lable className=" relative mb-[-2vh] bg-[#ffffff] ml-3">Moisture</lable>
                    <input
                      placeholder="Moisture in %"
                      onChange={(e) => setMoisture(e.target.value)}

                      value={moisture}
                      className="px-4 py-3 rounded-lg border-2"
                    ></input>
                  </div>

                </div>
                <div className="flex flex-row place-items-center  gap-x-4">
                  <TbPlant2
                    className="text-[3vw]" />
                  <select onChange={(e) => setCropCode(e.target.value)} className="px-4 py-3 rounded-lg border-2 w-[18.5vw]" defaultValue={"0"}>
                    {
                      cropType.map((item, index) => {
                        return <option value={index}>{item}</option>
                      })
                    }
                  </select>
                </div>
              </div>


            </div>
            <div className=" flex flex-col gap-2 items-center h-[40vh]">
              <div className="flex flex-row place-items-center gap-x-4">
                {/* <img src={long}></img> */}
                <button
                  onClick={(e) => { e.preventDefault(); checkFertilizer() }}

                  className="px-4 py-3 rounded-lg border-2 bg-[#57AC49] w-[20vw]  text-white text-lg font-bold font-ss"
                >Check Fertilizer</button>
              </div>

              <div
                className="basis-[30%] rounded-xl h-[37vh] w-[25vw] flex flex-col drop-shadow-xl shadow-md p-5"
                style={{
                  background: `url(${food})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <img src={winner} className="max-w-[50%] mx-auto -mb-5 z-[1]" />
                <div className="bg-white w-[90%] mx-auto h-[22vh] flex flex-col gap-y-2">
                  <p className="text-xl text-black font-black mt-5">
                    Recommanded Fertilizer:<br />
                    <p className="text-3xl text-[#57AC49] font-black">
                      {fert}
                    </p>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img src={loc} className="object-cover w-[97vw] mx-auto mt-5"></img> */}
      </div>
      {/* <div className="flex flex-row flex-wrap flex-grow-0 gap-4 mt-[10rem] mx-auto w-[95%] justify-center">
        {cropData?.map((item, index) => {
          return <SingleCrop data={item} key={index} />;
        })}
      </div> */}
    </div>
  );
};

export default FertilizerComp;

