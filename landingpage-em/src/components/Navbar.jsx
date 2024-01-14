import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Link,
  Stack,
  useColorModeValue,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <Flex
        align="center"
        justify="space-between"
        p={4}
        bg="purple.500"
        color="white"
      >
        <Link to="/">
          <Heading as="h1" fontSize="xl">
            Logo
          </Heading>
        </Link>

        <Flex
          display={{ base: "none", md: "flex" }}
          align="center"
          fontSize="sm"
        >
          <Link href="#feature-section" mx={2}>
            Features
          </Link>
          <Link href="#pricing-section" mx={2}>
            Pricing
          </Link>
          <Link href="#about-section" mx={2}>
            About
          </Link>
          <Link href="#contact-section" mx={2}>
            Contact
          </Link>
        </Flex>

        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            aria-label="Toggle Menu"
            fontSize="20px"
            variant="ghost"
            icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={handleMenuToggle}
          />
        </Box>
      </Flex>

      {/* Responsive Menu */}
      <Collapse in={isMenuOpen} animateOpacity>
        <Stack
          display={{ base: "flex", md: "none" }}
          bgColor={"#444444"}
          px={4}
          pb={4}
          fontSize="sm"
          color={"whitesmoke"}
        >
          <Link href="#feature-section" py={1}>
            Features
          </Link>
          <Link href="#pricing-section" py={1}>
            Pricing
          </Link>
          <Link href="#about-section" py={1}>
            About
          </Link>
          <Link href="#contact-section" py={1}>
            Contact
          </Link>
        </Stack>
      </Collapse>
    </nav>
  );
};

export default Navbar;
