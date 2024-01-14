import React from "react";
import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Image,
  Center,
} from "@chakra-ui/react";
// Import your icons from any icon library you prefer
import { FaStore, FaUsers, FaStar, FaAward } from "react-icons/fa";

const StatisticsComponent = () => {
  return (
    <Center bgGradient="linear(to bottom, #E9D8FB, #EDF2F7)">
      <Box
        width={"75%"}
        bgGradient="linear(to-r, purple.300, purple.600)"
        p={10}
        borderRadius="full"
        color="white"
        d="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <StatGroup>
          <Stat textAlign="center">
            <Center>
              <Image as={FaStore} boxSize="50px" mb={4} />
            </Center>
            <StatNumber>320+</StatNumber>
            <StatLabel>Retail Stores</StatLabel>
          </Stat>
          <Stat textAlign="center">
            <Center>
              <Image as={FaUsers} boxSize="50px" mb={4} />
            </Center>{" "}
            <StatNumber>92k</StatNumber>
            <StatLabel>Customers</StatLabel>
          </Stat>
          <Stat textAlign="center">
            <Center>
              <Image as={FaStar} boxSize="50px" mb={4} />
            </Center>{" "}
            <StatNumber>5k</StatNumber>
            <StatLabel>Positive Ratings</StatLabel>
          </Stat>
          <Stat textAlign="center">
            <Center>
              <Image as={FaAward} boxSize="50px" mb={4} />
            </Center>{" "}
            <StatNumber>20+</StatNumber>
            <StatLabel>Award Winning</StatLabel>
          </Stat>
        </StatGroup>
      </Box>
    </Center>
  );
};

export default StatisticsComponent;
