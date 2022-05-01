import React from "react";
import Button_Badge_Array from "../buttons/Button_Badge_Array"
import { Button } from "../buttons/Button_Badge";

interface Props {
    containerWidth?: string //Max width of the container
    
    title: string
    textBody: string
    tagButtons: Button[]
    linkButtons: Button[]
}

const Work_Card = ({
    containerWidth,
    title,
    textBody,
    tagButtons,
    linkButtons
}: Props) => {

    return (
        <div className={`${containerWidth} m-auto flex flex-wrap`}>
            <div className="flex-auto bg-gray-100 dark:bg-gradient-to-b from-slate-200 to-slate-300 rounded-t-2xl shadow-md-center border-t-[1px] border-x-[1px] border-gray-200/50">
                <h1 className="px-5 py-2
                text-2xl font-normal text-slate-800 dark:text-slate-900">
                    {title}
                </h1>
            </div>
            <div className="flex-auto bg-white dark:bg-slate-600 shadow-md-center
            rounded-b-2xl px-5 py-3">
                <p className="text-base whitespace-pre-line pb-3">
                    {textBody}
                </p>
                <div className="flex flex-wrap gap-y-4">
                    <div className="flex-auto flex flex-wrap items-center gap-1">
                        <Button_Badge_Array buttons={tagButtons} bgColor="bg-secondary" textSize="text-sm" paddingY="py-[2px]"/>
                    </div>
                    <div className="flex-auto flex flex-wrap items-center gap-1 justify-left sm:justify-end">
                        <Button_Badge_Array buttons={linkButtons} bgColor="bg-primary" hoverColor="rose-400" textSize="text-sm" paddingY="py-1.5"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work_Card;