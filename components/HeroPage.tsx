import * as React from 'react';

interface Props {
    name?: string
}

const HeroPage = ({name}: Props) => {
  return(
    <div>

      <div className='text-center m-[70px]'>
        <h1>Hi, welcome to my work.</h1>
      </div>

      <div className='grid grid-cols-2 grid-rows-1'>
        <div className='justify-self-end text-right mr-8'>
          <span>“I use Engineering and Business Development to create long-term value through technology.”</span>
        </div>
        <div className='text-left border-l-[1px] border-black pl-8'>
          <h3>Ivan Krushkov</h3>
          <h4>Web Developer</h4>
          <h4>Code + Business</h4>
          <div>
            <div>GitHub, LinkedIn, Insta</div>
          </div>
          <div>
            <div>Resume Work</div>
          </div>
        </div>
      </div>
      
    </div>
  )
};

export default HeroPage;
