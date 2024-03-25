// "use client";

import style from "./Galery.module.css";
import GaleryElement from "./GaleryElement/GaleryElement";

const Galery = () => {
    return (
        <div>
            <h1>Галерея</h1>
            <h2>Здесь представлены все фотосессии</h2>
            <GaleryElement></GaleryElement>
        </div>
    );
};

export default Galery;
