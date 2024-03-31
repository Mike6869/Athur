// import {useLocation} from "react-router-dom";

import { useParams } from "react-router-dom";
import config from "@/config.json";
import CategoryPhoto from "../modules/Category/CategoryPhoto/CategoryPhoto";
import Category3D from "../modules/Category/Category3D/Category3D";
import CategoryVideo from "../modules/Category/CategoryVideo/CategoryVideo";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Category() {
    const {category} = useParams()

    const [categorySrc, setCategorySrc] = useState([]);
    const getCategorySrc = async () => {
        try {
            const {data} = await axios.get(config.url_src_category + category);
            setCategorySrc(data);
        } catch (e) {
            console.error(e);
            return [];
        }
    };

    useEffect(() => {
        getCategorySrc();
    }, []);



    return (
        <>
            <div style={{marginTop: "80px"}}>
                {category == 'photo' && <CategoryPhoto data={categorySrc}/>}
                {category == '3d' && <Category3D data={categorySrc}/>}
                {category == 'video' && <CategoryVideo data={categorySrc}/>}
            </div>
        </>
    );
}
