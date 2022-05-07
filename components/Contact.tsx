import React, { Fragment } from "react";
import Image from "next/image";
import Button_Primary from "./buttons/Button_Primary";
import Tooltip from "./buttons/Tooltip";
import LinkButtons from "./buttons/Link_Buttons";

interface Props {
    containerWidth?: string
    id?: string
}

const Contact = ({containerWidth, id}: Props) => {

    return (
        <Fragment>
            <div id={id} className="bg-gray-100 dark:bg-slate-700">
                <div className={`${containerWidth} m-auto flex items-end bg-gray-100 dark:bg-slate-700`}>
                <div className="translate-y-[9px] pl-5">
                    <Image src={'/media/icon_contact.svg'} alt='GitHub profile' width={50} height={45} className="opacity-80 dark:invert"/>
                </div>
                    <h1 className="text-black dark:text-white text-4xl leading-[25px] sm:leading-[30px] font-thin px-7">{"Get in touch"}</h1>
                </div>
            </div>
            <div className="border-t border-slate-300"/>

            <div className={`${containerWidth} m-auto p-16 text-center space-y-6`}>
                <p className="text-base">Are you looking to say <span className="text-primary group relative hover:text-rose-400 transition-colors ease-out">
                    hi
                      <Tooltip text="Hello there! ... General Kenobi!" adjustHPositionLeft="-left-[116px]" adjustVPositionMarginTop="-mt-9"/>
                </span>?</p>
                <div>
                    <Button_Primary href="mailto:i.krushkov@outlook.com" text="Say hello!"/>
                </div>
                <div className='flex pt-2 pb-5 space-x-1.5 justify-center'>
                    <LinkButtons/>
                </div>

                <div className="border-t border-slate-300"/>
                <p className="text-sm pt-5">Lovingly designed and built with Next.js and Tailwind <br/> by <span className="text-primary group relative hover:text-rose-400 transition-colors ease-out">
                    Ivan Krushkov
                        <Tooltip text="return this.website;" adjustHPositionLeft="-left-[35px]" adjustVPositionMarginTop="-mt-9"/>
                    </span>
                </p>
            </div>
        </Fragment>
    )

}

export default Contact