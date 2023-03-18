import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_URI } from "../../Constants/apiUrl";
import SingleCrop from "../Location/SingleCrop.component";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";
const Localcropcomponent = () => {
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
          //   toast.success(`Login Successful`);
          // navigate('/')
        })
        .catch((err) => {
          console.log(err);
          //   toast.error(`Login Failed`);
        });
    }
  }, [location]);

  return (
    <div className="w-full flex-col">
      {/* <Navbar className="top-0" /> */}
      <Link to="/" className="fixed z-10 left-0">
        <h1>🔙back</h1>
      </Link>
      <div className="flex flex-row flex-wrap flex-grow-0 gap-4 mt-[10rem] mx-auto w-[95%] justify-center">
        {cropData?.map((item, index) => {
          return <SingleCrop data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Localcropcomponent;
