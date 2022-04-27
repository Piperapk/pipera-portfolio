import React from "react";
import Button_Primary from "./buttons/Button_Primary";
import Text_Card from "../components/cards/Text_Card"

interface Props {
    containerWidth?: string
    id?: string
}

const Resume = ({containerWidth, id}:Props) => {

    return(
        <div id={id} className="mt-20">
            <div className={`${containerWidth} m-auto`}>
                <h1 className="text-4xl leading-[25px] sm:leading-[30px] font-thin px-5 ">Resume</h1>
            </div>
            <div className="border-t border-slate-300"/>
            <div className="bg-gray-100 pt-10 pb-20 sm:pt-14">

                <div className={`${containerWidth} m-auto
                flex flex-wrap justify-center py-10`}>
                    <div className="flex justify-center items-center">
                        <div className="border-t border-slate-300 w-5 sm:w-20 m-5"/>
                        <Button_Primary text="View Resume" href="/files/IvanKrushkovCV.pdf" openInNewWindow={true}/>
                        <div className="border-t border-slate-300 w-5 sm:w-20 m-5"/>
                    </div>
                </div>

                <div className={`${containerWidth} m-auto px-5 sm:px-0 mt-8`}>
                    <h1 className="text-2xl leading-[15px] sm:leading-[20px] font-light text-center sm:text-left px-5 ">{"In brief"}</h1>
                    <div className="border-t border-slate-300"/>
                </div>

                <div className={`${containerWidth} m-auto gap-x-8 gap-y-5 px-10 sm:px-0 py-10
                flex flex-wrap`}>
                    <div className="flex-1">
                        <Text_Card title={"Engineering"} sections={[
                            {sectionId: 0, sectionTitle: "Software development skills:", sectionList: [
                                "Writing efficient, maintainable and testable code.",
                                "Use and knowledge of RESTful and GraphQL APIs.",
                                "High flexibility and quick learning on the tools required for each project.",
                                "Experience of cross-platform development for Android, iOS and the web.",
                                "Writing user stories with focus on delivering value to the end user."
                            ]},
                            {sectionId: 1, sectionTitle: "Software development practices:", sectionList: [
                                "Strong focus on team collaboration and communication.",
                                "Thriving in Agile environment. Solid knowledge of Jira and version control.",
                                "Creating high-level technical requirements and design specifications.",
                                "Aptitude for UX / UI Design and an eye for detail."
                            ]}
                        ]}/>              
                    </div>
                    <div className="flex-1">
                        <Text_Card title={"Product"} sections={[
                            {sectionId: 0, sectionTitle: "Responsibility and Leadership:", sectionList: [
                                "Driving engineering and non-engineering teams to timely and high-quality delivery.",
                                "Collaborating with Senior Management and stakeholders to ensure commercial viability and added value from products.",
                                "Distilling technical problems to possibly non-technical stakeholders."
                            ]},
                            {sectionId: 1, sectionTitle: "Product and commercial skills:", sectionList: [
                                "Leading product strategy and underlying commercial plans, ensuring they're communicated and implemented across the organization.",
                                "In-depth market research - customers, competitors and overall market landscape.",
                                "Liaising with key customers and partners throughout the product life cycle."
                            ]}
                        ]}/>              
                    </div>
                </div>

                <div className={`${containerWidth} m-auto px-5 sm:px-0 mt-8`}>
                    <h1 className="text-2xl leading-[15px] sm:leading-[20px] font-light text-center sm:text-left px-5 ">{"Currently working at"}</h1>
                    <div className="border-t border-slate-300"/>
                    <h4 className="text-lg font-semibold text-center my-12">{`Scudamore's Punting Company - `}<span className="text-primary">Commercial and Product Manager</span></h4>
                    <div className="border-t border-slate-300"/>
                </div>

            </div>
        </div>
    )
}

export default Resume;