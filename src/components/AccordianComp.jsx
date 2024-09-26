import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center } from "@chakra-ui/react"
import * as Unicons from "@iconscout/react-unicons"
import Image from "next/image"
const AccordianComp = () => {
    return (
        <Accordion defaultIndex={[0,1]} allowMultiple >
            <AccordionItem border={"none"} className="-ml-4">
                <AccordionButton className="w-full p-0" border={"none"}>
                    <AccordionIcon color={"black"} />
                    <div className="flex flex-row justify-between items-center space-x-12">
                        <h1 className="text-black text-sm font-bold">WORKSPACES</h1>
                        <p className="text-[10px] text-white p-1 bg-gray-400 rounded-full">COMING SOON</p>
                    </div>
                </AccordionButton>
                <AccordionPanel pb={4} color={""}>
                    <div className="flex justify-between ml-7 mb-3 hover:text-black cursor-pointer">
                        <h1 className="text-gray-600 text-sm hover:text-black">Work Space 1</h1>
                        <Unicons.UilAngleDown size={20} color={"gray"} className="hover:text-white" />
                    </div>
                    <div className="flex justify-between ml-7 mb-3 hover:text-black cursor-pointer">
                        <h1 className="text-gray-600 text-sm hover:text-black">Work Space 2</h1>
                        <Unicons.UilAngleDown size={20} color={"gray"} />
                    </div>
                    <div className="flex justify-between ml-7 mb-3 hover:text-black cursor-pointer">
                        <h1 className="text-gray-600 text-sm hover:text-black">Work Space 3</h1>
                        <Unicons.UilAngleDown size={20} color={"gray"} />
                    </div>
                    <Center color={"blue"} className="cursor-pointer">See All</Center>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem border={"none"} className="-ml-4">
                <AccordionButton className="border w-full " border={"none"}>
                    <AccordionIcon color={"black"} />
                    <div className="flex space-x-6 items-center ">
                        <h1 className="text-black text-sm font-bold">LAUNCHPAD</h1>
                        {/* <p className="text-[7px] text-white p-2 bg-gray-400 rounded-full">COMING SOON</p> */}
                    </div>
                </AccordionButton>
                <AccordionPanel pb={4} color={""}>
                    <div className="flex justify-between items-center mb-3 hover:text-black cursor-pointer">
                        <div className="flex space-x-2 items-center">
                            <Image src={require("../../public/assets/busi1.svg")} width={30} height={30} />
                            <h1 className="text-gray-600 text-sm hover:text-black">Business Name 1</h1>
                        </div>
                        <Unicons.UilAngleDown size={20} color={"gray"} className="hover:text-white" />
                    </div>
                    <div className="flex justify-between items-center mb-3 hover:text-black cursor-pointer">
                        <div className="flex space-x-2 items-center">
                            <Image src={require("../../public/assets/busi2.svg")} width={30} height={30} />
                            <h1 className="text-gray-600 text-sm hover:text-black">Business Name 2</h1>
                        </div>
                        <Unicons.UilAngleDown size={20} color={"gray"} className="hover:text-white" />
                    </div>
                    <div className="flex justify-between items-center mb-3 hover:text-black cursor-pointer">
                        <div className="flex space-x-2 items-center">
                            <Image src={require("../../public/assets/busi3.svg")} width={30} height={30} />
                            <h1 className="text-gray-600 text-sm hover:text-black">Business Name 3</h1>
                        </div>
                        <Unicons.UilAngleDown size={20} color={"gray"} className="hover:text-white" />
                    </div>
                    <Center color={"blue"} className="cursor-pointer">See All</Center>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
export default AccordianComp