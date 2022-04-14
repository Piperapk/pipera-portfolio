import React, { Fragment } from "react";
import Button_Badge from "./Button_Badge";

interface Props {
    texts: string[],
    textSize?: string,

    paddingX?: string,
    paddingY?: string,

    bgColor?: string
}

const Button_Badge_Array = ({
    texts,
    textSize = "text-base",
    paddingX = "px-4",
    paddingY = "py-1",
    bgColor = "bg-slate-600"
}: Props) => {
    console.log(texts)

    return(
        <Fragment>
            {                   
                texts.map((text, i) => (
                    <Button_Badge text={text} bgColor={bgColor} textSize={textSize} paddingX={paddingX} paddingY={paddingY} key={i}/>
                ))
            }
        </Fragment>
    )
}

export default Button_Badge_Array;