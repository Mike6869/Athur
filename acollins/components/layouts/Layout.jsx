// 'use client'

import Galery from "../modules/Galery/Galery";
import Header from "../modules/Header/Header";
import Photo from "../modules/Photo/Photo";
import Slider from "../modules/Slider/Slider";
import Video from "../modules/Video/Video";


const layout = ({children}) => {
    return (
        <>
            <Header>{children}</Header>
            <Slider></Slider>
            <Photo></Photo>
            <Video></Video>
            <Galery></Galery>
        </>
    );
};

export default layout;
