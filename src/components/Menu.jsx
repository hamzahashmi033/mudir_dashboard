import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function BasicMenu() {
    return (

        <MenuList>
            <MenuItem color={"black"} onClick={() => alert("Download clicked")}>
                Download
            </MenuItem>
            <MenuItem color={"black"} onClick={() => alert("Create clicked")}>
                Create a Copy
            </MenuItem>
            <MenuItem color={"black"} onClick={() => alert("Delete clicked")}>
                Delete
            </MenuItem>
            <MenuItem color={"black"} onClick={() => alert("Forward clicked")}>
                Forward
            </MenuItem>
        </MenuList>

    )
}
