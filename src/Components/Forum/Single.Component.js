import React, { useEffect } from "react";
import Navbar from "../Home/Navbar";
import leaf from "../../Assets/phoolpatti.svg";
import Moment from "react-moment";
import { BsArrow90DegUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URI } from "../../Constants/apiUrl";
const Single = ({ }) => {
  const { id } = useParams();

  //   const a = {
  //     title: "WINTER IS SHOW SEASON: Farm shows, conferences are back",
  //     body: "EASTERN ONTARIO — February and March are a traditional time for farmers to get out, get together and check out the latest technology and information at a variety of winter shows and conferences. And after the upheaval of the recent pandemic era, the 2023 schedule has returned somewhat to normal, though there are notable absences. Where there was once no less than 11 in-person farm shows, stretching from New York to Cornwall over a five-week period, that’s now down to seven. The cancelled events include the Cornwall Eco Farm Days, Eastern Ontario Days and Quinte Farm Trade Show.",
  //     userId: "rishit@gmail.com",
  //     role: "admin",
  //     created: "2021-10-10T12:00:00.000Z",
  //   };

  const [data, setData] = React.useState([]);

  useEffect(() => {
    // axios.get(API_URI + "/forum/" + id).then((res) => {
    //   setData(res.data);
    // });
  }, []);

  const [comment, setComment] = React.useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = () => {
    const data = {
      body: comment,
      userId: user.email,
    };
    // const a = axios.post(API_URI + "/forum/" + id + "/comment", data);
    // window.alert(a);
    window.location.reload();
    console.log(data);
  };

  //   console.log(data);
  return (
    <div
      className="w-full min-h-[100vh]"
      style={{
        background: `url(${leaf}),#00220040`,
      }}
    >
      <div className="bg-[#6caa4f] rounded-xl w-full">
        <Navbar />
      </div>
      <Link to="/forum">
        <div className="absolute left-2 top-[15vh]">
          <BsArrow90DegUp />
        </div>
      </Link>
      <div className="pt-24 flex flex-col">
        <div className="text-[#6caa4f] font-[800] text-xl font-ss">
          Discussion
        </div>
        <div className="font-bold text-3xl w-[80%] mx-auto">{data?.title}</div>
        <div className="text-md w-[80%] mx-auto">~ {data?.userId}</div>

        {/* <div> */}
        <div className="mt-10 flex flex-row justify-between text-justify w-[80%] mx-auto">
          {data?.body}
        </div>
        <div className="float-left mt-3 w-[80%] mx-auto text-left text-[#00000150]">
          <Moment fromNow>{data?.created}</Moment>
        </div>
        <hr className="w-[80%] mx-auto mt-10" />
        <div className="mt-5">
          <textarea
            className="w-[50vw] h-[20vh] bg-white rounded-xl p-5"
            placeholder="Write a comment"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          ></textarea>
          <div
            className="rounded-full px-10 py-2 font-bold text-center bg-[#6caa4f] w-[15vw] mx-auto cursor-pointer "
            onClick={handleSubmit}
          >
            Post Reply
          </div>
        </div>
        <div className="flex flex-col-reverse">
          {data?.comments?.map((item) => {
            return (
              <div className="w-[50%] mx-auto mt-5 bg-white rounded-xl p-5 relative">
                <div className="font-bold">{item.userId}</div>
                <div className="text-justify">{item.body}</div>
                <div className="text-left">{item.user.name}</div>
                {item.user.role === "admin" ? (
                  <div className="text-left p-2 capitalize bg-[#386fba] text-white w-max rounded-full absolute top-3 right-3">
                    {item.user.role}
                  </div>
                ) : null}
                {item.user.role != "admin" ? (
                  <div className="text-left p-2 capitalize bg-[#6caa4f] text-white w-max rounded-full absolute top-3 right-3">
                    {item.user.role}
                  </div>
                ) : null}
                <div className="text-[#00000150] text-left">
                  <Moment fromNow>{item.created}</Moment>
                </div>
              </div>
            );
          })}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Single;
