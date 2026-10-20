import React, { useContext, useEffect, useState } from "react";
import { EasterEggContext } from "../context/EasterEggContext";

const EasterEggBadge = ({ eggCount, isMaxEggs }: { eggCount: number; isMaxEggs: boolean }) => {
    const [showBadge, setShowBadge] = useState(true);
    const [startFadeOut, setStartFadeOut] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const eggTextPlural = eggCount === 1 ? "Egg" : "Eggs";

    useEffect(() => {
        const timerLength = eggCount < 8 ? 6000 : 10000;
        const fadeTimer = window.setTimeout(() => setStartFadeOut(true), timerLength);
        const hideTimer = window.setTimeout(() => setShowBadge(false), timerLength + 500);

        return () => {
            window.clearTimeout(fadeTimer);
            window.clearTimeout(hideTimer);
        }
    }, [eggCount]);

    useEffect(() => {
        if (!dismissed) return;
        const timer = window.setTimeout(() => setShowBadge(false), 500);
        return () => window.clearTimeout(timer);
    }, [dismissed]);

    const badgeClick = () => {
        setStartFadeOut(true);
        setDismissed(true);
    }

    return (
        <>
            {
                showBadge && (
                    <>
                        <div
                            onClick={badgeClick}
                            className={`fixed bottom-5 right-5 sm:bottom-10 sm:right-10 z-50
                        animate-fade-in-fast cursor-pointer ${startFadeOut ? "animate-pulse" : ""} ${isMaxEggs ? "animate-bounce" : ""}`}
                        >
                            <div className="absolute inset-0 rounded-3xl py-3 px-5
                            bg-linear-to-r from-indigo-400 to-rose-400 blur-xs
                            animate-breathe transition-all" />
                            <div className="relative text-white bg-linear-to-r from-secondary to-rose-400 rounded-3xl py-3 px-5
                            transition-colors ease-in-out duration-75 z-50">
                                {isMaxEggs ?
                                    `You found all ${eggCount} Easter Eggs!`
                                    :
                                    `You've found ${eggCount} of 8 Easter ${eggTextPlural}`
                                }
                            </div>
                        </div>
                    </>
                )}
        </>
    )
}

const EasterEggCounter = () => {
    const { eggCount, isMaxEggs } = useContext(EasterEggContext);
    return eggCount > 0 ? <EasterEggBadge key={eggCount} eggCount={eggCount} isMaxEggs={isMaxEggs} /> : null;
};

export default EasterEggCounter;
