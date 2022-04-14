import React, { Fragment } from "react";

interface Props {
    text: string,
    textSize?: string,

    paddingX?: string,
    paddingY?: string,

    bgColor?: string
}

//Tailwind based component
const Button_Badge = ({
    text,
    textSize = "text-base",
    paddingX = "px-4",
    paddingY = "py-1",
    bgColor = "bg-slate-600"
}:Props) => {

    return(
        <Fragment>
            <button className={`${bgColor}
            text-white ${textSize} font-semibold ${paddingX} ${paddingY} rounded-3xl text-left`}>
            {text}
            </button>
        </Fragment>
    )
}

export default Button_Badge;