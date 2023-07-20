import Image from "../public/home/Image.png";

const ReadyToJoin = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center xl:px-6 pb-24">
      <div className="p-5 sm:p-10 lg:w-[50%] xl:w-[40%]">
        <h2 className="font-semibold text-2xl sm:text-3xl mb-6">
          Ready to join the movement for <br />
          <span className="text-rainbow">social equality?</span>
        </h2>
        <ul className="pl-4 md:pl-8 text-ce list-disc [&>li]:mb-4">
          <li>
            Engage with a vibrant and supportive community of like-minded
            individuals who are passionate about driving change.
          </li>
          <li>
            Highlight a powerful testimonial or success story that demonstrates
            the impact of social equality initiatives.
          </li>
          <li>
            Showcase a visually captivating image or video that represents the
            diversity and inclusivity we advocate for.
          </li>
        </ul>
      </div>
      <div className="lg:w-[50%] xl:w-[60%]">
        <img src={Image.src} alt="" />
      </div>
    </div>
  );
};
export default ReadyToJoin;
