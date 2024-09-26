import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";

export default function CardMenu({ deleteModal }) {
  return (
    <MenuList>
      <MenuItem>Update</MenuItem>
      <MenuItem color={"red"} onClick={deleteModal}>
        Delete
      </MenuItem>
    </MenuList>
  );
}
