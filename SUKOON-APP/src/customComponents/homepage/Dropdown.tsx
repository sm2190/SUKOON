import { Heading, HStack, Menu } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { MdArrowDropDown } from "react-icons/md";

const Dropdown = () => {
  // State to track selected item
  const [selectedItem, setSelectedItem] = useState('Choose Home...');

  return (
    <div>
      <MenuRoot>
        <MenuTrigger asChild width={'120%'}>
          <Button 
            variant="outline" 
            size="xs" 
            color={'gray.300'} 
            borderRadius={20}
          >
            <HStack>
                <Heading>
                    {selectedItem}
                </Heading>
                <MdArrowDropDown/>
            </HStack>
          </Button>
        </MenuTrigger>

        <MenuContent color={'#454545'}>
          {/* Adding the 'value' prop to each MenuItem */}
          <MenuItem value="new-txt" color={'inherit'} onClick={() => setSelectedItem("New Text File")}>
            New Text File
          </MenuItem>
          <MenuItem value="new-file" color={'inherit'} onClick={() => setSelectedItem("New File...")}>
            New File...
          </MenuItem>
          <MenuItem value="new-win" color={'inherit'} onClick={() => setSelectedItem("New Window")}>
            New Window
          </MenuItem>
          <MenuItem value="open-file" color={'inherit'} onClick={() => setSelectedItem("Open File...")}>
            Open File...
          </MenuItem>
          <MenuItem value="export" color={'inherit'} onClick={() => setSelectedItem("Export")}>
            Export
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    </div>
  );
};

export default Dropdown;
