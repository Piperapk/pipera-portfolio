import React, { useContext, useEffect, useState } from "react";
import { EasterEggContext } from "../context/EasterEggContext";

const EasterEggCounter = () => {

    const eggCountContext = useContext(EasterEggContext);
    const eggCount = eggCountContext?.eggCount;

    const [showBadge, setShowBadge] = useState(false);
    const [startFadeOut, setStartFadeOut] = useState(false);
    const [eggTextPlural, setEggTextPlural] = useState("Egg");

    useEffect(() => {
        eggCount! > 0 ? setShowBadge(true) : null;
        eggCount === 1 ? setEggTextPlural("Egg") : setEggTextPlural("Eggs");

        const timerLength = eggCount! < 8 ? 6000 : 10000;
        const timer = window.setTimeout(() => {
            badgeClick();
        }, timerLength);

        return () => {
            window.clearTimeout(timer);
        }
    }, [eggCount])

    const badgeClick = () => {
        setStartFadeOut(true);
        window.setTimeout(() => {
            setShowBadge(false);
            setStartFadeOut(false);
        }, 500);
    }

    return (
        <>
            {
                showBadge && (
                    <>
                        <div 
                        onClick={badgeClick} 
                        className={`fixed bottom-5 right-5 sm:bottom-10 sm:right-10 z-50
                        animate-fade-in-fast cursor-pointer ${startFadeOut ? "animate-pulse" : ""} ${eggCountContext?.isMaxEggs ? "animate-bounce" : ""}`}
                        >
                            <div className="absolute inset-0 rounded-3xl py-3 px-5
                            bg-gradient-to-r from-indigo-400 to-rose-400 blur-sm
                            animate-breathe transition-all" />
                            <div className="relative text-white bg-gradient-to-r from-secondary to-rose-400 rounded-3xl py-3 px-5
                            transition-colors ease-in-out duration-75 z-50">
                                {eggCountContext?.isMaxEggs ?
                                    `You found all ${eggCountContext?.eggCount} Easter Eggs!`
                                    :
                                    `You've found ${eggCountContext?.eggCount} of 8 Easter ${eggTextPlural}`
                                }
                            </div>
                        </div>
                    </>
                )}
        </>
    )
}

export default EasterEggCounter;