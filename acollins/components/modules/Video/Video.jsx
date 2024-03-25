import DivVideo from "./DivVideo/DivVideo";
import config from "@/config.json";
import style from "./Video.module.css";

const Video = () => {
    return (
        <div>
            <h1>Видео</h1>
            <DivVideo label_name="Танцы" src={config.url_src_video_dance} src_poster={config.url_src_video_dance_poster}></DivVideo>
            <DivVideo label_name="Промо" src={config.url_src_video_promo} src_poster={config.url_src_video_promo_poster}></DivVideo>
        </div>
    );
};

export default Video;
