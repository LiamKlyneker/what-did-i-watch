import { debounce } from "lodash";
import s from "./styles.module.css";

export interface SearchInputProps {
  debounceOnChangeDelay?: number;
  name: string;
  onChange: (name: string, value: string) => void;
  placeholder: string;
  value?: string;
}

export default function SearchInput(props: SearchInputProps) {
  const { name, placeholder, onChange, debounceOnChangeDelay, value } = props;

  const debounceOnChange = debounce((value: string) => {
    onChange(name, value);
  }, 500);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (debounceOnChangeDelay) {
      debounceOnChange(value);
    } else {
      onChange(name, value);
    }
  };

  return (
    <div className={s.searchInputWrapper}>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={handleOnChange}
        autoComplete="off"
      />
    </div>
  );
}
