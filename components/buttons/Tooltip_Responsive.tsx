import React, {Fragment, useCallback, useEffect, useState } from "react";
import Tooltip from "./Tooltip";
import Tooltip_Mobile from "./Tooltip_Mobile";

interface Props {
    text: string
    tooltipText: string
    bgColor?: string
    adjustHPositionLeft?: string
    adjustVPositionMarginTop?: string
    adjustHPositionLeftMobile?: string
    adjustVPositionMarginTopMobile?: string
    widthMobile?: string
    timerMobile?: number
}

const Tooltip_Responsinve = ({
    text,
    tooltipText,
    bgColor,
    adjustHPositionLeft,
    adjustVPositionMarginTop,
    adjustHPositionLeftMobile,
    adjustVPositionMarginTopMobile,
    widthMobile,
    timerMobile = 3000
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
    const [showTooltip, setShowTooltip] = useState<Boolean | null>(null)

    useEffect(() => {
        if (showTooltip != null) {
            const timeout = window.setTimeout(() => {
                setShowTooltip(false)
            }, timerMobile)
            return () => {
                window.clearTimeout(timeout)
            }
        }
    }, [showTooltip, timerMobile])

    const tooltipClick = () => {
        if (showTooltip) {
            setShowTooltip(false)
        } else {
            setShowTooltip(true)
        }
    }

    return (
        <Fragment>
            <span onClick={tooltipClick}
            className='text-primary cursor-pointer select-none relative group hover:text-rose-400 transition-colors ease-out'>
                {text}
                {viewportWidth < smBreakpoint ? showTooltip ? <Tooltip_Mobile text={tooltipText}
                bgColor={bgColor}
                adjustHPositionLeft={adjustHPositionLeftMobile}
                adjustVPositionMarginTop={adjustVPositionMarginTopMobile}
                width={widthMobile}
                /> : null : <Tooltip text={tooltipText}
                bgColor={bgColor}
                adjustHPositionLeft={adjustHPositionLeft}
                adjustVPositionMarginTop={adjustVPositionMarginTop}                
                />} </span>
        </Fragment>
    )
}

export default Tooltip_Responsinve;