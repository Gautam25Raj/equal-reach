interface infoCardProps {
  hasBtn: boolean;
}

const InfoCard = (props: infoCardProps) => {
  return (
    <div className="flex flex-col p-5 md:flex-row justify-center items-center mb-10 text-center xl:px-16">
      <h2 className="text-2xl xl:text-3xl font-medium border-b-2 pb-6 md:pb-0 md:border-b-0 md:border-r-2 xl:pr-12 md:pr-6">
        More People <br />
        More Impact
      </h2>
      <p className=" py-8 max-w-xl  lg:text-base md:px-10 xl:px-16 md:text-md md:text-left">
        "Join the Collective for Social Equality: Together, We Create a Stronger
        Voice, Amplify Impact, and Make a Meaningful Difference."
      </p>
      {
        <button
          className={`py-2 px-7 text-xs border-4 border-rainbow rounded-3xl w-fit ${
            props.hasBtn ? "inline-block" : "hidden"
          }`}
        >
          About Us
        </button>
      }
    </div>
  );
};
export default InfoCard;
