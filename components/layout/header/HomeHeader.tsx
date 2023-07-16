import Header from '@/components/layout/Header';

const HomeHeader = () => {
  return (
    <Header
      h1="Breaking Barriers, by"
      svg1={{
        svg1Path: '/home/svg/building-svg.svg',
        svg1Width: 314,
        svg1Height: 81,
      }}
      svg2={{
        svg2Path: '/home/svg/equality-svg.svg',
        svg2Width: 314,
        svg2Height: 78,
      }}
      paragraph="Join us in creating a world where everyone has a chance."
      isBtn={true}
      image={{
        imagePath: '/home/hero-image.png',
        imageWidth: 515,
        imageHeight: 600,
      }}
    />
  );
};
export default HomeHeader;
