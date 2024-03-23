import style from "./ImgSlider.module.css"

const ImgSlider = ({src}) => {
    return (
        <div>
            <img className = {style.img_slider} src={src}/>
        </div>
    );
};

export default ImgSlider;