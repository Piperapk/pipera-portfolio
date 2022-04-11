import React, { Fragment } from "react";

interface Props {
    text: string,
    bgColor?: string
}

//Tailwind based component
const Button_List = ({text, bgColor = "bg-slate-600"}:Props) => {

    return(
        <Fragment>
            <button className={`${bgColor}
            text-white text-base font-semibold px-4 py-1 rounded-3xl text-left`}>
            {text}
            </button>
        </Fragment>
    )
}

export default Button_List;