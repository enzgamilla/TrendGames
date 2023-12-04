import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react";
import { textFontSize } from "../style-chakraUI/StyleChakraUI";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Text fontSize={textFontSize} as="b">
        {colorMode === "dark" ? "Put in Light Mode:" : "Put in Dark Mode:"}
      </Text>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
    </HStack>
  );
};

export default ColorModeSwitch;
