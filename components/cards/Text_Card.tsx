import React from "react";

interface Props {
    containerWidth?: string //Max width of the container
    title: string
    children: React.ReactNode;
}

const Work_Card = ({
    containerWidth = "",
    title,
    children
}: Props) => {

    return (
        <div className={`${containerWidth}`}>
            <div className="bg-gray-100 rounded-t-2xl shadow-md-center border-t-[1px] border-x-[1px] border-gray-200/50">
                <h1 className="px-5 py-2
                text-2xl font-normal text-slate-800">
                    {title}
                </h1>
            </div>
            <div className="bg-white shadow-md-center
            rounded-b-2xl px-5 py-3 text-base whitespace-pre-line">
                {children}
            </div>
        </div>
    )
}

export default Work_Card;