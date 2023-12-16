import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  searchGame: (searchText: string) => void;
}

const SearchInput = ({ searchGame }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) searchGame(event.target.value);
  };

  return (
    <Box marginBottom={5}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          onChange={(event) => onSearch(event)}
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </Box>
  );
};

export default SearchInput;
