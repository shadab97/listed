import Image from 'next/image';
import React from 'react';
interface StatsCard {
  background: string;
  imgSrc: string;
  text: string;
  stat: string;
}
const StatsCard = ({ background, imgSrc, text, stat }: StatsCard) => {
  return (
    <div
      style={{ background: background }}
      className={`flex flex-col p-6  rounded-2xl`}
    >
      <div className="flex justify-end  md:visible">
        <Image src={imgSrc} width={24} height={24} alt="" />
      </div>
      <p className="text-sm font-normal">{text}</p>
      <p className="text-2xl font-bold">{stat}</p>
    </div>
  );
};

export default StatsCard;
