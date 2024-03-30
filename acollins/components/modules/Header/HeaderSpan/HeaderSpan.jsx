import style from "./HeaderSpan.module.css"

const HeaderSpan = ({children}) => {
    return (
        <a
            href="#"
            className={
                "text-2xl font-normal leading-6 text-white-900 " + style.nav
            }
        >
            {children}
        </a>
    );
};

export default HeaderSpan;
