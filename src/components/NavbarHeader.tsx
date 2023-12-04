import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

interface Props {
  logoSize: string;
  titleText: string;
}

const NavbarHeader = ({ logoSize, titleText }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize={logoSize} />
      <Text>{titleText}</Text>
    </HStack>
  );
};

export default NavbarHeader;
