// 'use client'
import {Routes, Route, Link} from "react-router-dom";

import Galery from "../modules/Galery/Galery";
import Header from "../modules/Header/Header";
import Photo from "../modules/Photo/Photo";
import Portfolio from "../modules/Portfolio/Portfolio";
import Slider from "../modules/Slider/Slider";
import Video from "../modules/Video/Video";

const layout = ({children}) => {
    return (
        <>
            <Header>{children}</Header>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div style={{marginTop: "80px"}}>
                            <Slider></Slider>
                            <hr style={{margin: "20px"}} />
                            <Portfolio />
                            <hr style={{margin: "20px"}} />

                            <Photo></Photo>
                            <hr style={{margin: "20px"}} />

                            <Video></Video>
                            <hr style={{margin: "20px"}} />

                            <Galery></Galery>
                        </div>
                    }
                />
                <Route path="" />
            </Routes>
        </>
    );
};

export default layout;
