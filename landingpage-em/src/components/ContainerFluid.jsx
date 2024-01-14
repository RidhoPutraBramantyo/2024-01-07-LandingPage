import React from "react";
import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid,
  Image,
  Center,
} from "@chakra-ui/react";
import { FaStore, FaUsers, FaStar, FaAward } from "react-icons/fa";

const StatisticsComponent = () => {
  return (
    <Center bgGradient="linear(to bottom, #E9D8FB, #EDF2F7)">
      <Box
        width={{ base: "100%", md: "75%" }}
        bgGradient="linear(to-r, purple.300, purple.600)"
        p={10}
        borderRadius="full"
        color="white"
        d="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} width="100%">
          <Stat>
            <Center>
              <Image
                as={FaStore}
                boxSize={{ base: "30px", md: "100px" }}
                mb={4}
              />
            </Center>
            <StatNumber fontSize={{ base: "xl", md: "2xl" }}>320+</StatNumber>
            <StatLabel fontSize={{ base: "sm", md: "md" }}>
              Retail Stores
            </StatLabel>
          </Stat>
          <Stat>
            <Center>
              <Image
                as={FaUsers}
                boxSize={{ base: "30px", md: "100px" }}
                mb={4}
              />
            </Center>
            <StatNumber fontSize={{ base: "xl", md: "2xl" }}>92k</StatNumber>
            <StatLabel fontSize={{ base: "sm", md: "md" }}>Customers</StatLabel>
          </Stat>
          <Stat>
            <Center>
              <Image
                as={FaStar}
                boxSize={{ base: "30px", md: "100px" }}
                mb={4}
              />
            </Center>
            <StatNumber fontSize={{ base: "xl", md: "2xl" }}>5k</StatNumber>
            <StatLabel fontSize={{ base: "sm", md: "md" }}>
              Positive Ratings
            </StatLabel>
          </Stat>
          <Stat>
            <Center>
              <Image
                as={FaAward}
                boxSize={{ base: "30px", md: "100px" }}
                mb={4}
              />
            </Center>
            <StatNumber fontSize={{ base: "xl", md: "2xl" }}>20+</StatNumber>
            <StatLabel fontSize={{ base: "sm", md: "md" }}>
              Award Winning
            </StatLabel>
          </Stat>
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default StatisticsComponent;
