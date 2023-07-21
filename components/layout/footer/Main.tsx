import Image from 'next/image';

const Main = () => {
  return (
    <div className="">
      <Image
        src="/footer/svg/footer-logo.svg"
        width={197}
        height={50}
        alt="Equal reach logo"
      />

      <p className="text-gray-600 mt-3 mb-6 text-sm max-w-xs md:max-w-[270px]">
        With a focus on education, advocacy, and community building, we inspire
        change at both individual and systemic levels
      </p>

      <div className="flex w-3/5 justify-between max-w-[270px] mb-12 md:mb-0">
        <Image
          src="/footer/svg/facebook.svg"
          width={24}
          height={24}
          alt="facebook"
        />
        <Image
          src="/footer/svg/instagram.svg"
          width={24}
          height={24}
          alt="instagram"
        />
        <Image
          src="/footer/svg/twitter.svg"
          width={24}
          height={24}
          alt="twitter"
        />
      </div>
    </div>
  );
};
export default Main;
