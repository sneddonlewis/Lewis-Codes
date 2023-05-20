import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export type SortSelectorProps = {
    techs: string[],
    actionsOn: (a: string) => void
};

export const SortSelector = (props: SortSelectorProps) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
  
    return (
      <div className="">
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"down"}>
          <DropdownToggle caret>Sort by technology</DropdownToggle>
          <DropdownMenu>
            {props.techs.map(item => <DropdownItem key={item} onClick={() => props.actionsOn(item)}>{item}</DropdownItem>)}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
}