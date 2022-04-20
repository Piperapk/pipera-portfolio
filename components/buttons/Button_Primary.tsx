import React, { Fragment } from "react";

interface Props {
    href?: string
    id?: string
    text: string
    openInNewWindow?: boolean
}

const Button_Primary = ({href, id, text, openInNewWindow = false}:Props) => {
    return(
        <Fragment>
            {openInNewWindow ? 
                <a id={id} href={href} target='_blank' rel='noreferrer'>
                    <button className='bg-primary text-white text-base font-semibold p-4 rounded-3xl min-w-[112px]'>{text}</button>
                </a> 
                :
                <a id={id} href={href}>
                    <button className='bg-primary text-white text-base font-semibold p-4 rounded-3xl min-w-[112px]'>{text}</button>
                </a>
            }

        </Fragment>
    )
}

export default Button_Primary;