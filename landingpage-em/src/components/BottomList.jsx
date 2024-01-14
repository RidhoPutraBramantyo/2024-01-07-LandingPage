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
      px={{ base: 4, md: 10 }}
      py={5}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="start"
        wrap="wrap"
      >
        {/* Section 1 */}
        <Box flex={{ base: "1", md: "0.75" }} p={4}>
          <VStack align="start" mb={{ base: 5, md: 0 }}>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
              Posing
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }}>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so
            </Text>
            <Flex
              display={{ base: "flex", md: "grid" }}
              gridGap={5}
              gridTemplateColumns={{ base: "repeat(3, 1fr)", md: "none" }}
            >
              <Link href="https://www.facebook.com" isExternal>
                <Icon as={FaFacebook} boxSize={{ base: 5, md: 7 }} />
              </Link>
              <Link href="https://www.twitter.com" isExternal>
                <Icon as={FaTwitter} boxSize={{ base: 5, md: 7 }} />
              </Link>
              <Link href="https://www.instagram.com" isExternal>
                <Icon as={FaInstagram} boxSize={{ base: 5, md: 7 }} />
              </Link>
            </Flex>
          </VStack>
        </Box>

        {/* Section 2 */}
        <Box flex={{ base: "1", md: "0.75" }} p={4}>
          <VStack align="start" mb={{ base: 5, md: 0 }}>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
              Available POS
            </Text>
            <Link fontSize={{ base: "sm", md: "md" }}>Food Delivery</Link>
            <Link fontSize={{ base: "sm", md: "md" }}>Furniture Store</Link>
            <Link fontSize={{ base: "sm", md: "md" }}>Coffee Shop</Link>
            <Link fontSize={{ base: "sm", md: "md" }}>Clothing Store</Link>
            <Link fontSize={{ base: "sm", md: "md" }}>eCommerce</Link>
          </VStack>
        </Box>

        {/* Section 3 */}
        <Box flex={{ base: "1", md: "0.75" }} p={4}>
          <VStack align="start" mb={{ base: 5, md: 0 }}>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
              Company
            </Text>
            <Link fontSize={{ base: "sm", md: "md" }}>Features</Link>
            <Link fontSize={{ base: "sm", md: "md" }}>FAQ</Link>
            <Link fontSize={{ base: "sm", md: "md" }}>Privacy Policy</Link>
            <Link fontSize={{ base: "sm", md: "md" }}>Terms of Use</Link>
          </VStack>
        </Box>

        {/* Section 4 */}
        <Box flex={{ base: "1", md: "0.75" }} p={4}>
          <VStack align="start">
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
              Subscribe us
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }}>
              Get Business news, tips, and solutions to your problems from our
              experts.
            </Text>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              alignItems="center"
            >
              <Input
                placeholder="Enter your email"
                size="md"
                mb={{ base: 2, md: 0 }}
              />
              <Button
                colorScheme="purple"
                px={8}
                fontSize={{ base: "sm", md: "md" }}
              >
                Subscribe
              </Button>
            </Flex>
          </VStack>
        </Box>
      </Flex>

      {/* Copyright */}
      <Text textAlign="center" pt={5} fontSize={{ base: "sm", md: "md" }}>
        Copyright 2022. Created by Thememarch.
      </Text>
    </Box>
  );
};

export default Footer;
