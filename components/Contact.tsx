import React, { forwardRef, Fragment } from "react";
import Button_Primary from "./buttons/Button_Primary";
import Image from 'next/image';
import Tooltip from "./buttons/Tooltip";

interface Props {
    containerWidth?: string
    id?: string
}

const Contact = ({containerWidth, id}: Props) => {

    return (
        <Fragment>
            <div id={id} className="bg-gray-100 dark:bg-slate-700">
                <div className={`${containerWidth} m-auto bg-gray-100 dark:bg-slate-700`}>
                    <h1 className="text-4xl leading-[25px] sm:leading-[30px] font-thin px-5 ">{"Get in touch"}</h1>
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
                    <a href='https://github.com/Piperapk' target='_blank' rel='noreferrer' className="transition-all duration-300 ease-out hover:-translate-y-1">
                        <Image src={'/media/icon_github.svg'} alt='GitHub profile' width={30} height={30} className="dark:invert"/>
                    </a>
                    <a href='https://www.linkedin.com/in/ivan-krushkov/' target='_blank' rel='noreferrer' className="transition-all duration-300 ease-out hover:-translate-y-1">
                        <Image src={'/media/icon_linkedin.svg'} alt='GitHub profile' width={30} height={30} className="dark:invert"/>
                    </a>
                    <a href='mailto:i.krushkov@outlook.com' target='_blank' rel='noreferrer' className="transition-all duration-300 ease-out hover:-translate-y-1">
                        <Image src={'/media/icon_email.svg'} alt='GitHub profile' width={30} height={30} className="dark:invert"/>
                    </a>
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