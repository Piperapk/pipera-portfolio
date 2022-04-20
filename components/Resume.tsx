import React from "react";
import Button_Primary from "./buttons/Button_Primary";

interface Props {
    containerWidth?: string
    id?: string
}

const Resume = ({containerWidth, id}:Props) => {

    return(
        <div id={id} className="mt-20">
            <div className={`${containerWidth} m-auto`}>
                <h1 className="text-4xl leading-[25px] sm:leading-[30px] font-thin px-5 ">Resume</h1>
            </div>
            <div className="border-t border-slate-300"/>
            <div className="bg-gray-100 px-10 pt-10 pb-20 sm:pt-14">

                <div className={`${containerWidth} m-auto
                flex flex-wrap justify-center`}>
                    <div className="flex justify-center items-center">
                        <div className="border-t border-slate-300 w-20 m-5"/>
                        <Button_Primary text="View Resume" href="/files/IvanKrushkovCV.pdf" openInNewWindow={true}/>
                        <div className="border-t border-slate-300 w-20 m-5"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Resume;