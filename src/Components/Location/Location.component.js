import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_URI } from "../../Constants/apiUrl";
import toast from "react-hot-toast";
import SingleCrop from "./SingleCrop.component";
import loc from "../../Assets/location.svg";
import Navbar from "../Home/Navbar";
import lat from "../../Assets/lat.svg";
import long from "../../Assets/long.svg";
import city from "../../Assets/city.svg";
import food from "../../Assets/food.svg";
import winner from "../../Assets/winner.svg";
import leaf from "../../Assets/phoolpatti.svg";
const Locationcomponent = () => {
  const [location, setLocation] = useState({});
  const [cropData, setCropData] = useState([]);
  useEffect(() => {
    const getLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => console.error("Error: Geolocation service failed.")
        );
      } else {
        console.error("Error: Your browser does not support geolocation.");
      }
    };

    getLocation();
    // axios.get(`${API_URI}/crops/fatchall`).then((res) => {
    //   console.log(res.data);
    // });
    if (location.lat && location.lng && !cropData.length) {
      const data = {
        lat: location.lat,
        long: location.lng,
      };

      axios
        .post(`${API_URI}/crops/`, data)
        .then((res) => {
          console.log(res.data);
          setCropData(res.data.data);
          // setUser(res.data.data)
          toast.success(`Login Successful`);
          // navigate('/')
        })
        .catch((err) => {
          console.log(err);
          toast.error(`Login Failed`);
        });
    }
  }, [location]);

  return (
    <div className="w-full flex-col">
      <Navbar />
      <div
        className="w-[99vw] relative h-[98vh] mt-2 ml-2 rounded-3xl"
        style={{
          background: `url(${loc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col pt-[10rem]">
          <p className="font-ss text-black font-black text-[3rem] w-[80%] mx-auto">
            Unlock Your Farming Potential: "Identify Your Ideal Crop with Our
            Expert Assistance"
          </p>
          <p className="font-ss text-black opacity-80 font-black text-[1.5rem] w-[80%] mx-auto mt-9">
            A Step-by-Step Guide to Selecting the Right Crop for Your Land and
            Climate Conditions
          </p>
          <div className="flex flex-row mx-auto w-[80%] justify-between translate-y-[25vh] font-ss">
            <div
              className="w-[66%] bg-white rounded-xl h-[37vh] flex flex-row drop-shadow-xl shadow-md p-5 text-xl font-bold"
              style={{
                background: `url(${leaf}), #fff`,
              }}
            >
              <div className="flex flex-col basis-[50%] justify-evenly border-r-2 border-dotted">
                <div className="flex flex-row place-items-center gap-x-4">
                  <img src={lat}></img>
                  <input
                    placeholder="Latitude"
                    disabled
                    value={location?.lat}
                    className="px-4 py-3 rounded-lg"
                  ></input>
                </div>
                <div className="flex flex-row place-items-center  gap-x-4">
                  <img src={long}></img>
                  <input
                    placeholder="Longitude"
                    disabled
                    value={location?.lng}
                    className="px-4 py-3 rounded-lg"
                  ></input>
                </div>
              </div>
              <div className="ml-10 basis-[40%] flex-col flex justify-center place-items-center">
                <img src={city} />
                <input
                  placeholder="City"
                  disabled
                  value={cropData?.[0]?.District_Name}
                  className="px-4 py-3 rounded-lg text-center mt-5"
                ></input>
              </div>
            </div>
            <div
              className="basis-[30%] rounded-xl h-[37vh] w-[30%] flex flex-col drop-shadow-xl shadow-md p-5"
              style={{
                background: `url(${food})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <img src={winner} className="max-w-[50%] mx-auto -mb-5 z-[1]" />
              <div className="bg-white w-[90%] mx-auto h-[22vh] flex flex-col gap-y-2">
                <p className="text-3xl text-black font-black mt-5">
                  {cropData?.[0]?.Crop}
                </p>
                <p>Production/Area: {cropData?.[0]?.Calc} </p>
                <p>Duration: {cropData?.[0]?.Season} </p>
              </div>
            </div>
          </div>
        </div>
        {/* <img src={loc} className="object-cover w-[97vw] mx-auto mt-5"></img> */}
      </div>
      <div className="flex flex-row flex-wrap flex-grow-0 gap-4 mt-[10rem] mx-auto w-[95%] justify-center">
        {cropData?.map((item, index) => {
          return <SingleCrop data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Locationcomponent;

// import React, { useState, useEffect } from "react";

// const Locationcomponent = () => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch("https://services.india.gov.in/feed/rss?cat_id=12&ln=en");
//             const text = await response.text();
//             const parser = new DOMParser();
//             const xml = parser.parseFromString(text, "text/xml");
//             setData(xml);
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             {data ? (
//                 <ul>
//                     {Array.from(data.getElementsByTagName("item")).map((item, index) => (
//                         <li key={index}>
//                             <h2>{item.getElementsByTagName("title")[0].textContent}</h2>
//                             <p>{item.getElementsByTagName("description")[0].textContent}</p>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Loading data...</p>
//             )}
//         </div>
//     );
// };

// export default Locationcomponent;
