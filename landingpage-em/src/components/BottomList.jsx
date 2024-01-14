import React from "react";
import {
  Box,
  Flex,
  VStack,
  Text,
  Input,
  Button,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.700", "gray.900")}
      color={useColorModeValue("white", "gray.200")}
      px={10}
      py={5}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        {/* Section 1 */}
        <Box flex="1" p={4}>
          <VStack align="start" mb={{ base: 5, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold">
              Posing
            </Text>
            <Text fontSize="sm">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so
            </Text>
            <Flex
              display={"grid"}
              gridGap={5}
              gridTemplateColumns="repeat(3, 1fr)"
            >
              <Link href="https://www.facebook.com" isExternal>
                <Icon as={FaFacebook} boxSize={5} />
              </Link>
              <Link href="https://www.twitter.com" isExternal>
                <Icon as={FaTwitter} boxSize={5} />
              </Link>
              <Link href="https://www.instagram.com" isExternal>
                <Icon as={FaInstagram} boxSize={5} />
              </Link>
            </Flex>
          </VStack>
        </Box>

        {/* Section 2 */}
        <Box flex="1" p={4}>
          <VStack align="start" mb={{ base: 5, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold">
              Available POS
            </Text>
            <Link>Food Delivery</Link>
            <Link>Furniture Store</Link>
            <Link>Coffee Shop</Link>
            <Link>Clothing Store</Link>
            <Link>eCommerce</Link>
          </VStack>
        </Box>

        {/* Section 3 */}
        <Box flex="1" p={4}>
          <VStack align="start" mb={{ base: 5, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold">
              Company
            </Text>
            <Link>Features</Link>
            <Link>FAQ</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of Use</Link>
          </VStack>
        </Box>

        {/* Section 4 */}
        <Box flex="1" p={4}>
          <VStack align="start">
            <Text fontSize="lg" fontWeight="bold">
              Subscribe us
            </Text>
            <Text fontSize="sm">
              Get Business news, tips, and solutions to your problems from our
              experts.
            </Text>
            <Flex>
              <Input placeholder="Enter your email" size="md" />
              <Button colorScheme="purple" px={8}>
                Subscribe
              </Button>
            </Flex>
          </VStack>
        </Box>
      </Flex>

      {/* Copyright */}
      <Text textAlign="center" pt={5}>
        Copyright 2022. Created by Thememarch.
      </Text>
    </Box>
  );
};

export default Footer;
