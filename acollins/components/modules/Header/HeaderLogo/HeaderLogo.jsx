import style from "./HeaderLogo.module.css";

const HeaderLogo = () => {
    return (
        <a href="#" className={"text-2xl font-bold -m-1.5 p-1.5 " + style.logo}>
            <span className="sr-only">Your Company</span>
            {/* <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
        /> */}
            ACOLLIINS
        </a>
    );
};

export default HeaderLogo;
