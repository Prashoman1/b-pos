import SunLogo from "@/app/_components/shared/SunLogo";
import Image from "next/image";
import React from "react";
import { FiUser } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { LuUndo2 } from "react-icons/lu";
import { IoIosExpand } from "react-icons/io";
import { LuLayoutList } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";

const MenuBar = () => {
  return (
    <>
      <div className="bg-white py-5 w-full  px-16">
        <div className="flex items-center gap-3">
          <div className="w-[38%] relative">
            <input
              className="border w-full py-2 ps-10 pe-16 rounded focus:outline-none border-success bg-white text-13 placeholder:text-black placeholder:font-medium select-none"
              type="text"
              placeholder="Select Customer..."
            />
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2">
              <FiUser className="text-18 text-black" />
            </span>
            <span className="bg-primary rounded-r absolute top-1/2 right-[2px] cursor-pointer transform -translate-y-1/2 px-3 py-2 border-success">
              <FiUserPlus className="text-white text-18" />
            </span>
          </div>
          <div className="w-[38%]">
            <input
              className="border w-full py-2 px-4 rounded focus:outline-none border-success bg-white text-13 placeholder:text-black placeholder:font-medium select-none"
              type="text"
              placeholder="Scan/Search Product by Barcode or Name"
            />
          </div>
          <div className="w-[24%]">
            <div className="w-full flex items-center justify-between">
              <SunLogo />
              <span className="border-border p-3 rounded bg-primary">
                <LuUndo2 className="text-white w-[24px] h-[24px]"/>
              </span>
              <span className="border-border p-3 rounded bg-primary">
                <IoIosExpand className="text-white w-[24px] h-[24px]"/>
              </span>
              <span className="border-border p-3 rounded bg-primary">
                <LuLayoutList className="text-white w-[24px] h-[24px]"/>
              </span>
              <span className="border-border p-3 rounded bg-primary">
                <FiLogOut className="text-white w-[24px] h-[24px]"/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
