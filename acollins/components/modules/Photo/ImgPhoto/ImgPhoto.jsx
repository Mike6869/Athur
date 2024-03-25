// "use client";

import config from "@/config.json";
import DivPhoto from "../DivPhoto/DivPhoto";

const ImgPhoto = () => {
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
