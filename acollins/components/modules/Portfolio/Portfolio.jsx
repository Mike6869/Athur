// "use client";

import style from "./Portfolio.module.css";
import config from "@/config.json";
import {useEffect, useState} from "react";
import ElementHover from "@/components/elements/ElementHover/ElementHover";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Portfolio = ({id}) => {
    const navigate = useNavigate();

    const [portfolioSrc, setPortfoliSrc] = useState([]);
    const getPortfolioSrc = async () => {
        try {
            const {data} = await axios.get(config.url_src_portfolio);
            setPortfoliSrc(data);
        } catch (e) {
            console.error(e);
            return [];
        }
    };
    useEffect(() => {
        getPortfolioSrc();
    }, []);

    return (
        <div
            className={
                "flex flex-row flex-wrap flex-shrink-0 " + style.portfolio
            }
            id={id}
        >
            {portfolioSrc.map((elem) => {
                return (
                    <ElementHover
                        src={config.url_get_img + elem.src}
                        headText={elem.headText}
                        bodyText={elem.bodyText}
                        key={elem.id}
                        className={style.img}
                        link={() => {
                            navigate("/category/" + elem.id);
                        }}
                    />
                );
            })}
        </div>
    );
};

export default Portfolio;
