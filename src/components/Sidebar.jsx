import { Flex, Button, MenuButton, Menu } from "@chakra-ui/react";
import * as Unicons from "@iconscout/react-unicons";
import Image from "next/image";
import TabsComp from "./Tabs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import BasicMenu from "./Menu";
import PinnedProjects from "./PinnedProjects";
const Sidebar = () => {
  return (
    <Flex direction={"column"} className="xxxs:w-[120%] p-2 xxxs:-ml-7 lg:-ml-0 relative" bg={"#F4F6FA"}>
      <div className="mt-2 mb-2">
        <Image
          src={require("/public/assets/logo.svg")}
          width={100}
          height={100}
        />
      </div>
      <div className="p-2 mt-2 w-full  flex justify-center xxxs:space-x-4 lg:space-x-2 xl:space-x-4 items-center">
        <Image
          src={require("/public/assets/Avatar.svg")}
          width={60}
          height={60}
          className="cover"
        />
        <div className="">
          <h1 className="text-black font-bold text-base xs:text-[16px] lg:text-[16px] xl:text-[20px]">
            Hamza Hashmi
          </h1>
          <p className="text-black text-sm xs:text-[14px] lg:text-[14px] xl:text-[18px]">
            hashmihamza846@gmail.com
          </p>
        </div>
        <div className="">
          {/* <Unicons.UilAngleDown size={20} color={"black"} /> */}
          <Menu>
            <MenuButton as={Button} size={10} className="">
              <ChevronDownIcon />
            </MenuButton>
            <BasicMenu />
          </Menu>
        </div>
      </div>
      <div className="mt-8 pb-80">
        <TabsComp />
        <div className="border border-gray-300 mt-4 w-full"></div>
        <div className="mt-4 ">
          <PinnedProjects />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-[100%]  h-[130px] pt-1 pl-3 bg-[#F4F6FA] border border-t-1 border-t-gray-300">
        <div className="flex cursor-pointer items-center space-x-4 mb-4 p-3 w-[280px] rounded-md hover:bg-white">
          <Unicons.UilUser size={20} color={"gray"} />
          <h1 className="text-gray-600 text-lg text-center">Account Setting</h1>
        </div>
        <div className="flex cursor-pointer items-center space-x-4 mb-4 p-3 w-[280px] rounded-md hover:bg-white">
          <Unicons.UilSignout size={20} color={"gray"} />
          <h1 className="text-gray-600 text-lg text-center">Logout</h1>
        </div>
      </div>
    </Flex>
  );
};
export default Sidebar;
