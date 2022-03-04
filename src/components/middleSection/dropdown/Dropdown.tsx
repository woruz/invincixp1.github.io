import * as React from 'react';
import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles } from '@fluentui/react/lib/Dropdown';
import "./Dropdown.css"

const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 300 } };

const dropdownControlledExampleOptions = [
  { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
  { key: 'apple', text: 'dfjhvgdsghbdr' },
  { key: 'banana', text: 'Banana' },
  { key: 'orange', text: 'Orange', disabled: true },
  { key: 'grape', text: 'Grape' },
  { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
  { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
  { key: 'broccoli', text: 'Broccoli' },
  { key: 'carrot', text: 'Carrot' },
  { key: 'lettuce', text: 'Lettuce' },
];

const DropdownMenu: React.FunctionComponent = () => {
  const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();

  const onChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    setSelectedItem(item);
  };

  return (
    <div className="DropdownMenu">
      <p>Show:</p>
      <Dropdown
        className='Drop'
        selectedKey={selectedItem ? selectedItem.key : undefined}
        placeholder="Select an option"
        options={dropdownControlledExampleOptions}
        styles={dropdownStyles}
      />
    </div>
  );
};

export default DropdownMenu