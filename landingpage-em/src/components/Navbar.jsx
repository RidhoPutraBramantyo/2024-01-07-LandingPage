import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
// Navbar.jsx
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
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
            aria-label="Open Menu"
            fontSize="20px"
            variant="ghost"
            icon={<HamburgerIcon />}
          />
        </Box>
      </Flex>

      {/* Responsive Menu */}
      <Box
        display={{ base: "block", md: "none" }}
        mt={2}
        px={4}
        pb={4}
        fontSize="sm"
      >
        <Link href="#feature-section" block>
          Features
        </Link>
        <Link href="#pricing-section" block mt={2}>
          Pricing
        </Link>
        <Link href="#about-section" block mt={2}>
          About
        </Link>
        <Link href="#contact-section" block mt={2}>
          Contact
        </Link>
      </Box>
    </nav>
  );
};

export default Navbar;
