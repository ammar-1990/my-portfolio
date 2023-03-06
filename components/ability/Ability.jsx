import Image from "next/image";

const Ability = ({ name, img, level }) => {
  return (
    <div className="flex relative min-h-[150px] z-[0] items-center shadow-md justify-center overflow-hidden gap-4 p-4 rounded-md cursor-pointer group">
      <Image src={img} width={75} height={75} alt="img" />
      <p className="font-medium text-gray-600"> {name}</p>
      <div className="absolute p-3 w-full h-full gap-3 left-[-100%] top-0 group-hover:left-0  backdrop-blur-[2.5px] opacity-0 group-hover:opacity-100 duration-200 text-white flex 
      flex-col items-center justify-center ">
       
        <div className="  h-4 w-[90%] mt-8 opacity-0 group-hover:mt-0 translate-y-[50%] group-hover:opacity-100 delay-200  duration-200 border-[1px] absolute  rounded-[4px] border-white overflow-hidden z-[2] ">
        <span className=" absolute top-0 left-[50%] text-xs text-purple-700 font-medium z-10 translate-x-[-40%]">{level}</span>
          <div
          style={{width:`${level}`}}
            className={`h-full bg-white 
      w-[0]  duration-300`}
          ></div>{" "}
        </div>
      
        <div className="absolute w-full h-full bg-gradient-to-r from-purple-700 to-purple-300 opacity-40 top-0 left-0  z-[1]"></div>
      </div>
    </div>
  );
};

export default Ability;
