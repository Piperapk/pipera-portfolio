import React, { Fragment} from "react";
import Button_Primary from "./buttons/Button_Primary";
import Tooltip from "./buttons/Tooltip";
import LinkButtons from "./buttons/Link_Buttons";

interface Props {
    containerWidth?: string
}

const HeroPage = ({containerWidth}: Props) => {  
  return(
    <Fragment>
      <div id="home" className='text-center m-10 sm:m-[70px] text-4xl font-bold'>
        <h1>Hi, <span className='text-primary 
        relative group hover:text-rose-400 transition-colors ease-out'>
          welcome
          <Tooltip text="Lovingly designed and built with Next.js and Tailwind"/>
        </span> to my work.</h1>
      </div>

      <div className={`flex flex-wrap sm:flex-nowrap grid-cols-2 grid-rows-1 ${containerWidth} m-auto`}>
        <div className='sm:basis-2/3 self-center
        mx-4 sm:ml-0 sm:mr-8 mb-8 sm:mb-10 py-3
        text-center sm:text-right sm:text-2xl text-lg font-light border-y-[1px] sm:border-0 border-slate-300'>
          <p>“I use Engineering and Business Development to create long-term value through technology.”</p>
        </div>
        <div className='sm:basis-1/3 flex-1 
        sm:text-left text-center sm:border-l-[1px] border-black dark:border-gray-300 sm:pl-8
        grid-rows-3 sm:space-y-14 space-y-2'>
          <div>
            <h3 className='text-2xl'>Ivan Krushkov</h3>
            <div className='text-lg text-slate-500 dark:text-gray-300 leading-tight font-light'>
              <h4>Web Developer</h4>
              <h4>Cambridge, UK</h4>
            </div>
          </div>
          <div className='flex pt-2 space-x-1.5 justify-center sm:justify-start'>
            <LinkButtons/>
          </div>
          <div className='flex justify-center sm:justify-start sm:pt-14 pt-5 items-end space-x-4'>
            <Button_Primary href="#resume" text="Resume"/>
            <Button_Primary href="#work" text="Work"/>
          </div>
        </div>
      </div>      
    </Fragment>
  )
};

export default HeroPage;
