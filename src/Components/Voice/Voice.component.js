// import PreHeader from "../../components/preheader/preheader";
import React, { useEffect, useState } from "react";

import alanBtn from "@alan-ai/alan-sdk-web";
// let alanKey = "67254c6d750a036c9a01ac6ae831c3202e956eca572e1d8b807a3e2338fdd0dc/stage
let alanKey =
    "c5dc5f869e67713b7ad56e4ae6ee2dcc2e956eca572e1d8b807a3e2338fdd0dc/stage";

const Voice = () => {
    const [load, setLoad] = useState(false);
    const [log, setLog] = useState("");
    const [lang, setLang] = useState("en");


    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if (command.includes("showweather")) {
                    console.log("testCommand");
                    alert("This is a Alan AI demo");
                }
            }
        });
    }, []);

    return (
        <>
            {/* <PreHeader />
            <Header /> */}
            <section className="text-gray-600 body-font">
                <div>
                    {load ? (
                        <div className="grid place-items-center my-14  ">loading </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </section>
            {/* <Footer /> */}
        </>
    );
};

export default Voice;
