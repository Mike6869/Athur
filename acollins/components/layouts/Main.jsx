// import {useLocation} from "react-router-dom";
import {useParams} from "react-router-dom";
import Galery from "../modules/Galery/Galery";
import Photo from "../modules/Photo/Photo";
import Portfolio from "../modules/Portfolio/Portfolio";
import Slider from "../modules/Slider/Slider";
import Video from "../modules/Video/Video";
import {useEffect} from "react";
import slideToBlock from "@/components/func/func";

export default function Main() {
    const {block} = useParams();

    useEffect(() => {
        if (block)
            setTimeout(() => {
                slideToBlock(block, true);
            }, 500);
    }, []);
    return (
        <>
            <div style={{marginTop: "80px"}}>
                <Slider />

                <hr style={{margin: "20px"}} />
                <Portfolio id="portfolio" />

                {/* <hr style={{margin: "20px"}} id="price" />
                <Photo></Photo>

                <hr style={{margin: "20px"}} />
                <Video></Video>

                <hr style={{margin: "20px"}} />
                <Galery></Galery> */}
            </div>
        </>
    );
}
