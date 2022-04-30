import React, { Fragment } from "react";
import Image from "next/image";

export interface Button {
    text: string,
    textSize?: string,

    imgPath?: string,
    imgUrl?: string,

    paddingX?: string,
    paddingY?: string,

    bgColor?: string
    hoverColor?: string
}

//Tailwind based component
const Button_Badge = ({
    text,
    textSize = "text-base",
    paddingX = "px-4",
    paddingY = "py-1",
    bgColor = "bg-slate-600",
    hoverColor= "",
    imgPath = "",
    imgUrl = ""
}:Button) => {

    return(
        <Fragment>   
            {imgUrl ? (
                <a href={imgUrl} target='_blank' rel='noreferrer'>      
                    <button className={`${bgColor} text-white ${textSize} font-semibold ${paddingX} ${paddingY} rounded-3xl text-center inline-flex items-center gap-x-1.5 min-w-max group
                    ${hoverColor ? `transition-colors duration-300 ease-out hover:text-${hoverColor} hover:bg-white hover:outline-1 hover:outline hover:outline-offset-[-1px] hover:outline-${hoverColor}'` : "" }`}>
                        {imgPath ? <Image src={imgPath} alt='External link to project' width={20} height={20} className="invert group-hover:invert-[50%]"/> : null}
                        {text}
                    </button>
                </a>
            ) : (   
                <div className={`${bgColor} text-white ${textSize} font-semibold ${paddingX} ${paddingY} rounded-3xl text-center inline-flex items-center gap-x-1.5 min-w-max group`}>
                    {imgPath ? <Image src={imgPath} alt='External link to project' width={20} height={20} className="invert"/> : null}
                    {text}
                </div>
            )}
        </Fragment>
    )
}

export default Button_Badge;