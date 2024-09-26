import { inter, roboto_mono } from "@/app/fonts/fonts";
import { Flex, Heading, Spacer, Spinner } from "@chakra-ui/react";
import ProjectBadges from "./ProjectBadges";
import { projects } from "@/utils/data";
import { Suspense, lazy } from "react";

// Lazy load the MainTabs component
const MainTabs = lazy(() => import("./MainTabs"));

const countProjectStatus = (projects) => {
  const statusCount = {
    Completed: 0,
    Ongoing: 0,
    Draft: 0,
    Cancelled: 0,
  };

  projects.forEach((project) => {
    if (statusCount.hasOwnProperty(project.status)) {
      statusCount[project.status]++;
    }
  });

  return statusCount; // Return the final counts
};

const ContentComp = ({ fetchedPrjects, onOpen, onClose, btnRef }) => {
  const projectStatusCount = countProjectStatus(fetchedPrjects);

  return (
    <Flex flexDir={"column"} className=" " bg={"white"} w={"100%"}>
      <Flex flexDir={"column"}>
        <h1 className={`font-fira mt-12 ml-3 text-black text-4xl font-medium `}>
          Welcome Back, Hamza!
        </h1>
        <p className="text-gray-500 ml-4 text-md">
          You have accomplished a lot today. Let us handle the rest.
        </p>
      </Flex>
      <Flex className="mt-4  xxs:justify-around lg:justify-start ml-4 lg:space-x-2 flex-wrap">
        <ProjectBadges
          source={require("/public/assets/folder1.svg")}
          title={"Completed"}
          count={projectStatusCount.Completed}
        />
        <ProjectBadges
          source={require("/public/assets/folder2.svg")}
          title={"Ongoing"}
          count={projectStatusCount.Ongoing}
        />
        <ProjectBadges
          source={require("/public/assets/folder3.svg")}
          title={"Draft"}
          count={projectStatusCount.Draft}
        />
        <ProjectBadges
          source={require("/public/assets/folder4.svg")}
          title={"Cancelled"}
          count={projectStatusCount.Cancelled}
        />
      </Flex>
      <Flex className="mt-8 justify-center items-center">
        <Suspense
          fallback={
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          }
        >
          <MainTabs
            fetchedPrjects={fetchedPrjects}
            onOpen={onOpen}
            onClose={onClose}
            btnRef={btnRef}
          />
        </Suspense>
      </Flex>
    </Flex>
  );
};

export default ContentComp;
