import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Select,
  FormControl,
  FormLabel,
  Textarea,
  IconButton,
  VStack,
  HStack,
  Badge,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "@/store/ProjectSlice";

export default function ProjectDrawer({ isOpen, onClose, btnRef }) {
  const { status } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    stage: 1,
    tags: [""],
    remarks: "",
    status: "Ongoing",
  });

  const [errors, setErrors] = useState({
    title: false,
    category: false,
    tags: false,
    remarks: false,
  });

  const statuses = ["Completed", "Ongoing", "Draft", "Cancelled"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.title) {
      newErrors.title = true;
      isValid = false;
    }
    if (!formData.category) {
      newErrors.category = true;
      isValid = false;
    }
    if (formData.tags.some((tag) => !tag.trim())) {
      newErrors.tags = true;
      isValid = false;
    }
    if (!formData.remarks) {
      newErrors.remarks = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const addTag = () => {
    if (formData.tags.length < 3) {
      setFormData((prevState) => ({
        ...prevState,
        tags: [...prevState.tags, ""],
      }));
    }
  };

  const removeTag = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      tags: prevState.tags.filter((_, i) => i !== index),
    }));
  };

  const handleTagChange = (index, value) => {
    const updatedTags = [...formData.tags];
    updatedTags[index] = value;
    setFormData((prevState) => ({ ...prevState, tags: updatedTags }));
  };

  const handleStatusChange = (status) => {
    setFormData((prevState) => ({ ...prevState, status }));
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const projectData = {
        ...formData,
      };
      dispatch(createProject(projectData));
      removeState();
    }
  };

  const removeState = () => {
    setFormData({
      title: "",
      category: "",
      stage: 1,
      tags: [""],
      remarks: "",
      status: "Ongoing",
    });
    onClose();
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create a New Project</DrawerHeader>

        <DrawerBody>
          <VStack spacing={4}>
            {/* Title */}
            <FormControl isInvalid={errors.title}>
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                placeholder="Enter title"
                value={formData.title}
                onChange={handleChange}
              />
              {errors.title && (
                <FormErrorMessage>Title is required.</FormErrorMessage>
              )}
            </FormControl>

            {/* Category */}
            <FormControl isInvalid={errors.category}>
              <FormLabel>Category</FormLabel>
              <Input
                required
                name="category"
                placeholder="Enter category"
                value={formData.category}
                onChange={handleChange}
              />
              {errors.category && (
                <FormErrorMessage>Category is required.</FormErrorMessage>
              )}
            </FormControl>

            {/* Stage */}
            <FormControl>
              <FormLabel>Stage</FormLabel>
              <Select
                name="stage"
                value={formData.stage}
                onChange={handleChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </Select>
            </FormControl>

            {/* Status Badges */}
            <FormControl>
              <FormLabel>Status</FormLabel>
              <HStack spacing={2}>
                {statuses.map((status) => (
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

            {/* Tags */}
            <FormControl isInvalid={errors.tags}>
              <FormLabel>Tags</FormLabel>
              {formData.tags.map((tag, index) => (
                <HStack key={index} spacing={2}>
                  <Input
                    placeholder={`Tag ${index + 1}`}
                    value={tag}
                    mt={2}
                    onChange={(e) => handleTagChange(index, e.target.value)}
                  />
                  <IconButton
                    aria-label="Remove tag"
                    icon={<DeleteIcon />}
                    onClick={() => removeTag(index)}
                    isDisabled={formData.tags.length === 1} // Prevent removing the last tag
                  />
                </HStack>
              ))}
              {errors.tags && (
                <FormErrorMessage>All tags must have a value.</FormErrorMessage>
              )}
              <Button
                leftIcon={<AddIcon width={4} height={4} />}
                mt={2}
                onClick={addTag}
                isDisabled={formData.tags.length >= 3} // Disable button if limit is reached
              >
                Add Tag
              </Button>
            </FormControl>

            {/* Remarks */}
            <FormControl isInvalid={errors.remarks}>
              <FormLabel>Remarks</FormLabel>
              <Textarea
                name="remarks"
                placeholder="Enter remarks"
                value={formData.remarks}
                onChange={handleChange}
              />
              {errors.remarks && (
                <FormErrorMessage>Remarks are required.</FormErrorMessage>
              )}
            </FormControl>
          </VStack>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
