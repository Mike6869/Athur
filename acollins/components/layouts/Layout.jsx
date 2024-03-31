// 'use client'
import {Navigate, Routes, Route, Link, useParams} from "react-router-dom";

import Header from "../modules/Header/Header";
import Main from "./Main";
import Category from "./Category";

const layout = ({children}) => {
    return (
        <>
            <Header>{children}</Header>
            <Routes>
                <Route path="/" element={<Navigate replace to="/main/slider" />} />

                <Route path="/main/:block" element={<Main />} />
                <Route path="/category/:category" element={<Category />} />
                <Route path="*" element={<>Не найдено</>} />
            </Routes>
        </>
    );
};

export default layout;
