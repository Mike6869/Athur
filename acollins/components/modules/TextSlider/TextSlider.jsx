import style from "./TextSlider.module.css";

const TextSlider = ({text}) => {
    const select_class = (text) => {
        switch (text) {
            case "ARTHUR":
                return style.span_slider_1;
            case "COLLINS":
                return style.span_slider_2;
            case "PHOTO":
                return style.span_slider_3;
        }
    };
    return <span className={style.span_slider + " " + select_class(text)}>{text}</span>;
};

export default TextSlider;
