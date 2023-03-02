import Image from "next/image";

const Ability = ({ name, img, level }) => {
  return (
    <div className="flex relative min-h-[150px] z-[0] items-center shadow-md justify-center overflow-hidden gap-4 p-4 rounded-md cursor-pointer group">
      <Image src={img} width={75} height={75} alt="img" />
      <p className="font-medium text-gray-600"> {name}</p>
      <div className="absolute p-3 w-full h-full gap-3 left-0 top-0   opacity-0 group-hover:opacity-100 duration-300 text-white flex 
      flex-col items-center justify-center ">
          <span className="z-[2]">{level}</span>
        <div className="  h-6 w-full border-[1px] rounded-md border-white overflow-hidden z-[2] ">
          <div
          style={{width:`${level}`}}
            className={`h-full bg-white 
      w-[0]  duration-300`}
          ></div>{" "}
        </div>
      
        <div className="absolute w-full h-full bg-purple-700 opacity-80 top-0 left-0  z-[1]"></div>
      </div>
    </div>
  );
};

export default Ability;
