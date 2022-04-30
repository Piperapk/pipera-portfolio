import React, { Fragment } from "react";
import Button_Badge from "./Button_Badge";
import { Button } from "./Button_Badge";

interface Props extends Omit<Button, "text"> {
    buttons: Button[]
};

const Button_Badge_Array = ({
    buttons,
    textSize,
    paddingX,
    paddingY,
    bgColor,
    hoverColor
}: Props) => {
    return(
        <Fragment>
            {                   
                buttons.map((button, i) => (
                    <Button_Badge 
                    text={button.text} 
                    bgColor={bgColor} 
                    hoverColor={hoverColor}
                    textSize={textSize} 
                    paddingX={paddingX} 
                    paddingY={paddingY} 
                    imgPath={button.imgPath}
                    imgUrl={button.imgUrl}                    
                    key={i}/>
                ))
            }
        </Fragment>
    )
}

export default Button_Badge_Array;