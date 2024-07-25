import { useState } from 'react';
import Image from 'next/image';
import React from 'react';

import './Flashcard.css';

interface FlashcardProps {
  front: string;
  back: string;
}
export function Flashcard({ front, back }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashCardContainer">
      {/* <div className="absolute   -top-4 z-[1] h-full w-[85%] rounded-lg  bg-[#d2d0d6] opacity-85 "></div>
      <div className="absolute   -top-4 z-[1] h-full w-[90%] rounded-lg bg-[#F7F7F8] opacity-80"></div>
      <div className="absolute -top-2 z-[2] h-full w-[95%] rounded-lg bg-[#EAE9ED]"></div> */}
      <div
        className={`flashCard   ${flipped ? 'flip flipped' : 'stack'}`}
        onClick={() => {
          console.log('clicked');
          setFlipped(!flipped);
        }}
      >
        <span
          className={`flashCardHeadingText ${flipped ? 'rotate-y-180 bottom-4' : ''}`}
        >
          {flipped ? 'Answer' : 'Question'}
        </span>
        <div
          className={`clickDiv bottom-4 ${flipped ? 'rotate-y-180 clickedDiv' : ''}`}
        >
          {!flipped && (
            <>
              <span>Click to flip the card</span>
              <img src="../assets/images/icons/click.svg" alt="Click" />
            </>
          )}
        </div>
        {/* Front */}
        <div className={'backface-hidden inset-0 frontItem'}>
          <h2 className="mb-2 text-xl font-bold">{front}</h2>
        </div>

        {/* Back */}
        <div className={'backface-hidden rotate-y-180 inset-0 backItem'}>
          <h2 className="mb-2 text-xl font-bold">{back}</h2>
        </div>
      </div>
    </div>
  );
}
