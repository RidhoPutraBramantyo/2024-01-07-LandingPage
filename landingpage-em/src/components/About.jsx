import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Image,
  VStack,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const About = () => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      align="center"
      justify="center"
      p={10}
      bgGradient="linear(to-r, gray.100, purple.100)"
    >
      <Flex
        flex={{ base: 1, md: 1 }}
        justify="center"
        align="center"
        mb={{ base: 4, md: 0 }}
      >
        <Image
          display={{ base: "none", md: "block" }}
          src="/img/about_img_1.png"
          alt="Point of Sale"
          boxSize={{ base: "200px", md: "300px" }}
        />
      </Flex>
      <VStack flex={{ base: 1, md: 1 }} p={5} spacing={4} align="start">
        <Text fontSize="xs" color="gray.600">
          About The POS
        </Text>
        <Heading as="h2" size="xl" fontWeight="bold" color="purple.600">
          Best solution for point of sale about details
        </Heading>
        <Text fontWeight="bold" color="gray.600">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's. It was popularised in
          the 1980s with the release of Letraset sheets containing Lorem ipsum
          passages.
        </Text>

        <List spacing={3}>
          <ListItem>
            <Flex alignItems="center">
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <Heading as="h3" size={{ base: "md", md: "lg" }}>
                Other point of sale information{" "}
              </Heading>
            </Flex>
            <Text fontWeight="bold" color="gray.500">
              But I must explain to you how all this mistaken in denouncing
              pleasure and praising pain was born and I will give.{" "}
            </Text>
          </ListItem>

          <ListItem>
            <Flex alignItems="center">
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <Heading as="h3" size={{ base: "md", md: "lg" }}>
                Best process system POS{" "}
              </Heading>
            </Flex>
            <Text fontWeight="bold" color="gray.500">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti at.{" "}
            </Text>
          </ListItem>
        </List>
      </VStack>
    </Flex>
  );
};

export default About;
