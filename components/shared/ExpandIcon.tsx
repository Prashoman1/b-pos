import { useHomeContext } from "@/context/home.context";
import React from "react";
import { IoIosExpand } from "react-icons/io";

type TExpandIcon = {
  borderColor: string;
  bgColor: string;
  textColor: string;
};

const ExpandIcon = ({ borderColor, bgColor, textColor }: TExpandIcon) => {
  const { toggleFullScreen } = useHomeContext();
  return (
    <>
      <span
        onClick={toggleFullScreen}
        className={`border ${borderColor} p-3 rounded ${bgColor} cursor-pointer`}
      >
        <IoIosExpand className={`${textColor} w-[24px] h-[24px]`} />
      </span>
    </>
  );
};

export default ExpandIcon;
