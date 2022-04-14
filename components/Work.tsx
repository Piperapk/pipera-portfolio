import React, { Fragment } from "react";
import Image from "next/image";
import Button_Badge from "./Button_Badge";
import Button_Badge_Array from "./Button_Badge_Array";

interface Props {
    containerWidth?: string
}

const Work = (props: Props) => {
    return(
        <Fragment>
            <div className="bg-gray-100">
                <div className={`${props.containerWidth} m-auto bg-gray-100`}>
                    <h1 className="text-4xl leading-[25px] sm:leading-[30px] font-thin px-5 ">{"Work"}</h1>
                </div>
            </div>
            <div className="border-t border-slate-300"/>
            <div className="p-10 sm:pt-16">
                <div className={`${props.containerWidth} m-auto`}>

                    <h1 className="sm:px-5 pb-1
                    text-2xl font-normal text-slate-800">
                        Adventureme - Full-stack Travel Sharing App 
                    </h1>

                    <div className="relative">
                        <div className="flex flex-wrap">


                            <div className="h-40 bg-red-300">
                                <div className="flex-auto min-w-full min-h-max absolute bg-gray-300/30 z-10
                                rounded-t-2xl backdrop-blur-lg">
                                    <div className="min-h-[48px] flex flex-wrap justify-start items-center px-5 py-2 gap-1">
                                        <Button_Badge_Array texts={["JavaScript", "NativeScript", "Firebase", "Vue", "NativeScript", "Firebase", "Vue", "NativeScript", "Firebase", "Vue"]} bgColor="bg-secondary" textSize="text-sm" paddingY="py-[2px]"/>
                                    </div>
                                </div>
                                <div className="flex-auto min-w-full min-h-max absolute z-10
                                rounded-t-2xl">
                                    <div className="min-h-[48px] flex flex-wrap justify-end items-center px-5 py-2 gap-1 ">
                                        <Button_Badge_Array texts={["Code", "Play Store"]} bgColor="bg-primary" textSize="text-sm" paddingY="py-1.5"/>
                                    </div>
                                </div>
                            </div>


                            <div className="flex-auto basis-[395px] sm:basis-[45%] 
                            rounded-t-2xl sm:rounded-l-2xl sm:rounded-r-none 
                            overflow-hidden flex justify-center items-stretch">
                                <Image src="/media/profile_picture_500x.jpg" alt="work project" height="500" width="700" className="object-cover"/>
                            </div>
                            <div className="flex-auto basis-[480px] sm:basis-[55%]  bg-white
                            rounded-b-2xl sm:rounded-r-2xl sm:rounded-l-none
                            p-5 pt-20 md:pt-16">
                                <span className="font-bold text-base">Case: </span>
                                <p className="text-base whitespace-pre-line">
                                Build an app for a missing market segment to help people find adventures with friends or strangers and cut costs.
                                </p>
                                <div className="border-t border-slate-300 my-2"/>
                                <span className="font-bold text-base">Outcome: </span>
                                <p className="text-base whitespace-pre-line">
                                Designed, built and delivered a full-stack cross-platform mobile app in 6 months. Fully fledged business plan developed to support the need of the app and analyze any competition.
                                </p>

                            </div>
                        </div>
                        <div className="flex-auto basis-[100%] absolute inset-0
                        shadow-md-center rounded-2xl "/>
                    </div>


                </div>
            </div>

        </Fragment>
    )
}

export default Work