// "use client";

import style from "./DivVideo.module.css";
import React from "react";

const DivVideo = ({label_name, id, src, src_poster}) => {
    return (
        <div>
            <label htmlFor={id}>{label_name}</label>
            <video
                id={id}
                src={src}
                controls="controls"
                muted
                loop
                autoPlay
                poster={src_poster}
            />
        </div>
    );
};

export default DivVideo;
