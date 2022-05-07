import React, { Fragment } from "react";

//Tailwind component interface
interface Props {
    text: string
    bgColor?: string
    adjustHPositionLeft?: string
    adjustVPositionMarginTop?: string
}

const Tooltip_Mobile = ({
    text,
    bgColor = "secondary",
    adjustHPositionLeft = "-left-2",
    adjustVPositionMarginTop = "mt-12"
}:Props) => {
    return(
        <Fragment>
            <span className={`absolute px-3 py-3 ${adjustVPositionMarginTop} ${adjustHPositionLeft} rounded-2xl 
            bg-${bgColor} text-white text-base font-normal transition-all duration-200 origin-center ease-out
            right-0 m-auto`}>
                {text}
            </span>
        </Fragment>
    )
}

export default Tooltip_Mobile;