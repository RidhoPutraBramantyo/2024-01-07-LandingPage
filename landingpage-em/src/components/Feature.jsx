import React from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  VStack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
// Import your icons from any icon library you prefer
import {
  MdPayment,
  MdSpeed,
  MdDataUsage,
  MdBuild,
  MdCheckCircle,
  MdShoppingCart,
} from "react-icons/md";

const features = [
  {
    icon: MdPayment,
    title: "Effortless card",
    text: "Lorem ipsum is simply dummy text of the most printing and typesetting.",
  },
  {
    icon: MdDataUsage,
    title: "Customer data",
    text: "Lorem ipsum is simply dummy text of the most printing and typesetting.",
  },
  {
    icon: MdCheckCircle,
    title: "Software accuracy",
    text: "Lorem ipsum is simply dummy text of the most printing and typesetting.",
  },
  {
    icon: MdBuild,
    title: "Customization",
    text: "Lorem ipsum is simply dummy text of the most printing and typesetting.",
  },
  {
    icon: MdShoppingCart,
    title: "Seamless checkout",
    text: "Lorem ipsum is simply dummy text of the most printing and typesetting.",
  },
  {
    icon: MdSpeed,
    title: "High speed process",
    text: "Lorem ipsum is simply dummy text of the most printing and typesetting.",
  },
];

const FeatureCard = ({ icon, title, text }) => {
  return (
    <VStack
      spacing={3}
      p={5}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"xl"}
      rounded={"lg"}
      align={"center"}
      textAlign={"center"}
    >
      <Icon
        as={icon}
        w={10}
        h={10}
        color={useColorModeValue("purple.500", "purple.300")}
      />
      <Text fontWeight={600}>{title}</Text>
      <Text color={useColorModeValue("gray.600", "gray.400")}>{text}</Text>
    </VStack>
  );
};

const Features = () => {
  return (
    <Box p={5} bg={useColorModeValue("gray.100", "gray.800")}>
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h3" size="lg" pb={5}>
          POS Features
        </Heading>
        <Heading as="h2" size="xl" fontWeight="bold" pb={10}>
          Available features
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Features;
