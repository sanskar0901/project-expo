import React, { useState, useEffect } from "react";

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
            {data ? (
                <ul>
                    {Array.from(data.getElementsByTagName("item")).map((item, index) => (
                        <li key={index}>
                            <h2>{item.getElementsByTagName("title")[0].textContent}</h2>
                            <p>{item.getElementsByTagName("description")[0].textContent}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default Anouncementcomponent;
