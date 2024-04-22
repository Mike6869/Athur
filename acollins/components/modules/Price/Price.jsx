import {data} from "./data.js";
import config from "@/config.json";
import style from "./Price.module.css";

const Price_Block = ({id}) => {
    const Photo = data.filter((data) => data.specific === "photo");

    const Video = data.filter((data) => data.specific === "video");

    const ThreeD = data.filter((data) => data.specific === "3D");

    return (
        <div className={style.price} id={id}>
            <div className={style.price_text}>
                <div>
                    <h1 className={style.title}>ФОТО</h1>
                    <ul>
                        {Photo.map((data) => (
                            <li key={data.id} className={style.price_li}>
                                <section className={style.section}>
                                    <div className={style.section_div}>
                                        {data.text}
                                    </div>
                                    <div className={style.section_div}>
                                        {data.price}
                                    </div>
                                </section>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-10">
                    <h1 className={style.title}>Видео</h1>
                    <ul>
                        {Video.map((data) => (
                            <li key={data.id} className={style.price_li}>
                                <section className={style.section}>
                                    <div className={style.section_div}>
                                        {data.text}
                                    </div>
                                    <div className={style.section_div}>
                                        {data.price}
                                    </div>
                                </section>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h1 className={style.title}>3D</h1>
                    <ul>
                        {ThreeD.map((data) => (
                            <li key={data.id} className={style.price_li}>
                                <section className={style.section}>
                                    <div className={style.section_div}>
                                        {data.text}
                                    </div>
                                    <div className={style.section_div}>
                                        {data.price}
                                    </div>
                                </section>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <img src={config.url_src_photo_studio} />
        </div>
    );
};

export default Price_Block;
