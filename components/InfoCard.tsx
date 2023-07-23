interface infoCardProps {
  para: string;
  title: string;
}

const InfoCard = (props: infoCardProps) => {
  return (
    <div className="flex flex-col p-5 md:flex-row justify-center items-center mb-2 text-center xl:px-8">
      <h2 className="text-2xl xl:text-3xl font-medium border-b-2 pb-6 md:pb-0 md:border-b-0 md:border-r-2 xl:pr-12 md:pr-6 basis-[60%]">
        {props.title}
      </h2>
      <p className="py-8 lg:text-base max-w-2xl md:px-10 xl:pl-16 md:text-md md:text-left">
        {props.para}
      </p>
    </div>
  );
};
export default InfoCard;
