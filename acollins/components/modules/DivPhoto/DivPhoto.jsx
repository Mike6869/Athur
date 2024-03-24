"use client";

import style from "./DivPhoto.module.css";
// import axios from "axios";
// import config from "@/config.json";

const DivPhoto = ({label_name, id, src}) => {
    return (
        <div>
            <label htmlFor={id}>{label_name}</label>

            <img className={style.img_photo} src={src} id={id} />
        </div>
    );
};

export default DivPhoto;
