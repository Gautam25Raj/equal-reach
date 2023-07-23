import Image from "next/image";

const Main = () => {
  return (
    <div className="mt-5">
      <Image
        src="/footer/svg/footer-logo.svg"
        width={197}
        height={50}
        alt="Equal reach logo"
        className="mx-auto lg:mx-0"
      />

      <p className="text-gray-600 mt-3 mb-6 text-sm  max-w-[270px] mx-auto sm:max-w-[400px] text-center md:text-left">
        With a focus on education, advocacy, and community building, we inspire
        change at both individual and systemic levels
      </p>

      <div className="flex w-3/5 justify-between max-w-[270px] my-12 md:my-0 md:mb-2 mx-auto">
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
