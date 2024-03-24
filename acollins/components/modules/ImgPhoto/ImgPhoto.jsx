"use client";

import style from "./ImgPhoto.module.css";
import axios from "axios";
import config from "@/config.json";
import {useEffect, useState} from "react";
import DivPhoto from "../DivPhoto/DivPhoto";

const ImgPhoto = () => {
    const [imgSrc, setImgSrc] = useState(["/slider/1.jpg"]);
    const getPhotoSrc = async () => {
        try {
            const {data} = await axios.get(config.url_src_slider);
            setImgSrc(data);
        } catch (e) {
            console.error(e);
            return [];
        }
    };
    useEffect(() => {
        getPhotoSrc();
    }, []);

    return (
        <div>
            <DivPhoto
                label_name={"Репортаж"}
                src={config.url_src_photo_reportage}
                id="photo_reportage"
            ></DivPhoto>

            <DivPhoto
                label_name={"Квест"}
                src={config.url_src_photo_quest}
                id="photo_quest"
            ></DivPhoto>

            <DivPhoto
                label_name={"Студийоные"}
                src={config.url_src_photo_studio}
                id="photo_studio"
            ></DivPhoto>
        </div>
    );
};

export default ImgPhoto;
