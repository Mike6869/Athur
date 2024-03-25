// "use client";

import style from "./GaleryElementImg.module.css";
import config from "@/config.json";

const GaleryElementImg = ({element}) => {
    return (
        <div>
            <h1>{element.name}</h1>
            <div className={style.galery_img}>
                <img src={config.url_get_img + element.left} />
                <img src={config.url_get_img + element.main} />
                <img src={config.url_get_img + element.right} />
            </div>
        </div>
    );
};

export default GaleryElementImg;
