import { EmailIcon, PlusSquareIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

export default function MainTabs({ fetchedPrjects, onOpen, onClose, btnRef }) {
  console.log(fetchedPrjects);

  const completedProjects = fetchedPrjects.filter(
    (project) => project.status === "Completed"
  );
  const ongoingProjects = fetchedPrjects.filter(
    (project) => project.status === "Ongoing"
  );
  console.log(ongoingProjects);

  const draftProjects = fetchedPrjects.filter(
    (project) => project.status === "Draft"
  );
  const cancelledProjects = fetchedPrjects.filter(
    (project) => project.status === "Cancelled"
  );
  return (
    <Tabs className="ml-4  h-[100vh] mr-4 w-full p-2">
      <Flex className="justify-between  w-[100%]">
        <TabList color={"black"}>
          <Tab>Completed</Tab>
          <Tab>Ongoing</Tab>
          <Tab>Draft</Tab>
          <Tab>Cancelled</Tab>
        </TabList>
        <div className="xxxs:hidden md:block">
          <Button
            className=""
            leftIcon={<PlusSquareIcon />}
            bg={"#5876B7"}
            color={"white"}
            variant="solid"
            ref={btnRef}
            onClick={onOpen}
          >
            Create a Project
          </Button>
        </div>
      </Flex>

      <TabPanels>
        <TabPanel color={"black"}>
          <Flex className="justify-start  flex-wrap">
            {completedProjects.length != 0 ? (
              completedProjects.map((elem, index) => {
                return (
                  <ProjectCard
                    key={`${elem.title}-${index}`}
                    title={elem.title}
                    category={elem.category}
                    tags={elem.tags}
                    remarks={elem.remarks}
                    stage={elem.stage}
                    id={elem.id}
                  />
                );
              })
            ) : (
              <div className="flex justify-center  w-full items-center h-[40vh]">
                <h1 className="font-medium text-xl text-center">
                  The project list are empty
                </h1>
              </div>
            )}
          </Flex>
        </TabPanel>
        <TabPanel color={"black"}>
          <Flex className="justify-start  flex-wrap">
            {ongoingProjects.length != 0 ? (
              ongoingProjects.map((elem, index) => {
                return (
                  <ProjectCard
                    key={`${elem.title}-${index}`}
                    title={elem.title}
                    category={elem.category}
                    tags={elem.tags}
                    remarks={elem.remarks}
                    stage={elem.stage}
                    id={elem.id}
                  />
                );
              })
            ) : (
              <div className="flex justify-center  w-full items-center h-[40vh]">
                <h1 className="font-medium text-xl">
                  The project list are empty.
                </h1>
              </div>
            )}
          </Flex>
        </TabPanel>
        <TabPanel color={"black"}>
          <Flex className="justify-start  flex-wrap">
            {draftProjects.length != 0 ? (
              draftProjects.map((elem, index) => {
                return (
                  <ProjectCard
                    key={`${elem.title}-${index}`}
                    title={elem.title}
                    category={elem.category}
                    tags={elem.tags}
                    remarks={elem.remarks}
                    stage={elem.stage}
                    id={elem.id}
                  />
                );
              })
            ) : (
              <div className="flex justify-center  w-full items-center h-[40vh]">
                <h1 className="font-medium text-xl">
                  The project list are empty.
                </h1>
              </div>
            )}
          </Flex>
        </TabPanel>
        <TabPanel color={"black"}>
          <Flex className="justify-start  flex-wrap">
            {cancelledProjects.length != 0 ? (
              cancelledProjects.map((elem, index) => {
                return (
                  <ProjectCard
                    key={`${elem.title}-${index}`}
                    title={elem.title}
                    category={elem.category}
                    tags={elem.tags}
                    remarks={elem.remarks}
                    stage={elem.stage}
                    id={elem.id}
                  />
                );
              })
            ) : (
              <div className="flex justify-center  w-full items-center h-[40vh]">
                <h1 className="font-medium text-xl">
                  The project list are empty.
                </h1>
              </div>
            )}
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
