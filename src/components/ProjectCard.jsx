import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import * as Unicons from "@iconscout/react-unicons";
import StepperComp from "./StepperComp";
import Image from "next/image";
import CardMenu from "./CardMenu";
export default function ProjectCard({
  title,
  category,
  tags,
  remarks,
  stage,
  id,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex className="border relative w-[33%]  lg:w-[32.5%] h-[300px] xxs:w-[100%] md:w-[48%] p-2 mb-2 ml-2">
      <div className="absolute right-0 p-1 cursor-pointer">
        <Menu>
          <MenuButton as={Button}>
            <Unicons.UilEllipsisV size={20} color={"black"} />
          </MenuButton>
          <CardMenu deleteModal={onOpen} />
        </Menu>
      </div>
      <Flex flexDir={"column"} w={"100%"}>
        <h1 className="text-lg font-bold w-[280px] ">{title}</h1>
        <p className="pt-1 pb-2 text-gray-500">{category}</p>
        <div className="mt-2 relative">
          <div className="w-[80%]">
            <StepperComp stage={stage} />
          </div>
          <div className="absolute -right-1 top-[-3px] ">
            <h1 className="text-gray-500">{stage}/4 Done</h1>
          </div>
        </div>
        <div className="mt-6  w-[100%] flex mb-6 flex-wrap justify-start">
          {tags.map((elem, index) => {
            return <TagBadge key={`${elem}-${index}`} title={elem} />;
          })}
        </div>
        <div className="absolute bottom-2 left-0 w-full">
          <div className="flex justify-between items-center cursor-pointer mt-4 ml-2 font-bold">
            <h1>{remarks}</h1>
            <div className="bg-[#5876B7] p-[12px] mr-2 rounded-lg">
              <Image
                src={require("../../public/assets/Vector.svg")}
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Project: {id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            odit incidunt hic voluptatum temporibus quo nulla totam ex
            praesentium facilis.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
function TagBadge({ title }) {
  return (
    <div className="bg-[#DBE2F0] p-2 ml-2 flex-grow-0 rounded-md mb-2">
      {title}
    </div>
  );
}
