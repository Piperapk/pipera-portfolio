import React, { Fragment } from "react";
import Image from "next/image";

const LinkButtons = () => {
    return(
        <Fragment>
            <a href='https://github.com/Piperapk' target='_blank' rel='noreferrer' className="transition-all duration-300 ease-out hover:-translate-y-1">
                <Image src={'/media/icon_github.svg'} alt='GitHub profile' width={30} height={30} className="-z-10 dark:invert"/>
            </a>
            <a href='https://www.linkedin.com/in/ivan-krushkov/' target='_blank' rel='noreferrer' className="transition-all duration-300 ease-out hover:-translate-y-1">
                <Image src={'/media/icon_linkedin.svg'} alt='GitHub profile' width={30} height={30} className="-z-10 dark:invert"/>
            </a>
            <a href='mailto:i.krushkov@outlook.com' target='_blank' rel='noreferrer' className="transition-all duration-300 ease-out hover:-translate-y-1">
                <Image src={'/media/icon_email.svg'} alt='GitHub profile' width={30} height={30} className="-z-10 dark:invert"/>
            </a>
        </Fragment>
    )
}

export default LinkButtons;