import React from "react";
import Card from "./Card.js";
import {useState} from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = (props) => {
    let reviews = props.reviews;
    const[index, setIndex] = useState(0);

    function leftShiftHandler() {
        if(index-1 < 0){
            setIndex(reviews.length-1)
        }
        else{
            setIndex(index-1);
        }
    }
    
    function rightShiftHandler() {
        if(index+1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function SurpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }
    
    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center
         items-center mt-10 p-10 transition-all duration-700 hover:shadow-lg rounded-md">
            <Card review={reviews[index]}/>

            <div className="text-3xl flex mt-9 gap-3 text-violet-400 font-bold mx-auto">
                <button 
                onClick={rightShiftHandler}
                className="cursor-pointer hover:text-violet-500">
                <FiChevronLeft/>
                </button>
                
                <button 
                onClick={leftShiftHandler}
                className="cursor-pointer hover:text-violet-500">
                <FiChevronRight/>
                </button>
            </div>

            <div>
                <button 
                onClick={SurpriseHandler}
                className="bg-violet-400 hover:bg-violet-500 transition-all duration-200
                 cursor-pointer rounded-md px-10 py-2 font-bold text-white text-lg my-2">
                Surprise Me
                </button>
            </div>
        </div>
    );
}

export default Testimonial;