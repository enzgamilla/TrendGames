import { HStack, Image, Text } from "@chakra-ui/react";
import {
  titleTextFontSize,
  iconTitleSize,
} from "../style-chakraUI/StyleChakraUI";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  titleText: string;
}

const NavbarHeader = ({ titleText }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack>
        <Image src={logo} boxSize={iconTitleSize} />
        <Text fontSize={titleTextFontSize} as="b">
          {titleText}
        </Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavbarHeader;
