import React from "react";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

const Card = (props) => {
    let review = props.review;

    return (
        <div className="flex flex-col md:relative">

            <div className="absolute top-[-7rem] z-[10] mx-auto2">

                <img className="aspect-square rounded-full h-[140px] w-[140px] z-25"
                src={review.image} alt="NA"/>  {/*image div*/}

                <div className="absolute top-[-6px] w-[140px] h-[140px] bg-violet-500 
                rounded-full z-[-10] left-[10px]"></div>
                
            </div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize">{review.name}</p>           {/*name div*/}
            </div>

            <div className="text-center">
                <p className="text-violet-400 uppercase text-sm">{review.job}</p>           {/*name of job div*/}
            </div>

            <div className="text-violet-300 mx-auto mt-5">
                <FaQuoteLeft/>
            </div>

            <div className="text-center mt-4 text-slate-500">
                <p>{review.text}</p>    {/*Description or text of Certain person*/}
            </div>

            <div className="text-violet-300 mx-auto mt-5">
                <FaQuoteRight/>
            </div>

        </div>
    );
}

export default Card;