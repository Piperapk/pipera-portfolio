import React, { Fragment, useContext, useState } from "react";
import Image from "next/image";
import Button_Primary from "./buttons/Button_Primary";
import LinkButtons from "./buttons/Link_Buttons";
import Tooltip_Responsinve from "./buttons/Tooltip_Responsive";
import { EasterEggContext } from "./context/EasterEggContext";

interface Props {
    containerWidth?: string
    id?: string
}

const Contact = ({containerWidth, id}: Props) => {

    const [isIconClick, setIsIconClick] = useState<Boolean>(false)

    //Handle tooltip/easter egg click
    const [isEggFound, setIsEggFound] = useState<Boolean>(false);

    const eggCountContext = useContext(EasterEggContext);

    const iconClick = () => {
        if (isIconClick) {
            setIsIconClick(false)
        } else {
            setIsIconClick(true)
            window.setTimeout(() => {
                setIsIconClick(false)
            }, 500);
        }

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
                    <div onClick={iconClick} className="flex translate-y-[1px]">
                        <div className="-mb-[6px] pl-5 cursor-default sm:cursor-pointer">
                            <Image src={'/media/icon_contact_pencils.svg'} alt='GitHub profile' width={50} height={45} priority className="opacity-80 dark:invert" />
                        </div>
                        <div className={`-ml-[19px] mt-[19px] -mb-[6px] cursor-default sm:cursor-pointer ${isIconClick ? "animate-slide" : ""}`}>
                            <Image src={'/media/icon_contact_letter.svg'} alt='GitHub profile' width={35} height={26} priority className="opacity-80 dark:invert" />
                        </div>
                    </div>
                    <h1 className="text-black dark:text-white text-4xl leading-[25px] sm:leading-[30px] font-thin px-7">{"Get in touch"}</h1>
                </div>
            </div>
            <div className="border-t border-slate-300" />

            <div className={`${containerWidth} m-auto p-16 text-center space-y-6`}>
                <p className="text-base">Are you looking to say <Tooltip_Responsinve
                    text="hi"
                    tooltipText="Hello there! ... General Kenobi!"
                    adjustHPositionLeft="-left-[116px]"
                    adjustVPositionMarginTop="-mt-9"
                    adjustVPositionMarginTopMobile="mt-8" />?</p>
                <div>
                    <Button_Primary href="mailto:i.krushkov@outlook.com" text="Say hello!" />
                </div>
                <div className='flex pt-2 pb-5 space-x-1.5 justify-center'>
                    <LinkButtons />
                </div>

                <div className="border-t border-slate-300" />
                <p className="text-sm pt-5">Lovingly designed and built with Next.js and Tailwind <br /> by <Tooltip_Responsinve
                    text="Ivan Krushkov"
                    tooltipText="return (this.person)"
                    adjustHPositionLeft="-left-[35px]"
                    adjustVPositionMarginTop="-mt-9"
                    adjustVPositionMarginTopMobile="-mt-14"
                    widthMobile="w-[200px]" />
                </p>
            </div>
        </Fragment>
    )

}

export default Contact