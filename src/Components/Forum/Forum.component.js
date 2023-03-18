import React, { useEffect } from "react";
import Navbar from "../Home/Navbar";
import rply from "../../Assets/rply.svg";
import axios from "axios";
import { API_URI } from "../../Constants/apiUrl";
import { Link } from "react-router-dom";
import leaf from "../../Assets/phoolpatti.svg";
function Forumcomponent() {
  const [search, setSearch] = React.useState("");
  const [forumData, setForumData] = React.useState([]);
  const handleSearch = () => {
    console.log(search);
    // axios.post(API_URI + "/forum/search/", { context: search }).then((res) => {
    //   console.log(res.data);
    // });
  };

  useEffect(() => {
    // axios.get(API_URI + "/forum").then((res) => {
    //   setForumData(res.data);
    //   console.log(res.data);
    // });
  }, []);
  const posts = [
    {
      title: "WINTER IS SHOW SEASON: Farm shows, conferences are back",
      body: "EASTERN ONTARIO — February and March are a traditional time for farmers to get out, get together and check out the latest technology and information at a variety of winter shows and conferences. And after the upheaval of the recent pandemic era, the 2023 schedule has returned somewhat to normal, though there are notable absences. Where there was once no less than 11 in-person farm shows, stretching from New York to Cornwall over a five-week period, that’s now down to seven. The cancelled events include the Cornwall Eco Farm Days, Eastern Ontario Days and Quinte Farm Trade Show.",
      userId: "rishit@gmail.com",
      role: "admin",
      created: "2021-10-10T12:00:00.000Z",
    },
    {
      title: "WINTER IS SHOW SEASON: Farm shows, conferences are back",
      body: "EASTERN ONTARIO — February and March are a traditional time for farmers to get out, get together and check out the latest technology and information at a variety of winter shows and conferences. And after the upheaval of the recent pandemic era, the 2023 schedule has returned somewhat to normal, though there are notable absences. Where there was once no less than 11 in-person farm shows, stretching from New York to Cornwall over a five-week period, that’s now down to seven. The cancelled events include the Cornwall Eco Farm Days, Eastern Ontario Days and Quinte Farm Trade Show.",
      userId: "rishit@gmail.com",
      role: "farmer",
      created: "2021-10-10T12:00:00.000Z",
    },
    {
      title: "WINTER IS SHOW SEASON: Farm shows, conferences are back",
      body: "EASTERN ONTARIO — February and March are a traditional time for farmers to get out, get together and check out the latest technology and information at a variety of winter shows and conferences. And after the upheaval of the recent pandemic era, the 2023 schedule has returned somewhat to normal, though there are notable absences. Where there was once no less than 11 in-person farm shows, stretching from New York to Cornwall over a five-week period, that’s now down to seven. The cancelled events include the Cornwall Eco Farm Days, Eastern Ontario Days and Quinte Farm Trade Show.",
      userId: "rishit@gmail.com",
      role: "admin",
      created: "2021-10-10T12:00:00.000Z",
    },
  ];
  return (
    <div>
      <Navbar />

      <div
        className=" h-[60vh] w-[98vw] mx-auto flex flex-col justify-center align-center m-2 rounded-xl gap-y-3 place-items-center"
        style={{
          background: `url(${leaf}), #57AC49`,
        }}
      >
        <h1 className="text-4xl font-bold font-ss text-white justify-start">
          CropGenie Forum
        </h1>
        <p className="text-2xl font-[400] font-ss text-white justify-start">
          Join the Community of Farming Innovators: Share Ideas, Knowledge, and
          Experiences
        </p>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Forum"
          className="w-[60vw] bg-white px-4 py-2 rounded-full"
        />
        <button
          className="text-white hover:text-green-400"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="bg-white h-[100vh] w-[100vw] flex flex-row justify-center align-center">
        <div className="h-[100vh] w-[30vw] flex flex-col justify-center align-center">
          <Link to="/forum/new">
            <h1 className="text-2xl cursor-pointer font-ss text-white bg-[#57AC49] justify-start rounded-xl mx-5 p-2">
              New Thread
            </h1>
          </Link>
          <div className="h-[80vh] w-[30vw] flex flex-col justify-center align-center border-black-1 border-b-2">
            <h3 className="text-2xl font-bold font-ss text-[#57AC49] justify-start">
              Discussion Filter
            </h3>
            <div>
              <ul className="flex flex-col justify-center align-center">
                <li>All Discussion</li>
                {/* <li>My Questions</li>
                <li>My Participation</li>
                <li>My answer</li> */}
              </ul>
              {/* <hr className="border-[#0000005c] w-[20vw]" />
              <ul className="flex flex-col justify-center align-center">
                <li>Finished Discussion</li>
                <li>Unfinished Discussion</li>
              </ul> */}
            </div>
          </div>
        </div>
        <div className="w-[70vw] flex flex-col mt-10 gap-y-10">
          {forumData &&
            forumData?.posts?.map((post) => {
              return (
                <div classname="flex flex-col justify-start align-start px-10 gap-y-4">
                  <h1 className="text-3xl font-bold font-ss text-black justify-start py-2 text-left">
                    {post.title}
                  </h1>
                  <p className="text-lg font-[400] font-ss text-black justify-start py-2 pr-10 text-justify mr-5">
                    {post.body.length > 500
                      ? post.body.substring(0, 500) + "..."
                      : post.body}
                  </p>
                  <div className="flex flex-row justify-between">
                    <img
                      src={rply}
                      alt="reply"
                      classname="py-6 hover:cursor-pointer float-left"
                    />
                    <Link to={`/forum/${post.id}`}>
                      <div className="cursor-pointer mr-16 hover:text-green-700 transition-all">
                        Read More
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          {/* <div classname="flex flex-col justify-start align-start px-10">
            <h1 className="text-3xl font-bold font-ss text-black justify-start py-2 text-left">
              WINTER IS SHOW SEASON: Farm shows, conferences are back
            </h1>
            <p className="text-lg font-[400] font-ss text-black justify-start py-2 pr-10 text-justify mr-5">
              EASTERN ONTARIO — February and March are a traditional time for
              farmers to get out, get together and check out the latest
              technology and information at a variety of winter shows and
              conferences. And after the upheaval of the recent pandemic era,
              the 2023 schedule has returned somewhat to normal, though there
              are notable absences. Where there was once no less than 11
              in-person farm shows, stretching from New York to Cornwall over a
              five-week period, that’s now down to seven. The cancelled events
              include the Cornwall Eco Farm Days, Eastern Ontario Days and
              Quinte Farm Trade Show.
            </p>
            <img src={rply} alt="reply" classname="py-6 hover:cursor-pointer" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Forumcomponent;
