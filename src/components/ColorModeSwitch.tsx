import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react";
import { textFontSize } from "../style-chakraUI/StyleChakraUI";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Text fontSize={textFontSize} as="b">
        {colorMode === "dark" ? "Dark Mode:" : "Light Mode:"}
      </Text>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
