import React, { Fragment } from "react";
import { text } from "stream/consumers";

//Tailwind component interface
interface Props {
    text: string
    bgColor?: string
    adjustHPositionLeft?: string
    adjustVPositionMarginTop?: string
}

const Tooltip = ({
    text,
    bgColor = "secondary",
    adjustHPositionLeft = "-left-[85%]",
    adjustVPositionMarginTop = "-mt-8"
}:Props) => {
    return(
        <Fragment>
            <span className={`absolute scale-0 sm:group-hover:scale-100 opacity-0 sm:group-hover:opacity-100 min-w-max px-3 py-1 ${adjustVPositionMarginTop} top-0 ${adjustHPositionLeft} rounded-2xl 
            bg-${bgColor} text-white text-base font-normal transition-all duration-200 origin-bottom ease-out`}>
                {text}
                <span className={`after:block after:absolute after:rotate-45 after:border-4 after:left-1/2 after: after:border-solid after:border-secondary`}/>
            </span>
        </Fragment>
    )
}

export default Tooltip;