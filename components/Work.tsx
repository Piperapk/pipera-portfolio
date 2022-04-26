import React, { forwardRef, Fragment } from "react";
import Work_Card from "./cards/Work_Card";
import Work_Card_Small from "./cards/Work_Card_Small"

interface Props {
    containerWidth?: string
    id?: string
}

const Work = forwardRef(({containerWidth, id}: Props, ref) => (

        <Fragment>
            <div id={id} className="bg-gray-100">
                <div className={`${containerWidth} m-auto bg-gray-100`}>
                    <h1 className="text-4xl leading-[25px] sm:leading-[30px] font-thin px-5 ">{"Work"}</h1>
                </div>
            </div>
            <div className="border-t border-slate-300"/>

            <div className={`${containerWidth} m-auto px-5 sm:px-0 mt-16`}>
                <h1 className="text-2xl leading-[15px] sm:leading-[20px] font-light text-center sm:text-left px-5 ">{"Latest work"}</h1>
                <div className="border-t border-slate-300"/>
            </div>

            <div className="p-10 sm:pt-10 space-y-10">
                <Work_Card containerWidth={containerWidth}
                title={"Adventureme - Full-stack Travel Sharing App "}
                textBodyCase={"Built a mobile app for a missing market segment to help people find adventures with friends or strangers and cut costs."}
                textBodyOutcome={"Designed, built and delivered a full-stack cross-platform mobile app in 6 months. Fully fledged business plan developed to support the need of the app and analyze any competition. Utilising Google Firebase for authentication, database and storage."}
                tagButtons={[{text: "JavaScript"}, {text: "Vue"}, {text: "NativeScript"}, {text: "Firebase"}, {text: "Unsplash API"}]}
                linkButtons={[{text: "Code", imgPath: "/media/icon_github.svg", imgUrl: "https://github.com/Piperapk/AdventureTimeShare"}, {text: "Play Store", imgPath: "/media/icon_playstore.svg", imgUrl: "https://play.google.com/store/apps/details?id=com.adventuretime.test1&hl=en&gl=US"}]}
                image="/media/work/adventureme.jpg"
                />
                <Work_Card containerWidth={containerWidth}
                title={"Next.js SSG Portfolio with Typescript"}
                textBodyCase={"Using the latest web tech and a Jamstack paradigm, a refresh of my Wordpress based portfolio was needed. "}
                textBodyOutcome={"New portfolio. Fluid, fast and built from scratch on the latest available web frameworks. Designed with inspiration from Bauhaus and the Modernism movements. Deployed on the edge."}
                tagButtons={[{text: "Next.js"}, {text: "React"}, {text: "Typescript"}, {text: "Tailwind"}, {text: "GitHub"},{text: "Adobe XD"}]}
                linkButtons={[{text: "Code", imgPath: "/media/icon_github.svg", imgUrl: "https://github.com/Piperapk/pipera-portfolio"}, {text: "Link", imgPath: "/media/icon_link.svg", imgUrl: "https://ikrushkov.com"}]}
                image="/media/work/portfolio.jpg"
                />
                <Work_Card containerWidth={containerWidth}
                title={"Matrix Class and Container for C++"}
                textBodyCase={"Needed a way to manipulate and calculate matrices to help with a Machine Learning course and training."}
                textBodyOutcome={"A robust class and STL-like container to compute matrix operations. Built unit tests for each operation. Minimizing memory needs with move constructors where possible."}
                tagButtons={[{text: "C++"}, {text: "STL"}]}
                linkButtons={[{text: "Code", imgPath: "/media/icon_github.svg", imgUrl: "https://github.com/Piperapk/Matrix"}]}
                image="/media/work/matrixcontainer.png"
                />
            </div>

            <div className={`${containerWidth} m-auto px-5 sm:px-0 mt-8`}>
                <h1 className="text-2xl leading-[15px] sm:leading-[20px] font-light text-center sm:text-left px-5 ">{"Open source contributions"}</h1>
                <div className="border-t border-slate-300"/>
            </div>

            <div className="p-10 sm:pt-10 space-y-10">
                <Work_Card_Small containerWidth={containerWidth}
                title={"OpenRCT2 - Roller Coaster Tycoon 2"}
                textBody={"Supporting one of my favourite games with its open source implementation. Successfully added and merged new features. Collaborating over on the main GitHub page of the project with other contributors."}
                tagButtons={[{text: "C++"}, {text: "Git"}]}
                linkButtons={[{text: "Code", imgPath: "/media/icon_github.svg", imgUrl: "https://github.com/OpenRCT2/OpenRCT2"}, {text: "Website", imgPath: "/media/icon_link.svg", imgUrl: "https://openrct2.org/"}]}
                />
            </div>
        </Fragment>
))

Work.displayName = "Work"

export default Work