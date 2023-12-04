import { HStack, Image, Text } from "@chakra-ui/react";
import { titleTextFontSize, iconTitleSize } from "../style/StyleChakraUI";
import logo from "../assets/logo.webp";

interface Props {
  titleText: string;
}

const NavbarHeader = ({ titleText }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize={iconTitleSize} />
      <Text fontSize={titleTextFontSize} as="b">
        {titleText}
      </Text>
    </HStack>
  );
};

export default NavbarHeader;
