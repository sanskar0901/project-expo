import React from "react";
import Navbar from "../Home/Navbar";
import leaf from "../../Assets/phoolpatti.svg";
import Cookies from "js-cookie";
import axios from "axios";
import { API_URI } from "../../Constants/apiUrl";
const NewComponent = () => {
  // const user = {
  //   name: "Rahul",
  //   email: "rahul@admin.com",
  //   role: "admin",
  // };
  // const user = Cookies.get("uid");
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const handleSubmit = () => {
    const data = {
      title,
      body,
      userId: user.email,
      role: user.role,
    };
    // axios.post(API_URI + "/forum", data);
    // console.log(data);
  };
  return (
    <div>
      <Navbar />
      <div className="bg-[#57AC49] h-[60vh] w-[98vw] mx-auto flex flex-col justify-center align-center m-2 rounded-xl gap-y-3 place-items-center">
        <h1 className="text-4xl font-bold font-ss text-white justify-start">
          CropGenie Forum
        </h1>
        <p className="text-2xl font-[400] font-ss text-white justify-start">
          Join the Community of Farming Innovators: Share Ideas, Knowledge, and
          Experiences
        </p>
      </div>
      <div
        className="flex flex-col mx-auto w-[70vw] place-items-center p-5 rounded-lg gap-y-4 py-8 mb-10"
        style={{
          background: `url(${leaf}),#00ff0010`,
        }}
      >
        <div className="text-ss my-10 text-4xl font-bold">
          Create Thread Page
        </div>
        <input
          type="text"
          placeholder="Title"
          className="p-2 w-[80%]"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Description"
          className="p-2 w-[80%] h-[20vh]"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Title"
          value={user?.email}
          disabled
          className="p-2 w-[80%] bg-[#ffffff80]"
        />
        <input
          type="text"
          placeholder="Title"
          value={user?.role}
          disabled
          className="p-2 w-[80%] capitalize bg-[#ffffff80]"
        />
        <div className="my-5">
          Reminder:&nbsp;
          {/* add reminder to check if thread already exists as many queries are answered beforehand */}
          <i>
            Please check if your query has already been answered in the forum
            before creating a new thread.
          </i>
        </div>
        <button
          className="text-white hover:text-green-400 bg-green-400 hover:bg-white transition-all px-4 py-2 rounded-lg"
          onClick={handleSubmit}
        >
          Create Thread
        </button>
      </div>
    </div>
  );
};

export default NewComponent;
