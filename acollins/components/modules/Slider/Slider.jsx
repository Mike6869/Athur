// "use client";
import axios from "axios";
import config from "@/config.json";
import {useEffect, useState} from "react";
import ImgSlider from "./ImgSlider/ImgSlider";
import style from "./Slider.module.css";
import Marquee from "react-fast-marquee"; //https://github.com/justin-chu/react-fast-marquee
import TextSlider from "./TextSlider/TextSlider";

const Slider = () => {
    const [sliderSrc, setSliderSrc] = useState(["/slider/1.jpg"]);
    const getSliderSrc = async () => {
        try {
            const {data} = await axios.get(config.url_src_slider);
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
        <div>
            <TextSlider text="ARTHUR"></TextSlider>
            <TextSlider text="COLLINS"></TextSlider>
            <TextSlider text="PHOTO"></TextSlider>

            <Marquee speed={100} play={true} style={{filter: "brightness(65%)"}}>
                {sliderSrc?.map((src) => {
                    return (
                        <ImgSlider src={config.url_get_img + src} key={src} />
                    );
                })}
            </Marquee>
        </div>
    );
};

export default Slider;
