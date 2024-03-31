// 'use client'
import {Navigate, Routes, Route, Link, useParams} from "react-router-dom";

import Header from "../modules/Header/Header";
import Main from "./Main";

const layout = ({children}) => {
    return (
        <>
            <Header>{children}</Header>
            <Routes>
                <Route path="/" element={<Navigate replace to="/main/slider" />} />

                <Route path="/main/:block" element={<Main />} />
            </Routes>
        </>
    );
};

export default layout;
