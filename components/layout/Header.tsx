import Image from 'next/image';

import { HeaderButton } from '@/components/ui/ClientButtons';

interface HeaderProps {
  h1: string;
  svg1: {
    svg1Path: string;
    svg1Width: number;
    svg1Height: number;
    svg1Alt: string;
    svg1Style: string;
  };
  svg2: {
    svg2Path: string;
    svg2Width: number;
    svg2Height: number;
    svg2Alt: string;
    svg2Style: string;
  };
  paragraph: {
    text: string;
    paraStyle: string;
  };
  isBtn?: boolean;
  image: {
    imagePath: string;
    imageWidth: number;
    imageHeight: number;
    imageAlt: string;
  };
  colSpan1: string;
  colSpan2: string;
}

const Header = async ({
  h1,
  svg1,
  svg2,
  paragraph,
  isBtn,
  image,
  colSpan1,
  colSpan2,
}: HeaderProps) => {
  const { svg1Path, svg1Width, svg1Height, svg1Alt, svg1Style } = { ...svg1 };
  const { svg2Path, svg2Width, svg2Height, svg2Alt, svg2Style } = { ...svg2 };
  const { imagePath, imageWidth, imageHeight, imageAlt } = { ...image };
  const { text, paraStyle } = { ...paragraph };

  return (
    <header className="flex mt-10 px-2 sm:px-3 justify-between items-center md:px-10 mb-24">
      <div className="w-full grid gap-0 grid-cols-10 lg:gap-2 items-center">
        <div className={'col-span-10 ' + colSpan1}>
          <h1 className="text-xl md:text-2xl text-center md:text-left">
            {h1}
            <div className={'my-4 mx-auto sm:w-full sm:max-w-none  md:mx-0' + svg1Style}>
              <Image
                src={svg1Path}
                width={svg1Width}
                height={svg1Height}
                alt={svg1Alt}
              />
            </div>
            <div className={' sm:w-full mx-auto  sm:max-w-none md:mx-0' + svg2Style}>
              <Image
                src={svg2Path}
                width={svg2Width}
                height={svg2Height}
                alt={svg2Alt}
              />
            </div>
          </h1>

          <p className={'text-gray-600 text-base mx-auto text-center my-9 md:text-left md:mx-0 max-w-[270px] ' + paraStyle}>{text}</p>

          {isBtn && <HeaderButton />}
        </div>

        <div className={'col-span-10 sm:ml-7 lg:ml-auto mx-auto  ' + colSpan2}>
          <Image
            src={imagePath}
            width={imageWidth}
            height={imageHeight}
            alt={imageAlt}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
