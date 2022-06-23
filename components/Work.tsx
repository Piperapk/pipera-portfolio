import React, { forwardRef, Fragment, useContext, useState } from "react";
import Image from "next/image";
import { useTheme } from 'next-themes';
import { EasterEggContext } from "../context/EasterEggContext";
import type { OpenSourceWorks, PortfolioWorks } from "../types/PortfolioData.Interface"

// Component imports
import Work_Card from "./cards/Work_Card";
import Work_Card_Small from "./cards/Work_Card_Small";

interface DataIngestionProps {
    works: PortfolioWorks[]
    openSourceWorks: OpenSourceWorks[]    
}

interface Props {
    containerWidth?: string
    id?: string
    portfolioData: DataIngestionProps
}

const Work = forwardRef(({
    containerWidth,
    id,
    portfolioData 
}: Props, ref) => {

    const { theme, setTheme } = useTheme();

    //Handle tooltip/easter egg click
    const [isEggFound, setIsEggFound] = useState<Boolean>(false);

    const eggCountContext = useContext(EasterEggContext);

    const iconClick = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');

        // Count easter egg
        if (isEggFound) {
            return;
        } else {
            setIsEggFound(true);
            eggCountContext?.updateEggCount(eggCountContext.eggCount + 1);
        }
    }

    return (
        <Fragment>
            <div id={id} className="bg-gray-100 dark:bg-slate-700">
                <div className={`${containerWidth} m-auto flex items-end bg-gray-100 dark:bg-slate-700`}>
                    <div onClick={iconClick} className="relative translate-y-[7px] pl-5 cursor-default sm:cursor-pointer">
                        <div className="absolute -top-[5px] right-[3px] hidden dark:block">
                            <Image src={'/media/desk_light.svg'} alt='Dark, light mode switch on' width={14} height={30} priority className="" />
                        </div>
                        <Image src={'/media/icon_desk.svg'} alt='Dark, light mode switch' width={45} height={45} priority className="opacity-80 dark:invert" />
                    </div>
                    <h1 className="text-black dark:text-white text-4xl leading-[25px] sm:leading-[30px] font-thin px-7">Work</h1>
                </div>
            </div>
            <div className="border-t border-slate-300" />

            <div className={`${containerWidth} m-auto px-5 sm:px-0 mt-16`}>
                <h1 className="text-2xl leading-[15px] sm:leading-[20px] font-light text-center sm:text-left px-5 ">{"Latest work"}</h1>
                <div className="border-t border-slate-300" />
            </div>

            <div className="p-10 sm:pt-10 space-y-10">
                {
                    portfolioData.works.map(workCard => (
                        <Work_Card
                            key={workCard.id}
                            containerWidth={containerWidth}
                            title={workCard.attributes.title}
                            textBodyCase={workCard.attributes.textCase}
                            textBodyOutcome={workCard.attributes.textOutcome}
                            tagButtons={workCard.attributes.tagButtons}
                            linkButtons={workCard.attributes.linkButtons}
                            image={workCard.attributes.image ? workCard.attributes.image.data.attributes.url : workCard.attributes.localImageUrl!}
                        />
                    ))
                }
            </div>

            <div className={`${containerWidth} m-auto px-5 sm:px-0 mt-8`}>
                <h1 className="text-2xl leading-[15px] sm:leading-[20px] font-light text-center sm:text-left px-5 ">{"Open source contributions"}</h1>
                <div className="border-t border-slate-300" />
            </div>

            <div className="p-10 sm:pt-10 space-y-10">
                {
                    portfolioData.openSourceWorks.map(openSourceCard => (
                        <Work_Card_Small 
                            key={openSourceCard.id}
                            containerWidth={containerWidth}
                            title={openSourceCard.attributes.title}
                            textBody={openSourceCard.attributes.textBody}
                            tagButtons={openSourceCard.attributes.tagButtons}
                            linkButtons={openSourceCard.attributes.linkButtons}
                        />
                    ))
                }
            </div>
        </Fragment>
    )
})

Work.displayName = "Work"

export default Work