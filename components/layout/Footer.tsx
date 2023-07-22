import Image from "next/image";

import Copy from "./footer/Copy";
import Main from "./footer/Main";
import FooterNav from "./footer/FooterNav";

const Footer = () => {
  return (
    <footer className="pt-2 border-t border-gray-200">
      <section className="flex px-4 flex-col lg:flex-row lg:px-10 md:justify-between">
        <Main />

        <div className="flex-col flex md:flex-row justify-center mt-5 w-full xl:justify-end lg:justify-around">
          <FooterNav />
          <Image
            src="/footer/svg/girl-with-balloon.svg"
            width={156}
            height={200}
            alt="Girl with balloon"
            className="mt-16 md:mt-10"
          />
        </div>
      </section>

      <Copy />
    </footer>
  );
};
export default Footer;
