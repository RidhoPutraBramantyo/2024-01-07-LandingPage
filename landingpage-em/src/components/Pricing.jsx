import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Icon,
  VStack,
  HStack,
  useColorModeValue,
  Stack,
  Heading,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const pricingPlans = [
  {
    name: "Silver",
    price: 43,
    features: [
      "Unlimited users",
      "Unlimited customers",
      "Access from anywhere",
      "Accept payments 24/7",
      "Free Support",
    ],
    color1: "green.500",
    color2: "green.500",
    color3: "green.500",
  },
  {
    name: "Gold",
    price: 65,
    features: [
      "Unlimited users",
      "Unlimited customers",
      "Access from anywhere",
      "Accept payments 24/7",
      "Free Support",
    ],
    color1: "green.500",
    color2: "green.500",
    color3: "green.500",
  },
  {
    name: "Bronze",
    price: 99,
    features: [
      "Unlimited users",
      "Unlimited customers",
      "Access from anywhere",
      "Accept payments 24/7",
      "Free Support",
    ],
    color1: "green.500",
    color2: "green.500",
    color3: "green.500",
  },
];

const PricingCard = ({ plan }) => {
  return (
    <VStack
      p={4}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"xl"}
      rounded={"xl"}
      textAlign={"center"}
      spacing={3}
    >
      <Icon
        as={plan.icon}
        boxSize="50px"
        color={useColorModeValue("purple.500", "purple.300")}
      />
      <Text fontWeight="600" fontSize="xl">
        {plan.name}
      </Text>
      <Text fontSize="5xl" fontWeight="900">
        ${plan.price}
        <span style={{ fontSize: "16px" }}>/month</span>
      </Text>
      <Text fontSize="md" color={useColorModeValue("gray.600", "gray.400")}>
        Get 7 Days Free Trial
      </Text>
      <List spacing={3} textAlign="start" px={12}>
        {plan.features.map((feature, index) => (
          <ListItem key={index}>
            <ListIcon as={CheckCircleIcon} color={plan.color1} />
            {feature}
          </ListItem>
        ))}
      </List>
      <Button colorScheme="purple" w="full" mt={4}>
        Buy Now
      </Button>
    </VStack>
  );
};

const PricingSection = () => {
  return (
    <Box p={5} bg={useColorModeValue("gray.100", "gray.800")}>
      <Stack spacing={4} textAlign={"center"}>
        <Heading>Pricing Plan</Heading>
        <Text>The best choice for you</Text>
      </Stack>
      <Flex justify="center" direction={{ base: "column", md: "row" }} pt={10}>
        {pricingPlans.map((plan, index) => (
          <Box key={index} mx={4}>
            <PricingCard plan={plan} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default PricingSection;
