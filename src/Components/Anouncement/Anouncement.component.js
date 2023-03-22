import React, { useState, useEffect } from "react";
import Navbar from "../Home/Navbar";

const Anouncementcomponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://services.india.gov.in/feed/rss?cat_id=12&ln=en");
            const text = await response.text();
            const parser = new DOMParser();
            const xml = parser.parseFromString(text, "text/xml");
            setData(xml);
        };

        fetchData();
    }, []);

    return (
        <div>


            <Navbar />
            <div className="bg-login-pattern bg-no-repeat bg-cover h-[100vh] flex flex-col items-center justify-center ">
                <div className="mt-[12vh]">


                    <p className="text-4xl font-bold font-ss text-black pb-4">Anouncements</p>
                    {data ? (
                        <ul className="flex items-center flex-col text-left overflow-y-scroll h-[75vh] py-8  rounded-xl bg-clip-padding backdrop-filter 
                backdrop-blur-2xl bg-opacity-10 border border-gray-100 w-[60vw] gap-6 ">
                            {Array.from(data.getElementsByTagName("item")).map((item, index) => (
                                <li key={index} className=" w-[50vw] px-4 flex flex-col">
                                    <h2 className="text-xl font-bold font-ss">{item.getElementsByTagName("title")[0].textContent}</h2>
                                    <p>{item.getElementsByTagName("description")[0].textContent}</p>
                                </li>
                            ))}

                        </ul>
                    ) : (
                        <p>Loading data...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Anouncementcomponent;
