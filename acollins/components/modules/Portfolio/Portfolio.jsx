// "use client";

import style from "./Portfolio.module.css";
import config from "@/config.json";
import {useEffect, useState} from "react";
import ElementHover from "@/components/elements/ElementHover/ElementHover";
import axios from "axios";

const Portfolio = () => {
    const [portfolioSrc, setPortfoliSrc] = useState([]);
    const getPortfoliSrc = async () => {
        try {
            const {data} = await axios.get(config.url_src_portfolio);
            setPortfoliSrc(data);
        } catch (e) {
            console.error(e);
            return [];
        }
    };
    useEffect(() => {
        getPortfoliSrc();
    }, []);

    return (
        <div className="flex flex-row flex-wrap flex-shrink-0">
            {portfolioSrc.map((elem) => {
                return (
                    <ElementHover
                        src={config.url_get_img + elem.src}
                        headText={elem.headText}
                        bodyText={elem.bodyText}
                        key={elem.src}
                    />
                );
            })}
            {/* <ImgHover src={}/> */}
        </div>
    );
};

export default Portfolio;
