// import {useLocation} from "react-router-dom";
import {useParams} from "react-router-dom";
import Portfolio from "../modules/Portfolio/Portfolio";
import Slider from "../modules/Slider/Slider";
import {useEffect} from "react";
import slideToBlock from "@/components/func/func";
import Price from "./../modules/Price/Price";

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
            <div className="mt-20">
                <Slider />

                <Portfolio id="portfolio" />
                <Price id="price" />
            </div>
        </>
    );
}
