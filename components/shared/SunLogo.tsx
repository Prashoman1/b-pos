import { GoMoon } from "react-icons/go";
import { IoSunnyOutline } from "react-icons/io5";
import { useHomeContext } from "@/context/home.context";

type TMoodIcon = {
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
};

const SunLogo = ({ borderColor='border-gray-500', bgColor="bg-gray-400", textColor="text-white" }: TMoodIcon) => {
   const {toggleDarkMood,isDarkMode} = useHomeContext();
  return (
    <>
    {
      isDarkMode ? <>
      <span
        onClick={toggleDarkMood}
        className={`border border-gray-500 p-3 rounded bg-gray-400 cursor-pointer`}
      >
        <GoMoon className={`text-white w-[24px] h-[24px]`} />
      </span>
      </>:<>
      <span
        onClick={toggleDarkMood}
        className={`border ${borderColor} p-3 rounded ${bgColor} cursor-pointer`}
      >
        <IoSunnyOutline className={`${textColor} w-[24px] h-[24px]`} />
      </span>
      </>
    }
      
    </>
  );
};

export default SunLogo;
