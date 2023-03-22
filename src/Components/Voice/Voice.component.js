// import PreHeader from "../../components/preheader/preheader";
import React, { useEffect, useState } from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { GiSpeaker } from "react-icons/gi";
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai";
import Speech from "speak-tts";
import axios from "axios";
import { API_URI } from "../../Constants/apiUrl";
import Navbar from "../Home/Navbar";








const Voice = () => {

    const [voicelist, setVoicelist] = useState([]);
    const [load, setLoad] = useState(false);
    const [log, setLog] = useState([]);
    const [query, setQuery] = useState("");
    const [lang, setLang] = useState("english");

    const speak = () => {
        const data = {
            message: query,
            lang: lang
        };
        axios.post(`${API_URI}/voice`, data)
            .then((res) => {
                console.log(res.data);
                setLog(res.data);
                const speech = new Speech();
                if (speech.hasBrowserSupport()) {
                    console.log("speech synthesis supported");
                    speech
                        .init({
                            volume: 1,
                            lang: "hi-IN",
                            rate: 1,
                            pitch: 1,

                            listeners:
                            {
                                onvoiceschanged: (voices) => {
                                    console.log("Event voiceschanged", voices);
                                    setVoicelist(voices);
                                }
                            }
                        })
                        .then((data) => {
                            console.log("Speech is ready", data, res.data[0]);
                            setLoad(true);
                            speech.speak({
                                text: res.data,
                            }).then(() => {
                                console.log("Success !");
                            }).catch(e => {
                                console.error("An error occurred :", e);
                            });
                        })
                        .catch(e => {
                            console.error("An error occurred while initializing : ", e);
                        });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };




    return (
        <>
            <div className=" bg-login-pattern bg-no-repeat bg-cover h-[100vh]">
                <div className="w-full  pr-5 backdrop-brightness-50 h-full place-items-center">


                    <Navbar />
                    {/* <PreHeader />
            <Header /> */}
                    <section className="text-gray-600 body-font right-3 bottom-8 py-[20vh] flex items-center justify-center gap-[10vw]">
                        <div>
                            <p className="text-[2vw] text-[#000000] font-bold">Ask your Query</p>
                            <textarea className="w-[40vw] h-[40vh] bg-white rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[green] text-base px-4 py-2 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder="Type your Query" onChange={(e) => { setQuery(e.target.value); }} />
                            <div className="flex items-center justify-end gap-5">
                                <AiOutlinePauseCircle className=" text-[4vw] text-[green] bg-white rounded-full hover:cursor-pointer" onClick={(e) => {
                                    e.preventDefault(); const speech = new Speech();
                                    speech.pause()
                                }} />
                                <AiOutlinePlayCircle className=" text-[4vw] text-[green] bg-white rounded-full hover:cursor-pointer" onClick={(e) => {
                                    e.preventDefault(); const speech = new Speech();
                                    speech.resume()
                                }} />
                                <select className="w-[10vw] h-[6vh] bg-white rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[green] text-base px-4 py-2 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={(e) => { setLang(e.target.value); }}>
                                    <option value="english">English</option>
                                    <option value="hindi">Hindi</option>
                                    <option value="marathi">Tamil</option>
                                </select>
                                <GiSpeaker className=" text-[4vw] text-[green] bg-white rounded-full hover:cursor-pointer" onClick={(e) => { e.preventDefault(); speak(); }} />
                            </div>
                        </div>
                        <div>
                            {/* text area to show the log */}
                            <p className="text-[2vw] text-[#000000] font-bold">Solution to your Query</p>
                            <textarea className="w-[40vw] h-[50vh] bg-[#cfcfcf] rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[green] text-base px-4 py-2 resize-none
                             leading-6 transition-colors duration-200 ease-in-out font-bold" placeholder="Type something" value={log} />
                        </div>
                    </section>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Voice;
