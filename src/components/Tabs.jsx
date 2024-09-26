'use client'
import { Center, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import * as Unicons from "@iconscout/react-unicons"
import { useState } from "react"
import { UisStar } from '@iconscout/react-unicons-solid'
import { Divider } from '@chakra-ui/react'
import AccordianComp from "./AccordianComp"
const TabsComp = () => {
    const [item, setItem] = useState("Dashboard")
    return (
        <Tabs variant='unstyled'>
            <TabList className="border border-gray-400 p-2 rounded-md">
                <Tab _selected={{ color: '#334876', bg: '#DBE2F0', fontWeight: "700" }} className="text-gray-500 w-[50%]">Personal</Tab>
                <Tab _selected={{ color: '#334876', bg: '#DBE2F0', fontWeight: "700" }} className="text-gray-500 w-[50%]">Invited</Tab>
            </TabList>
            <TabPanels>
                <TabPanel className="mt-4 rounded-md  " bg={"#EBF0FA"}>
                    <div className={`flex cursor-pointer space-x-2 items-center p-2 ${item == "Dashboard" ? "bg-white font-semibold" : ""}  rounded-md mb-2 hover:font-semibold transition duration-300 ease-in-out`} onClick={() => setItem("Dashboard")}>
                        {
                            item == "Dashboard" ? <UisStar size={20} color={"black"} /> : <Unicons.UilStar size={20} color={"gray"} />
                        }
                        <h1 className="text-sky-950 text-md ">Dashboard</h1>
                    </div>
                    <div className={`flex cursor-pointer space-x-2 items-center p-2 ${item == "Project" ? "bg-white font-semibold" : ""}  rounded-md mb-2 hover:font-semibold transition duration-300 ease-in-out`} onClick={() => setItem("Project")}>
                        {
                            item == "Project" ? <UisStar size={20} color={"black"} /> : <Unicons.UilStar size={20} color={"gray"} />
                        }
                        <h1 className="text-sky-950 text-md ">Project History</h1>
                    </div>
                    <div className={`flex cursor-pointer space-x-2 items-center p-2 ${item == "Client" ? "bg-white font-semibold" : ""}  rounded-md mb-2 hover:font-semibold transition duration-300 ease-in-out`} onClick={() => setItem("Client")}>
                        {
                            item == "Client" ? <UisStar size={20} color={"black"} /> : <Unicons.UilStar size={20} color={"gray"} />
                        }
                        <h1 className="text-sky-950 text-md ">Client History</h1>
                    </div>
                    <div className={`flex cursor-pointer space-x-2 items-center p-2 ${item == "Emails" ? "bg-white font-semibold" : ""}  rounded-md mb-2 hover:font-semibold transition duration-300 ease-in-out`} onClick={() => setItem("Emails")}>
                        {
                            item == "Emails" ? <UisStar size={20} color={"black"} /> : <Unicons.UilStar size={20} color={"gray"} />
                        }
                        <h1 className="text-sky-950 text-md ">Emails</h1>
                    </div>
                    <div className="border border-gray-300 mt-4 w-full"></div>
                    <div className="mt-4">
                        <AccordianComp />
                    </div>
                </TabPanel>
                <TabPanel className="mt-4 rounded-md  " bg={"#EBF0FA"}>
                    <div className={`flex cursor-pointer space-x-2 items-center p-2 ${item == "Dashboard" ? "bg-white font-semibold" : ""}  rounded-md mb-2 hover:font-semibold transition duration-300 ease-in-out`} onClick={() => setItem("Dashboard")}>
                        {
                            item == "Dashboard" ? <UisStar size={20} color={"black"} /> : <Unicons.UilStar size={20} color={"gray"} />
                        }
                        <h1 className="text-sky-950 text-md ">Invited Projects</h1>
                    </div>
                    <div className={`flex cursor-pointer space-x-2 items-center p-2 ${item == "Project" ? "bg-white font-semibold" : ""}  rounded-md mb-2 hover:font-semibold transition duration-300 ease-in-out`} onClick={() => setItem("Project")}>
                        {
                            item == "Project" ? <UisStar size={20} color={"black"} /> : <Unicons.UilStar size={20} color={"gray"} />
                        }
                        <h1 className="text-sky-950 text-md ">Linked People</h1>
                    </div>
                    <div className={`flex cursor-pointer space-x-2 items-center p-2 ${item == "Client" ? "bg-white font-semibold" : ""}  rounded-md mb-2 hover:font-semibold transition duration-300 ease-in-out`} onClick={() => setItem("Client")}>
                        {
                            item == "Client" ? <UisStar size={20} color={"black"} /> : <Unicons.UilStar size={20} color={"gray"} />
                        }
                        <h1 className="text-sky-950 text-md ">Team Management</h1>
                    </div>
                    <div className={`flex cursor-pointer space-x-2 items-center p-2 ${item == "Emails" ? "bg-white font-semibold" : ""}  rounded-md mb-2 hover:font-semibold transition duration-300 ease-in-out`} onClick={() => setItem("Emails")}>
                        {
                            item == "Emails" ? <UisStar size={20} color={"black"} /> : <Unicons.UilStar size={20} color={"gray"} />
                        }
                        <h1 className="text-sky-950 text-md ">Alerts</h1>
                    </div>
                    <div className="border border-gray-300 mt-4 w-full"></div>
                    <div className="mt-4">
                        <AccordianComp />
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
export default TabsComp