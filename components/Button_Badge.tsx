import React, { Fragment } from "react";

interface Props {
    text: string,
    textSize?: string,
    bgColor?: string
}

//Tailwind based component
const Button_Badge = ({text, textSize ="text-base",bgColor = "bg-slate-600"}:Props) => {

    return(
        <Fragment>
            <button className={`${bgColor}
            text-white ${textSize} font-semibold px-4 py-1 rounded-3xl text-left`}>
            {text}
            </button>
        </Fragment>
    )
}

export default Button_Badge;