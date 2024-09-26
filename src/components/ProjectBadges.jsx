import { projects } from "@/utils/data";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function ProjectBadges({
  source = require("/public/assets/folder1.svg"),
  title,
  count,
}) {
  return (
    <Flex className="mb-3 p-2  xxs:w-[150px]">
      <Image src={source} width={40} height={40} />
      <Flex flexDir={"column"} className="leading-7 ml-2">
        <h1 className="text-black text-md lg:text-[18px] xxs:text-2xl font-bold">
          {count == 0 ? 0 : count}
        </h1>
        <p className="text-gray-500 text-sm">{title}</p>
      </Flex>
    </Flex>
  );
}
