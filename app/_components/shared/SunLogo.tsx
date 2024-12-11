import Image from 'next/image';
import SunIcon from "@/public/assets/images/sun-icon.png";

const SunLogo = () => {
    return (
        <>
            <span className="border-border p-3 rounded  bg-secondary">
                <Image
                  className="w-[24px] h-[24px]"
                  src={SunIcon}
                  alt="logo"
                  width={24}
                  height={24}
                />
              </span>
        </>
    );
};

export default SunLogo;