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
import { CheckCircleIcon, InfoIcon } from "@chakra-ui/icons";

const About = () => {
  return (
    <Flex
      align="center"
      justify="center"
      p={10}
      bgGradient="linear(to-r, gray.100, purple.100)"
    >
      <Flex flex={1} justify="center" align="center">
        <Image src="/img/about_img_1.png" alt="Point of Sale" boxSize="300px" />
      </Flex>
      <VStack flex={1} p={5} spacing={4} align="start">
        <Text fontSize="xs" color="gray.600">
          About The POS
        </Text>
        <Heading as="h2" size="xl" fontWeight="bold" color="purple.600">
          Best solution for point of sale about details
        </Heading>
        <Text fontWeight={"bold"} color="gray.600">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's. It was popularised in
          the 1980s with the release of Letraset sheets containing Lorem ipsum
          passages.
        </Text>

        <Flex>
          <List spacing={3}>
            <ListItem>
              <Flex alignItems={"center"}>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <Heading as="h3" size="lg">
                  Other point of sale information{" "}
                </Heading>
              </Flex>
              <Text fontWeight={"bold"} color="gray.500">
                But I must explain to you how all this mistaken in denouncing
                pleasure and praising pain was born and I will give.{" "}
              </Text>
            </ListItem>

            <ListItem>
              <Flex alignItems={"center"}>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <Heading as="h3" size="lg">
                  Best process system POS{" "}
                </Heading>
              </Flex>
              <Text fontWeight={"bold"} color="gray.500">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti at.{" "}
              </Text>
            </ListItem>
          </List>
          <Box>
            <Image src="/img/about_img_2.png" />
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default About;
