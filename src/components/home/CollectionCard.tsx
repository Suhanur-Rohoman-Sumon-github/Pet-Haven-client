type TCollection = {
  img: string;
  subheading: string;
  heading: string;
  btnColor: string;
  btnText: string;
};
const CollectionCard = ({
  img,
  subheading,
  heading,
  btnColor,
  btnText,
}: TCollection) => {
  return (
    <div className="w-full rounded-md cursor-pointer overflow-hidden group h-[280px] flex justify-between items-center p-5 bg-slate-100">
      <div className="space-y-3 text-center">
        <h4 className="text-xs">{subheading}</h4>
        <h3 className="text-2xl font-semibold">{heading}</h3>
        <button className={` ${btnColor}`}>{btnText}</button>
      </div>
      <img
        className=" group-hover:scale-110 transition-all w-[45%]"
        src={img}
        alt=""
      />
    </div>
  );
};

export default CollectionCard;
