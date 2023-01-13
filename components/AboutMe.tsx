import React, { useContext, useState } from "react";
import Image from "next/image";
import Button_List from "./buttons/Button_Badge";
import { useTheme } from 'next-themes';
import { EasterEggContext } from "../context/EasterEggContext"

interface Props {
    containerWidth?: string
    id?: string
}

const AboutMe = ({ containerWidth, id }: Props) => {

    const { theme, setTheme } = useTheme();

    //Handle tooltip/easter egg click
    const [isEggFound, setIsEggFound] = useState<Boolean>(false);

    const eggCountContext = useContext(EasterEggContext);

    const iconClick = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');

        // Count easter egg
        if (isEggFound) {
            return;
        } else {
            setIsEggFound(true);
            eggCountContext.updateEggCount(eggCountContext.eggCount + 1);
        }
    }

    return (
        <div className="mt-20">
            <div className={`${containerWidth} m-auto flex items-end`}>
                <div onClick={iconClick} className="relative translate-y-[7px] pl-5 cursor-default sm:cursor-pointer">
                    <div className="absolute top-[13px] -right-[23px] hidden dark:block">
                        <Image src={'/media/lamp_light.svg'} alt='Dark, light mode switch on' width={40} height={32} priority className="" />
                    </div>
                    <Image src={'/media/icon_lamp.svg'} alt='Dark, light mode switch' width={45} height={45} priority className="opacity-80 dark:invert" />
                </div>
                <h1 className="text-black dark:text-white text-4xl leading-[25px] sm:leading-[25px] font-thin px-7">About me</h1>
            </div>
            <div className="border-t border-slate-300" />
            <div className="bg-gray-100 px-10 pt-10 pb-20 dark:bg-slate-700">

                <div className={`${containerWidth} m-auto
                flex flex-wrap-reverse sm:flex-wrap justify-center`}>
                    <p className="sm:basis-2/3 self-center sm:pl-5 py-10
                    font-light font- first-letter:text-4xl first-letter:font-bold indent-4 text-lg text-slate-900 dark:text-slate-200 leading-normal tracking-tight whitespace-pre-line">
                        {`Hello, I'm Ivan! I enjoy creating things that combine engineering and the latest tech alongside business thinking and strategy. All of that wrapped up in an agile environment.

                        I love to code and also love to give that code meaning by using my 
                        commercial expertise. Turning projects into opportunities for the betterment 
                        of their end-users as well as the company they are made for.

                        I adore technology and how it can make our lives better. My passion started with game development and visual effects, then I moved to commercial and business development to see where best I can apply new technology. That leads me to today, where I want to directly engineer the projects I'm standing behind and drive myself and teams forward with my business mind.
                        `}
                    </p>
                    <div className="hidden sm:block sm:basis-1/3 self-end sm:pl-12 sm:pt-5 containerWidth:pt-0">
                        <div className="w-[230px] h-[230px] bg-white flex justify-center items-center shadow-md-top rounded-t-md">
                            <Image src="/media/profile_picture_500x.jpg" alt="profile picture" height="200" width="200"
                                className="rounded-sm" />
                        </div>
                    </div>
                    <div className="sm:hidden self-center sm:pl-12 
                    w-[140px] h-[140px] bg-white flex rounded-full justify-center items-center">
                        <div className="w-[130px] h-[130px] bg-white rounded-full overflow-hidden">
                            <Image src="/media/profile_picture_500x.jpg" alt="profile picture" height="130px" width="130px"
                                className="object-none" />
                        </div>
                    </div>
                </div>

                <div className="hidden sm:block border-t border-slate-300 max-w-5xl m-auto" />

                <div className={`${containerWidth} m-auto sm:pl-5 sm:pt-10 space-y-5`}>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-lg text-slate-800 dark:text-slate-200 leading-normal tracking-tight whitespace-nowrap">{"Tech I've recently used:"}</span>
                        <Button_List text="JavaScript, TypeScript, C++" bgColor="bg-secondary" />
                        <Button_List text="React, Vue, Next.js" bgColor="bg-secondary" />
                        <Button_List text="PostgreSQL, Firebase, Express" bgColor="bg-secondary" />
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-lg text-slate-800 dark:text-slate-200 leading-normal tracking-tight whitespace-nowrap">I like to make things proper:</span>
                        <Button_List text="Jira, Agile (Scrum)" bgColor="bg-secondary" />
                        <Button_List text="Git, Perforce Helix Core" bgColor="bg-secondary" />
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-lg text-slate-800 dark:text-slate-200 leading-normal tracking-tight whitespace-nowrap">I like to make things look good:</span>
                        <Button_List text="Tailwind, CSS" bgColor="bg-secondary" />
                        <Button_List text="Photoshop, Illustrator, Adobe XD" bgColor="bg-secondary" />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AboutMe;