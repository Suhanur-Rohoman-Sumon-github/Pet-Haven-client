const CarosoulCard = ({
  img,
}: {
  img: string;
  title: string;
  text: string;
}) => {
  return (
    <div
      className="w-full h-[80vh] bg-cover bg-center "
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className=" space-y-4 text-center  w-full h-full flex flex-col justify-center items-center text-white p-4 "></div>
    </div>
  );
};

export default CarosoulCard;
