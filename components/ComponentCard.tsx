import Image from 'next/image';
import React from 'react';

const arr = [
  {
    src: '/about/image1.png',
    title: 'Platform for Thought Exchange',
    para: "We provide a dynamic platform where individuals from diverse backgrounds can freely express their thoughts, opinions, and ideas. We  encourages open dialogue and fosters a community where everyone's voice is valued and respected.",
  },
  {
    src: '/about/image2.png',
    title: 'Building Supportive Community',
    para: "Our website is more than just a platform for sharing thoughts; it's a community of like-minded individuals committed to social equality. Users can connect with others, form networks, and find support. More people more impact.",
  },
  {
    src: '/about/image3.png',
    title: 'Amplifying Diverse Perspectives',
    para: 'We celebrate the richness of diverse perspectives and encourage users to share their unique experiences and insights. By amplifying underrepresented voices, we aim to foster empathy, understanding, and appreciation for different backgrounds.',
  },
];

const ComponentCard = () => {
  return (
    <div className="flex flex-row  items-center justify-center  flex-wrap mt-12 my-32">
      {arr.map((curr, i) => {
        return (
          <div
            key={i}
            className={`max-w-[300px] p-3 min-h-[450px] text-white rounded-lg  mb-5 mx-3 ${
              i === 2
                ? 'bg-[#8E31FF]'
                : i === 1
                ? 'bg-[#43D04D]'
                : ' bg-[#FC7201]'
            }`}
          >
            <Image
              src={curr.src}
              alt=""
              width="264"
              height="244"
              className="w-full mb-2 rounded-lg"
            />
            <h2 className="mb-2">{curr.title}</h2>
            <p className="text-sm">{curr.para}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ComponentCard;
