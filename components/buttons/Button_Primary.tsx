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
                    transition-colors duration-150 ease-out pf:hh:hover:text-rose-400 pf:hh:hover:bg-white dark:pf:hh:hover:bg-slate-100 pf:hh:hover:outline-1 pf:hh:hover:outline pf:hh:hover:outline-offset-[-1px] pf:hh:hover:outline-rose-400
                    active:text-rose-400 active:bg-white active:outline-1 active:outline active:outline-offset-[-1px] active:outline-rose-400'>
                        {text}
                    </button>
                </a> 
                :
                <a id={id} href={href}>
                    <button className='bg-primary text-white text-base font-semibold p-4 rounded-3xl min-w-[112px]
                    transition-colors duration-150 ease-out pf:hh:hover:text-rose-400 pf:hh:hover:bg-white dark:pf:hh:hover:bg-slate-100 pf:hh:hover:outline-1 pf:hh:hover:outline pf:hh:hover:outline-offset-[-1px] pf:hh:hover:outline-rose-400
                    active:text-rose-400 active:bg-white active:outline-1 active:outline active:outline-offset-[-1px] active:outline-rose-400'>
                        {text}
                    </button>
                </a>
            }

        </Fragment>
    )
}

export default Button_Primary;