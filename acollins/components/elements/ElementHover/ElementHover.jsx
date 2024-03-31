import Button from "../Button/Button";
import style from "./ElementHover.module.css";
import config from "@/config.json";

const ElementHover = ({src, headText, bodyText, className}) => {
    const RE = /(?:\.([^.]+))?$/;

    return (
        <div className={style.hover_element}>
            {config.img_type.includes(RE.exec(src)[1]) && <img src={src} className={style.img_video + ' ' + className}/>}
            {config.video_type.includes(RE.exec(src)[1]) && (
                <video
                    src={src}
                    // controls="controls"
                    muted
                    loop
                    autoPlay
                    className={style.img_video + ' ' + className}
                    // poster={src_poster}
                />
            )}
            <div className={style.text}>
                <div className={style.head_text}>{headText}</div>
                <div className={style.body_text}>{bodyText}</div>
                <Button text={"Перейти"}/>
            </div>
        </div>
    );
};

export default ElementHover;
