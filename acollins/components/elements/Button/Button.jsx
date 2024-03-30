import style from "./Button.module.css";

const Button = ({text, onClick}) => {
    return (
        <div className={style.div}>
            <button
                type="button"
                className={"inline-block rounded border-2 border-primary" + ' ' + style.button}
                data-twe-ripple-init
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;
