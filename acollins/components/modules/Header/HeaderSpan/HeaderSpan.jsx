import style from "./HeaderSpan.module.css";
import {Link} from "react-router-dom";
import slideToBlock from "@/components/func/func";

const HeaderSpan = ({children, id}) => {
    // const test = () => {
    //     document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
    // };

    return (
        <Link
            // state={{block: id}}
            onClick={() => {
                slideToBlock(id, true);
            }}
            to={"/main/" + id}
            params={{block: id}}
            className={
                "text-2xl font-normal leading-6 text-white-900 " + style.nav
            }
        >
            {children}
        </Link>
    );
};

export default HeaderSpan;
