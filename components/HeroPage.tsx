import * as React from 'react';

interface Props {
    name: string
}

const HeroPage = ({name}: Props) => {
  return(
    <div>
        {name}
    </div>
  )
};

export default HeroPage;
