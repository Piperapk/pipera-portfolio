import React, { Fragment } from "react";
import Image from "next/image";

interface Props {
    containerWidth?: string
}

const AboutMe = (props: Props) => {

    return(
        <Fragment>
            <div className="mt-20">
                <div className={`${props.containerWidth} m-auto`}>
                    <h1 className="text-4xl leading-[30px] font-thin px-5">About me</h1>
                </div>
                <div className="border-t border-slate-300"/>
                <div className="h-screen bg-gray-100 px-10 pt-10 sm:pt-20">
                    <div className={`${props.containerWidth} m-auto
                    flex flex-wrap-reverse sm:flex-wrap justify-center`}>
                        <p className="sm:basis-2/3 self-center sm:pr-4 sm:pl-5 sm:py-0 py-10 
                        first-letter:text-4xl first-letter:font-light text-lg text-slate-800">
                            Hey, glad to meet you! I enjoy creating things that are useful, that 
                            combine engineering, business thinking and strategy. 
                            <br/><br/>
                            I love to code and also love to give that code meaning by using my 
                            commercial expertise. Turning projects into opportunities for betterment 
                            of their end users as well as the company they are made for.
                        </p>
                        <div className="hidden sm:block sm:basis-1/3 self-center sm:pl-12">                    
                            <div className="w-[230px] h-[230px] bg-white flex justify-center items-center shadow-md-top">
                                <Image src="/media/profile_picture_500x.jpg" alt="profile picture" height="200" width="200"/>
                            </div> 
                        </div>
                        <div className="sm:hidden self-center sm:pl-12 
                        w-[140px] h-[140px] bg-white flex rounded-full justify-center items-center">                    
                            <div className="w-[130px] h-[130px] bg-white rounded-full overflow-hidden">
                                <Image src="/media/profile_picture_500x.jpg" alt="profile picture" height="130px" width="130" 
                                className="object-none"/>
                            </div> 
                        </div>
                    </div>
                    <div className="hidden sm:block border-t border-slate-300 max-w-5xl m-auto"/>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutMe;