
import Image from "next/image";
import React, { Fragment } from "react";
import { FiUser } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { LuUndo2 } from "react-icons/lu";

import { LuLayoutList } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";

import SunLogo from "@/components/shared/SunLogo";
import ExpandIcon from "@/components/shared/ExpandIcon";
import { Input } from "@/components/ui/input";

const MenuBar = () => {
  return (
    <Fragment>
      <div className="bg-white py-5 w-full  px-16">
        <div className="flex items-center gap-3">
          <div className="w-[38%] relative">
            <Input type="text" name="userName" className="ps-14 pe-14 placeholder:text-13 placeholder:font-semibold placeholder:text-black" placeholder="Select Customer..." />
           
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2">
              <FiUser className="text-18 text-black" />
            </span>
            <span className="bg-primary rounded-r absolute top-1/2 right-[2px] cursor-pointer transform -translate-y-1/2 px-3 py-2 border-success">
              <FiUserPlus type="submit" className="text-white text-18" />
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
              <SunLogo borderColor='border-success' bgColor='bg-secondary' textColor='text-black' />
              <span className="border-border p-3 rounded bg-primary">
                <LuUndo2 className="text-white w-[24px] h-[24px]"/>
              </span>
              <ExpandIcon borderColor="border-border" bgColor="bg-primary" textColor="text-white" />
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
    </Fragment>
  );
};

export default MenuBar;
