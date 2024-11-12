import { Button } from '../ui/button';

const CarosoulCard = ({
  img,
  title,
  text,
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
      <div className="bg-black space-y-4 text-center bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-white p-4 ">
        <h2 className="text-lg lg:text-4xl font-bold">{title}</h2>
        <p className="lg:w-1/2 mx-auto">{text}</p>
        <Button>Shop Now</Button>
      </div>
    </div>
  );
};

export default CarosoulCard;
