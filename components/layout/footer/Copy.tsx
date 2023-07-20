'use client';
import Image from 'next/image';

const Copy = () => {
  const isBrowser = () => typeof window !== 'undefined';

  const scrollToTop = () => {
    console.log('hi');
    if (!isBrowser()) return;
    console.log('hi2');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-between px-4 border-t border-gray-200 py-4 lg:px-10">
      <p className="text-gray-600">Copyright © | All Rights Reserved</p>
      <button className="btn-rainbow p-1" onClick={scrollToTop}>
        <Image src="/footer/svg/arrow.svg" width={24} height={24} alt="" />
      </button>
    </div>
  );
};
export default Copy;
