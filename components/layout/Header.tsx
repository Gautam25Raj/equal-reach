import Image from 'next/image';

import { HeaderButton } from '@/components/ui/ClientButtons';

interface HeaderProps {
  h1: string;
  svg1: {
    svg1Path: string;
    svg1Width: number;
    svg1Height: number;
  };
  svg2: {
    svg2Path: string;
    svg2Width: number;
    svg2Height: number;
  };
  paragraph: string;
  isBtn?: boolean;
  image: {
    imagePath: string;
    imageWidth: number;
    imageHeight: number;
  };
}

const Header = ({ h1, svg1, svg2, paragraph, isBtn, image }: HeaderProps) => {
  const { svg1Path, svg1Width, svg1Height } = { ...svg1 };
  const { svg2Path, svg2Width, svg2Height } = { ...svg2 };
  const { imagePath, imageWidth, imageHeight } = { ...image };

  return (
    <header className="flex mt-10 px-10 justify-between items-center">
      <div>
        <h1 className="text-2xl">
          {h1}
          <div className="my-4">
            <Image
              src={svg1Path}
              width={svg1Width}
              height={svg1Height}
              alt="logo"
            />
          </div>
          <span>
            <Image
              src={svg2Path}
              width={svg2Width}
              height={svg2Height}
              alt="logo"
            />
          </span>
        </h1>

        <p className="text-gray-600 my-9 max-w-[280px]">{paragraph}</p>

        {isBtn && <HeaderButton />}
      </div>

      <div>
        <Image
          src={imagePath}
          width={imageWidth}
          height={imageHeight}
          alt="logo"
        />
      </div>
    </header>
  );
};

export default Header;
