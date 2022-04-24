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
            <div className="bg-gray-100 rounded-t-2xl shadow-md-center border-t-[1px] border-x-[1px] border-gray-200/50">
                <h1 className="px-5 py-2
                text-2xl font-normal text-slate-800">
                    {title}
                </h1>
            </div>
            <div className="bg-white shadow-md-center
            rounded-b-2xl px-5 py-3 text-base whitespace-pre-line">
                {children}

                {
                    sections.map(section => (
                        <div key={section.sectionId}>
                            <h4 className="font-bold">{section.sectionTitle}</h4>
                            <ul className="list-disc list-inside">
                            {
                                section.sectionList.map(listItem => (
                                    <li>
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