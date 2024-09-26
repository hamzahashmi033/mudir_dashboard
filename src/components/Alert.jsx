import {
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Button,
  Box,
} from "@chakra-ui/react";

export default function AlertComp({ visible, onClose, message }) {
  return (
    visible && (
      <Alert status="success" variant={"solid"}>
        <AlertIcon />
        <Box>
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Box>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={onClose}
        />
      </Alert>
    )
  );
}
