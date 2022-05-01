import React from "react";

interface Section {
    sectionId: number
    sectionTitle: string
    sectionList: string[]
}

interface Props {
    containerWidth?: string //Max width of the container
    title: string
    children?: React.ReactNode;

    sections: Section[]
}

const Work_Card = ({
    containerWidth = "",
    title,
    children,
    sections
}: Props) => {

    return (
        <div className={`${containerWidth}`}>
            <div className="bg-gray-100 dark:bg-gradient-to-b from-slate-200 to-slate-300 rounded-t-2xl shadow-md-center border-t-[1px] border-x-[1px] border-gray-200/50">
                <h1 className="px-5 py-2
                text-2xl font-normal text-slate-800">
                    {title}
                </h1>
            </div>
            <div className="bg-white dark:bg-slate-600 shadow-md-center space-y-5
            rounded-b-2xl px-5 py-3 text-base whitespace-pre-line">
                {children}

                {
                    sections.map(section => (
                        <div key={section.sectionId}>
                            <h4 className="font-bold pb-1">{section.sectionTitle}</h4>
                            <ul className="list-disc list-inside marker:text-primary">
                            {
                                section.sectionList.map((listItem, i) => (
                                    <li key={i} className="pb-1 sm:pb-2">
                                        {listItem}
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Work_Card;