// PointOfSaleComponent.js
import {
  Box,
  Text,
  Button,
  Image,
  Circle,
  Flex,
  Center,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      justifyContent={"Center"}
      alignContent={"center"}
      py={10}
      px={6}
      bgGradient="linear(to-r, #FDF7C3, #DFCCFB)"
    >
      <Flex justifyContent={"Center"} alignContent={"center"}>
        <Flex
          h={"500px"}
          flexDir={"column"}
          alignContent={"center"}
          justifyContent={"center"}
          px={"50px"}
        >
          <Text
            fontSize="xs"
            fontWeight="semibold"
            mb={2}
            color={"#52D3D8"}
            textAlign="left"
          >
            Free Forever For All Users.
          </Text>
          <Text
            fontSize="5xl"
            fontWeight="bold"
            color="purple.500"
            textAlign="left"
            lineHeight="1.2"
          >
            <h1 style={{ fontSize: "80px" }}>
              Easy-to-use
              <br />
              Point of Sale
            </h1>
          </Text>
          <Text maxW="md" mx="auto" mb={6} fontSize={"18px"} textAlign="left">
            You may start selling in a matter of minutes and easy to use.
            Appropriate for all devices.
          </Text>

          <Button colorScheme="pink" mb={4} w={"200px"} h={"50px"}>
            Start Free Trial
          </Button>
        </Flex>
        <Circle
          size="450px"
          px={"10px"}
          bgGradient="linear( #F1EAFF, #BEADFA, #F1EAFF)"
        >
          <Image
            src="/img/hero_img.png"
            alt="Point of Sale"
            boxSize="300px"
            mx="auto"
          />
        </Circle>
      </Flex>
    </Flex>
  );
}
