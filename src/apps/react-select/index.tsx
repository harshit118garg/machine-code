import { useState } from "react";
import "./styles/index.scss";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { Option } from "./definations/types";
import { randomCol } from "./utils/randomCol";
import { X } from "lucide-react";

export default function ReactSelect() {
  const options: Option[] = [
    { label: "Mr. X", value: "Mr. X", color: "blue" },
    { label: "Mr. Y", value: "Mr. Y", color: "green" },
    { label: "Mr. Z", value: "Mr. Z", color: "orange" },
  ];

  const [selectedValue, setSelectedValue] = useState<Option | null>(null);

  const [dropdownValue, setDropdownValue] = useState<Option | null>(null);
  const [optionsList, setOptionsList] = useState<Option[]>(options);

  const handleChange = (option: Option | null) => {
    setDropdownValue(option);
  };

  const handleCreateOption = (inputValue: string) => {
    const newOption: Option = {
      label: inputValue,
      value: inputValue,
      color: randomCol(),
    };
    setOptionsList((prevOptions) => [...prevOptions, newOption]);
    setDropdownValue(newOption);
  };

  const handleDeleteOption = (value: string) => {
    const updatedOptions = options.filter((option) => option.value !== value);
    setOptionsList(updatedOptions);
  };

  const OptionWithDeleteButton: React.FC<{
    innerProps: any;
    label: string;
    value: string;
  }> = ({ innerProps, label, value }) => (
    <div
      {...innerProps}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0.5rem",
      }}
    >
      {label}
      <button onClick={() => handleDeleteOption(value)}>
        <X />
      </button>
    </div>
  );

  const handleSelect = (option: Option | null) => setSelectedValue(option);

  return (
    <div className="react-select-container">
      <p>React Creatable Select</p>
      <CreatableSelect
        options={optionsList}
        isClearable
        isSearchable
        value={dropdownValue}
        onChange={handleChange}
        onCreateOption={handleCreateOption}
        components={{
          Option: OptionWithDeleteButton,
        }}
      />

      <p style={{ background: `${dropdownValue?.color}` }}>
        {dropdownValue?.value}
      </p>

      <p>React Single Select</p>
      <Select
        options={optionsList}
        defaultValue={optionsList[1]}
        onChange={handleSelect}
        value={selectedValue}
      />

      <p style={{ background: `${selectedValue?.color}` }}>
        {selectedValue?.value}
      </p>
    </div>
  );
}
