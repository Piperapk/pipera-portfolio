import React, { Fragment, useContext, useEffect, useState } from "react";
import { EasterEggContext } from "./context/EasterEggContext";

const EasterEggCounter = () => {

    const eggCountContext = useContext(EasterEggContext);
    const eggCount = eggCountContext?.eggCount;

    const [eggTextPlural, setEggTextPlural] = useState("Egg");

    useEffect(() => {
        eggCount === 1 ? setEggTextPlural("Egg") : setEggTextPlural("Eggs");
    }, [eggCount])

    return (
        <Fragment>
            {
                eggCount === 0 ?
                    null
                    :
                    <div className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10 z-10
                    text-white bg-gradient-to-r from-secondary to-rose-400 rounded-3xl py-3 px-5
                    transition-colors ease-in-out duration-75">
                        {eggCountContext?.isMaxEggs ?
                            `You've found all ${eggCountContext?.eggCount} Easter Eggs!`
                            :
                            `You've found ${eggCountContext?.eggCount} Easter ${eggTextPlural}.`
                        }
                    </div>
            }
        </Fragment>
    )
}

export default EasterEggCounter;