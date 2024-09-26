"use client";
import {
  useDisclosure,
  Flex,
  Button,
  Text,
  Spinner, // Ensure you're importing Text from Chakra UI
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import DrawerComp from "./Drawer";
import Sidebar from "./Sidebar";
import ContentComp from "./ContentComp";
import ProjectDrawer from "./ProjectDrawer";
import { useEffect, useRef, useState } from "react";
import AlertComp from "./Alert";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "@/store/ProjectSlice";
import { PlusSquareIcon } from "@chakra-ui/icons";
import * as Unicons from "@iconscout/react-unicons";
export default function HomeSlice() {
  const dispatch = useDispatch();
  const btnRef = useRef();
  const { status, message, projects } = useSelector((state) => state.project);

  // New loading state
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: alertVisible,
    onClose: alertClose,
    onOpen: alertOpen,
  } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  const isMobile = useBreakpointValue({ base: true, lg: false });

  useEffect(() => {
    if (status === "succeeded") {
      alertOpen();
      dispatch(fetchProjects());
    }
    dispatch(fetchProjects());
  }, [status]);

  useEffect(() => {
    // Set loading to false after a short delay to ensure layout is correctly set
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Flex justify="center" align="center" height="100vh" bg="white">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }

  return (
    <Flex color="white" direction={{ base: "column", lg: "row" }}>
      <ProjectDrawer isOpen={isOpen2} onClose={onClose2} btnRef={btnRef} />
      {!isMobile ? (
        <Flex className="w-[25%]" w={{ base: "100%", lg: "25%" }}>
          <Sidebar />
        </Flex>
      ) : (
        <>
          <AlertComp
            visible={alertVisible}
            onClose={alertClose}
            message={message}
          />
          <DrawerComp isOpen={isOpen} onClose={onClose} />
        </>
      )}
      <Flex h="100vh" w="100%" bg="white">
        <div className="p-2 absolute" onClick={onOpen}>
          {isMobile && <Unicons.UilAngleRight size={25} color="black" />}
        </div>
        <div className="p-2 absolute right-0">
          {isMobile ? (
            <Button
              className="p-2"
              size={"sm"}
              leftIcon={<PlusSquareIcon />}
              bg={"#5876B7"}
              color={"white"}
              variant="solid"
              
              onClick={onOpen2}
              ref={btnRef}
            >
              Create a Project
            </Button>
          ) : (
            <AlertComp
              visible={alertVisible}
              onClose={alertClose}
              message={message}
            />
          )}
        </div>
        <Flex w={"100%"}>
          <ContentComp
            fetchedPrjects={projects}
            onOpen={onOpen2}
            onClose={onClose2}
            btnRef={btnRef}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
