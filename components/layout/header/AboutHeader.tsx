import Header from '@/components/layout/Header';

const AboutHeader = () => {
  return (
    <Header
      h1="Equality for All,"
      svg1={{
        svg1Path: '/about/svg/regardless-svg.svg',
        svg1Width: 380,
        svg1Height: 58,
        svg1Alt: 'Regradless text',
        svg1Style: '',
      }}
      svg2={{
        svg2Path: '/about/svg/background-svg.svg',
        svg2Width: 350,
        svg2Height: 58,
        svg2Alt: 'Background text',
        svg2Style: '',
      }}
      paragraph={{
        text: 'We provide a dynamic platform where individuals from diverse backgrounds can freely express their thoughts, opinions, and ideas.',
        paraStyle: 'max-w-sm',
      }}
      isBtn={false}
      image={{
        imagePath: '/about/about-image.png',
        imageWidth: 500,
        imageHeight: 500,
        imageAlt: 'Equality, No hate, Children collage',
      }}
      colSpan1="lg:col-span-5 sm:col-span-4"
      colSpan2="mt-12 sm:mt-0 lg:col-span-5 sm:col-span-6"
    />
  );
};

export default AboutHeader;
