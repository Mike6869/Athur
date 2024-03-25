// "use client";

import {useEffect, useState} from "react";
import style from "./GaleryElement.module.css";
import axios from "axios";
import config from "@/config.json";
import GaleryElementImg from "../GaleryElementImg/GaleryElementImg";

const GaleryElement = () => {
    const [galerySrc, setGalerySrc] = useState([]);
    const getGalerySrc = async () => {
        try {
            const {data} = await axios.get(config.url_src_galery_preview);
            setGalerySrc(data);
        } catch (e) {
            console.error(e);
            return [];
        }
    };
    useEffect(() => {
        getGalerySrc();
    }, []);

    return (
        <div>
            {galerySrc.map((e) => {
                return (
                    <GaleryElementImg element={e} key={e.name}></GaleryElementImg>
                );
            })}
        </div>
    );
};

export default GaleryElement;
