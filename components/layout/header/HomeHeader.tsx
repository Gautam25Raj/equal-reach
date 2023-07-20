import Header from '@/components/layout/Header';

const HomeHeader = () => {
  return (
    <Header
      h1="Breaking Barriers, by"
      svg1={{
        svg1Path: '/home/svg/building-svg.svg',
        svg1Width: 314,
        svg1Height: 81,
        svg1Alt: 'Building text image',
        svg1Style: 'max-w-[300px]',
      }}
      svg2={{
        svg2Path: '/home/svg/equality-svg.svg',
        svg2Width: 314,
        svg2Height: 78,
        svg2Alt: 'Equality text image',
        svg2Style: 'max-w-[300px]',
      }}
      paragraph={{
        text: 'Join us in creating a world where everyone has a chance.',
        paraStyle: 'max-w-[270px]',
      }}
      isBtn={true}
      image={{
        imagePath: '/home/hero-image.png',
        imageWidth: 515,
        imageHeight: 600,
        imageAlt: 'Equality, No hate, Pride day collage',
      }}
      colSpan1="mt-16 sm:mt-0 sm:col-span-4"
      colSpan2="-order-1 sm:order-2 sm:col-span-6"
    />
  );
};

export default HomeHeader;
