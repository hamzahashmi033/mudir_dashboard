import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Image from "next/image";

export default function BasicMenu() {
  return (
    <MenuList>
      <MenuItem color={"black"} onClick={() => alert("Download clicked")}>
        <div className="p-2 mt-2 w-full  flex justify-center xxxs:space-x-4 lg:space-x-1 xl:space-x-2 items-center">
          <Image
            src={require("/public/assets/man3.png")}
            width={30}
            className="cover rounded-full"
          />
          <div className="">
            <h1 className="text-black font-bold text-base xs:text-[16px] lg:text-[164x] xl:text-[18px]">
              John Doe
            </h1>
            <p className="text-black text-sm xs:text-[14px] lg:text-[14px] xl:text-[16px]">
              hamzahashmi@hotmail.com
            </p>
          </div>
        </div>
      </MenuItem>
      <MenuItem color={"black"} onClick={() => alert("Create clicked")}>
        <div className="p-2 mt-2 w-full  flex justify-center xxxs:space-x-4 lg:space-x-1 xl:space-x-2 items-center">
          <Image
            src={require("/public/assets/man1.avif")}
            width={30}
            className="cover rounded-full"
          />
          <div className="">
            <h1 className="text-black font-bold text-base xs:text-[16px] lg:text-[164x] xl:text-[18px]">
              Hamza Hashmi
            </h1>
            <p className="text-black text-sm xs:text-[14px] lg:text-[14px] xl:text-[16px]">
              hashmihamza846@gmail.com
            </p>
          </div>
        </div>
      </MenuItem>
    </MenuList>
  );
}
