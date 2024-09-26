import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";

export default function CardMenu({ deleteModal, updateModalOnOpen }) {
  return (
    <MenuList>
      <MenuItem onClick={updateModalOnOpen}>Update</MenuItem>
      <MenuItem color={"red"} onClick={deleteModal}>
        Delete
      </MenuItem>
    </MenuList>
  );
}
