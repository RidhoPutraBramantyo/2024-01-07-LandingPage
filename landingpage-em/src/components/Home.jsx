// PointOfSaleComponent.js
import { Box, Text, Button, Image, Circle, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="center"
      alignContent="center"
      py={10}
      px={{ base: 2, md: 6 }}
      bgGradient="linear(to-r, #FDF7C3, #DFCCFB)"
    >
      <Flex
        flexDir="column"
        alignContent="center"
        justifyContent="center"
        px={{ base: 4, md: "50px" }}
      >
        <Text
          fontSize={{ base: "sm", md: "xs" }}
          fontWeight="semibold"
          mb={2}
          color="#52D3D8"
          textAlign={{ base: "center", md: "left" }}
        >
          Free Forever For All Users.
        </Text>

        <Text
          fontSize={{ base: "2xl", md: "5xl" }}
          fontWeight="bold"
          color="purple.500"
          textAlign={{ base: "center", md: "left" }}
          lineHeight="1.2"
        >
          <h1 style={{ fontSize: "80px" }}>
            Easy-to-use
            <br />
            Point of Sale
          </h1>
        </Text>

        <Text
          maxW="md"
          mx="auto"
          mb={6}
          fontSize={{ base: "sm", md: "18px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          You may start selling in a matter of minutes and easy to use.
          Appropriate for all devices.
        </Text>

        <Button
          colorScheme="pink"
          mb={4}
          w={{ base: "100%", md: "200px" }}
          h={{ base: "50px", md: "50px" }}
        >
          Start Free Trial
        </Button>
      </Flex>

      <Circle
        display={{ base: "none", md: "block" }}
        size="450px"
        px={"10px"}
        bgGradient="linear( #F1EAFF, #BEADFA, #F1EAFF)"
      >
        <Image
          src="/img/hero_img.png"
          alt="Point of Sale"
          boxSize="450px"
          mx="auto"
        />
      </Circle>
    </Flex>
  );
}
