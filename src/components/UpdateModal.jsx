import {
  Box,
  Button,
  Flex,
  FormLabel,
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
  Input,
  FormControl,
  Textarea,
  Select,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { useDispatch } from "react-redux";
import { updateExistigProject } from "@/store/ProjectSlice";

export default function UdpateModal({
  updateModalIsOpen,
  updateModalOnClose,
  title,
  category,
 
  remarks,
  stage,
  status,
  id,
}) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: title || "",
    category: category || "",
    
    remarks: remarks || "",
    stage: stage || 1,
    status: status || "Ongoing",
  });

  useEffect(() => {
    setFormData({
      title,
      category,
   
      remarks,
      stage,
      status,
    });
  }, [title, category,  remarks, stage, status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTagChange = (index, value) => {
    const updatedTags = [...formData.tags];

    
    if (index < 3) {
      updatedTags[index] = value;

      setFormData((prevState) => ({
        ...prevState,
        tags: updatedTags,
      }));
    }
  };

  const handleNewTag = () => {
    
    if (formData.tags.length < 3) {
      setFormData((prevState) => ({
        ...prevState,
        tags: [...prevState.tags, ""], 
      }));
    }
  };

  const handleStatusChange = (status) => {
    setFormData((prevState) => ({
      ...prevState,
      status,
    }));
  };

  const handleSubmit = () => {
    console.log("clicked ", id);

    const updatedProjectData = {
      ...formData,
    };
    dispatch(updateExistigProject({ id, project: updatedProjectData }));
    updateModalOnClose();
  };

  return (
    <Modal isCentered isOpen={updateModalIsOpen} onClose={updateModalOnClose}>
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="80%"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalHeader>Update Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter project title"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Category</FormLabel>
            <Input
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter project category"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Stage</FormLabel>
            <Select name="stage" value={formData.stage} onChange={handleChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Status</FormLabel>
            <HStack spacing={2}>
              {["Completed", "Ongoing", "Draft", "Cancelled"].map((status) => (
                <Badge
                  key={status}
                  cursor="pointer"
                  colorScheme={formData.status === status ? "blue" : "gray"}
                  onClick={() => handleStatusChange(status)}
                >
                  {status}
                </Badge>
              ))}
            </HStack>
          </FormControl>

          {/* <FormControl mt={4}>
            <FormLabel>Tags</FormLabel>
            {formData.tags.map((tag, index) => (
              <HStack key={index} spacing={2}>
                <Input
                  mt={2}
                  placeholder={`Tag ${index + 1}`}
                  value={tag}
                  onChange={(e) => handleTagChange(index, e.target.value)}
                />
              </HStack>
            ))}
            
            <Button
              mt={2}
              onClick={handleNewTag}
              isDisabled={formData.tags.length >= 3}
            >
              Add Tag
            </Button>
          </FormControl> */}

        
          <FormControl mt={4}>
            <FormLabel>Remarks</FormLabel>
            <Textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Enter project remarks"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => handleSubmit()}>
            Save
          </Button>
          <Button onClick={updateModalOnClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
