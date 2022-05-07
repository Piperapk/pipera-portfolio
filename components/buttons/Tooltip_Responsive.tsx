import React, {Fragment, useEffect, useState } from "react";
import Tooltip from "./Tooltip";
import Tooltip_Mobile from "./Tooltip_Mobile";

interface Props {
    text: string
    bgColor?: string
    adjustHPositionLeft?: string
    adjustVPositionMarginTop?: string
    adjustHPositionLeftMobile?: string
    adjustVPositionMarginTopMobile?: string
}

const Tooltip_Responsinve = ({
    text,
    bgColor,
    adjustHPositionLeft,
    adjustVPositionMarginTop,
    adjustHPositionLeftMobile,
    adjustVPositionMarginTopMobile
}: Props) => {

    //Getting width of viewport to produce a responsive layout
    const [viewportWidth, setViewportWidth] = useState<Number>(0);
    const smBreakpoint: Number = 640;

    useEffect(() => {

        // Handler SSR initial window size. Window is undefined server side.
        function handleResize() {
            // Set window width/height to state
            setViewportWidth(window.innerWidth)
        }
        if (typeof window !== 'undefined') {
            handleResize()
        }

        const handleWindowResize = () => setViewportWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [])

    //Handle tooltip/easter egg click
    const tooltipClick = () => {
        
    }

    return (
        <Fragment>
            <span onClick={tooltipClick}
            className='text-primary cursor-pointer select-none relative group hover:text-rose-400 transition-colors ease-out'>
                welcome
                {viewportWidth < smBreakpoint ? <Tooltip_Mobile text={text}
                bgColor={bgColor}
                adjustHPositionLeft={adjustHPositionLeftMobile}
                adjustVPositionMarginTop={adjustVPositionMarginTopMobile}
                /> : <Tooltip text={text}
                bgColor={bgColor}
                adjustHPositionLeft={adjustHPositionLeft}
                adjustVPositionMarginTop={adjustVPositionMarginTop}
                />} </span>
        </Fragment>
    )
}

export default Tooltip_Responsinve;