import React, { Fragment} from "react";
import Image from 'next/image';
import Button_Primary from "./buttons/Button_Primary";

interface Props {
    containerWidth?: string
}

const HeroPage = (props: Props) => {
  return(
    <Fragment>
      <div id="home" className='text-center m-10 sm:m-[70px] text-4xl font-bold'>
        <h1>Hi, <span className='text-primary'>welcome</span> to my work.</h1>
      </div>

      <div className={`flex flex-wrap sm:flex-nowrap grid-cols-2 grid-rows-1 ${props.containerWidth} m-auto`}>
        <div className='sm:basis-2/3 self-center
        mx-4 sm:ml-0 sm:mr-8 mb-8 sm:mb-10 py-3
        text-center sm:text-right sm:text-2xl text-lg font-light border-y-[1px] sm:border-0 border-slate-300'>
          <p>“I use Engineering and Business Development to create long-term value through technology.”</p>
        </div>
        <div className='sm:basis-1/3 flex-1 
        sm:text-left text-center sm:border-l-[1px] border-black sm:pl-8
        grid-rows-3 sm:space-y-14 space-y-2'>
          <div>
            <h3 className='text-2xl'>Ivan Krushkov</h3>
            <div className='text-lg text-slate-500 leading-tight font-light'>
              <h4>Web Developer</h4>
              <h4>Cambridge, UK</h4>
            </div>
          </div>
          <div className='flex pt-2 space-x-1.5 justify-center sm:justify-start'>
              <a href='https://github.com/Piperapk' target='_blank' rel='noreferrer'>
                <Image src={'/media/icon_github.svg'} alt='GitHub profile' width={30} height={30}/>
              </a>
              <a href='https://www.linkedin.com/in/ivan-krushkov/' target='_blank' rel='noreferrer'>
                <Image src={'/media/icon_linkedin.svg'} alt='GitHub profile' width={30} height={30}/>
              </a>
              <a href='mailto:i.krushkov@outlook.com' target='_blank' rel='noreferrer'>
                <Image src={'/media/icon_email.svg'} alt='GitHub profile' width={30} height={30}/>
              </a>
          </div>
          <div className='flex justify-center sm:justify-start sm:pt-14 pt-5 items-end space-x-4'>
            <Button_Primary id="#" text="Resume"/>
            <Button_Primary id="#work" text="Work"/>
          </div>
        </div>
      </div>      
    </Fragment>
  )
};

export default HeroPage;
