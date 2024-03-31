import ElementHover from '@/components/elements/ElementHover/ElementHover';
import style from './CategoryPhoto.module.css'
import config from "@/config.json";

const CategoryPhoto = ({data}) => {

    return (
        <div
            className={
                "flex flex-row flex-wrap flex-shrink-0 " + style.category
            }
        >
            {data.map((elem) => {
                return (
                    <ElementHover
                        src={config.url_get_img + elem.src}
                        headText={elem.headText}
                        bodyText={elem.bodyText}
                        key={elem.id}
                        className={style.img}
                        link={() => {
                            // navigate("/category/" + elem.id);
                        }}
                    />
                );
            })}
        </div>
    );
};

export default CategoryPhoto;
