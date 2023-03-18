import React from "react";
import food from "../../Assets/food.svg";
const SingleCrop = ({ data }) => {
  //   const img = fetch(`https://your-crop-image-api.com/?crop=${data.Crop}`);
  //   const img = await fetch(`https://your-crop-image-api.com/?crop=${data.crop}`);
  //   console.log(data);
  return (
    <div
      className="rounded-xl h-[27vh] w-[20%] flex flex-col drop-shadow-xl shadow-md hover:scale-105 cursor-pointer hover:shadow-lg transition-all p-5"
      style={{
        background: `url(${food})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white w-[90%] mx-auto h-[20vh] flex flex-col gap-y-2">
        <p className="text-xl text-black font-black mt-5">{data?.Crop}</p>
        <p>Production/Area: {data?.Calc} </p>
        <p>Duration: {data?.Season} </p>
        <p className="font-bold">Rank: {data?.Rank} </p>
      </div>
    </div>
  );
};

export default SingleCrop;
