import Button from "./Button/Button";
import style from "./ElementHover.module.css";
import config from "@/config.json";

const ElementHover = ({src, headText, bodyText}) => {
    const RE = /(?:\.([^.]+))?$/;

    return (
        <div style={{position:'relative'}} className={style.hover_element}>
            {config.img_type.includes(RE.exec(src)[1]) && <img src={src} className={style.img_video}/>}
            {config.video_type.includes(RE.exec(src)[1]) && (
                <video
                    src={src}
                    // controls="controls"
                    muted
                    loop
                    autoPlay
                    className={style.img_video}
                    // poster={src_poster}
                />
            )}
            <div className={style.text}>
                <span>{headText}</span>
                <span>{bodyText}</span>
                <Button text={"Перейти"}/>
            </div>
        </div>
    );
};

export default ElementHover;
