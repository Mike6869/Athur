import style from "./HeaderSpan.module.css"
import { Link } from "react-router-dom";


const HeaderSpan = ({children, href}) => {
    return (
        <Link
            to={href}
            className={
                "text-2xl font-normal leading-6 text-white-900 " + style.nav
            }
        >
            {children}
        </Link>
    );
};

export default HeaderSpan;
