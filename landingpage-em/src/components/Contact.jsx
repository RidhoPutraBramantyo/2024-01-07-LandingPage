import React from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
} from "@chakra-ui/react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const ContactComponent = () => {
  return (
    <Flex
      bgGradient="linear(to-r, #e0c3fc, #8ec5fc)"
      direction={{ base: "column", md: "row" }}
      p={10}
      justify="space-between"
    >
      <VStack spacing={5} align="flex-start" w={{ base: "100%", md: "45%" }}>
        <Heading size="lg">
          If you have any queries, feel free to contact us
        </Heading>
        <Text fontWeight={"bold"} color="gray.600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the Lorem Ipsum is
          simply dummy text of the printing and typesetting.
        </Text>
        <Box>
          <Heading size="md">Address</Heading>
          <HStack>
            <Icon as={MdLocationOn} />
            <Text fontWeight={"bold"} color="gray.600">
              4117 Leroy LaneHarold, KY 41635,
            </Text>
          </HStack>
        </Box>
        <Box>
          <Heading size="md">Contact Number</Heading>
          <HStack>
            <Icon as={MdPhone} />
            <Text fontWeight={"bold"} color="gray.600">
              +606-243-4966
            </Text>
          </HStack>
        </Box>
        <Box>
          <Heading size="md">Email Address</Heading>
          <HStack>
            <Icon as={MdEmail} />
            <Text fontWeight={"bold"} color="gray.600">
              demo@gmail.com
            </Text>
          </HStack>
        </Box>
      </VStack>
      <VStack
        as="form"
        spacing={5}
        align="flex-start"
        w={{ base: "100%", md: "45%" }}
        mt={{ base: 10, md: 0 }}
      >
        <Heading size="lg">Please fill up the form</Heading>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your name" bg="white" />{" "}
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Your email address" bg="white" />
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Phone number</FormLabel>
          <Input type="tel" placeholder="Your phone number" bg="white" />{" "}
        </FormControl>
        <FormControl id="message">
          <FormLabel>Write your message</FormLabel>
          <Textarea placeholder="Your message" bg="white" />{" "}
        </FormControl>
        <Button colorScheme="purple" size="md">
          Send Message
        </Button>
      </VStack>
    </Flex>
  );
};

export default ContactComponent;
