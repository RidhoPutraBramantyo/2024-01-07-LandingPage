import React from "react";
import { Box, SimpleGrid, Text, Heading, Icon, VStack } from "@chakra-ui/react";
// Import icons from 'react-icons' package or any other icon library you prefer
import {
  IoAnalyticsSharp,
  IoBagCheck,
  IoCalculator,
  IoOptions,
} from "react-icons/io5";

const FeatureCard = ({ title, text, icon }) => {
  return (
    <VStack
      p={5}
      bg="white"
      boxShadow="md"
      rounded="md"
      _hover={{ boxShadow: "xl" }}
    >
      <Icon as={icon} w={10} h={10} color="purple.500" />
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
      <Text textAlign="center" color="gray.600">
        {text}
      </Text>
    </VStack>
  );
};

const InventoryFeatures = () => {
  return (
    <Box py={5} px={8} maxW="container.xl" mx="auto">
      <Text fontSize="sm" color="gray.500" textAlign="center">
        Office & Inventory
      </Text>
      <Heading textAlign="center" size="xl" mb={6}>
        Our best inventory
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        <FeatureCard
          icon={IoCalculator}
          title="Recipe management & costing"
          text="Lorem ipsum is simply dummy text of the printing and typesetting."
        />
        <FeatureCard
          icon={IoBagCheck}
          title="Stock management & Inventory"
          text="Lorem ipsum is simply dummy text of the printing and typesetting."
        />
        <FeatureCard
          icon={IoAnalyticsSharp}
          title="Purchase management systems"
          text="Lorem ipsum is simply dummy text of the printing and typesetting."
        />
        <FeatureCard
          icon={IoOptions}
          title="Powerful Inventory reporting"
          text="Lorem ipsum is simply dummy text of the printing and typesetting."
        />
      </SimpleGrid>
    </Box>
  );
};

export default InventoryFeatures;
