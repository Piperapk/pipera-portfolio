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
                    <button className='bg-primary text-white text-base font-semibold p-4 rounded-3xl min-w-[112px]
                    transition-colors duration-150 ease-out hover:text-rose-400 hover:bg-white hover:outline-1 hover:outline hover:outline-offset-[-1px] hover:outline-rose-400'>{text}</button>
                </a> 
                :
                <a id={id} href={href}>
                    <button className='bg-primary text-white text-base font-semibold p-4 rounded-3xl min-w-[112px]
                    transition-colors duration-150 ease-out hover:text-rose-400 hover:bg-white hover:outline-1 hover:outline hover:outline-offset-[-1px] hover:outline-rose-400'>{text}</button>
                </a>
            }

        </Fragment>
    )
}

export default Button_Primary;