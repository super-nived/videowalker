import React, { useRef, useState } from 'react';
import ScratchCard from 'react-scratchcard-v2';
import './Scratch.css'
import PIC from '../../asset/videowalker.jpg'
import TreasureIMageWithLInk from '../TresureDetail/TresureImageWithLink';

const Scratch = () => {

  const ref = useRef < ScratchCard > (null);
  const [hideScratch, setHideScratch] = useState(false)
  const onClickReset = () => {
    ref.current && ref.current.reset();
  }

  return (
    <div className='Scratch'>
      <ScratchCard
        width={300}
        height={300}
        image={PIC}
        finishPercent={80}
        onComplete={() => console.log('complete')}
      >
        <div style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
        >
          <TreasureIMageWithLInk></TreasureIMageWithLInk>
        </div>
      </ScratchCard>
    </div>
  );
};

export default Scratch