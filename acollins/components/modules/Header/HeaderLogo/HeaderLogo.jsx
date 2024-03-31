import {Link} from "react-router-dom";

import style from "./HeaderLogo.module.css";
import slideToBlock from "@/components/func/func";

const HeaderLogo = () => {
    return (
        <Link
            onClick={() => {
                slideToBlock('slider', true);
            }}
            to="/main/slider"
            className={"text-2xl font-bold -m-1.5 p-1.5 " + style.logo}
        >
            <span className="sr-only">Your Company</span>
            {/* <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
        /> */}
            ACOLLIINS
        </Link>
    );
};

export default HeaderLogo;
