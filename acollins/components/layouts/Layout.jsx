// 'use client'

import Header from "../modules/Header/Header";
import Slider from "../modules/Slider/Slider";


const layout = ({children}) => {
    return (
        <>
            <Header>{children}</Header>
            <Slider></Slider>
        </>
    );
};

export default layout;
