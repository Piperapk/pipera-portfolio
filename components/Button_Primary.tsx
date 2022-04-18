import React, { Fragment } from "react";

interface Props {
    href?: string
    id?: string
    text: string
}

const Button_Primary = ({href, id, text}:Props) => {
    return(
        <Fragment>
            <a id={id} href={href}>
                <button className='bg-primary text-white text-base font-semibold p-4 rounded-3xl w-28'>{text}</button>
            </a>
        </Fragment>
    )
}

export default Button_Primary;