"use client";
import axios from "axios";
import config from "../../next.config.mjs";
import {useEffect, useState} from "react";
import ImgSlider from "../imgSlider/ImgSlider";
import style from "./Slider.module.css"
import Marquee from "react-fast-marquee"; //https://github.com/justin-chu/react-fast-marquee

const Slider = () => {
    const [sliderSrc, setSliderSrc] = useState(["/slider/1.jpg"]);
    const getSliderSrc = async () => {
        try {
            const {data} = await axios.get(config.proxy + "/slider_src");
            setSliderSrc(data);
        } catch (e) {
            console.error(e);
            return [];
        }
    };
    useEffect(() => {
        getSliderSrc();
    }, []);

    return (
        <Marquee>
            <div className={style.div_slider}>
                {sliderSrc?.map((src) => {
                    return <ImgSlider src={config.proxy + "/get_img" + src} key={src}/>;
                })}
            </div>
        </Marquee>
    );
};

export default Slider;
