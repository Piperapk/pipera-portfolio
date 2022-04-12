import React, { Fragment } from "react";
import Image from "next/image";

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
                            <div className="flex-auto basis-[395px] sm:basis-[45%] h-[270px]
                            rounded-t-2xl sm:rounded-l-2xl sm:rounded-r-none 
                            overflow-hidden flex justify-center items-stretch">
                                <Image src="/media/profile_picture_500x.jpg" alt="work project" height="500" width="700" className="object-cover"/>
                            </div>
                            <div className="flex-auto basis-[480px] sm:basis-[55%] h-[270px] bg-white
                            rounded-b-2xl sm:rounded-r-2xl sm:rounded-l-none">

                            </div>
                        </div>
                        <div className="flex-auto basis-[100%] h-[270px] absolute inset-0
                        shadow-md-center rounded-2xl "/>
                    </div>


                </div>
            </div>

        </Fragment>
    )
}

export default Work