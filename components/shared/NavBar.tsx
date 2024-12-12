"use client";
import Image from "next/image";
import Logo from "@/public/assets/images/logo.png";
import User from "@/public/assets/images/user.png";
import SunLogo from "./SunLogo";
import ExpandIcon from "./ExpandIcon";

const NavBar = () => {
 
  return (
    <>
      <header className="bg-white py-5 w-full shadow-xl px-16">
        <div className="flex items-center justify-between">
          <div>
            <Image src={Logo} alt="logo" width={100} height={100} />
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <SunLogo borderColor='border-success' bgColor='bg-secondary' textColor='text-black'/>
              <ExpandIcon borderColor='border-success' bgColor='bg-secondary' textColor='text-black' />
            </div>
            <details className="group dropdown relative">
              <summary className="btn flex items-center gap-4 rounded  border-none  px-4 py-1 cursor-pointer">
                <div>
                  <h1 className="text-16 font-semibold leading-5 text-black">
                    Syed Mahmud
                  </h1>
                  <span className="text-primary text-16 font-normal block text-end">
                    Admin
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Image
                  
                    className="w-[42px] h-[42px] rounded-full"
                    src={User}
                    alt="user"
                    width={42}
                    height={42}
                  />

                  <span>
                    <svg
                      className="w-4 h-4 transition-transform group-open:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
              </summary>
              <ul className="menu dropdown-content bg-white rounded-box absolute z-10 w-44 p-2 shadow hidden group-open:block right-0 mt-2">
                <li className="hover:text-white hover:bg-primary ps-2 rounded ">
                  <a
                    href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}user/profile-settings/manage-profile`}
                  >
                    Profile
                  </a>
                </li>
                <li className="hover:text-white hover:bg-primary ps-2 rounded">
                  <a href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}user`}>
                    Dashboard
                  </a>
                </li>
                <li className="hover:text-white hover:bg-primary ps-2 rounded">
                  <a href="#">Support Ticket</a>
                </li>
                <li className="hover:text-white hover:bg-primary ps-2 rounded">
                  {/* <button onClick={HandleLogout}>Logout</button> */}
                </li>
              </ul>
            </details>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
