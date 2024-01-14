import React, { useEffect, useState } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Heading,
  Center,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

const partners = [
  { name: "GRAPE", pathImage: "/img/client_1.svg" },
  { name: "LABFORK", pathImage: "/img/client_2.svg" },
  { name: "LAMPLINE", pathImage: "/img/client_3.svg" },
  { name: "LINEFLY", pathImage: "/img/client_4.svg" },
  { name: "ROSESUN", pathImage: "/img/client_5.svg" },
  { name: "HONEYBEE", pathImage: "/img/client_6.svg" },
];

const PartnerCard = ({ name, pathImage }) => {
  const [imageDataUrl, setImageDataUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + pathImage);
        const blob = await response.blob();
        const dataUrl = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
        setImageDataUrl(dataUrl);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [pathImage]);

  return (
    <Flex
      bg={useColorModeValue("purple.500", "purple.200")}
      color="white"
      borderRadius="lg"
      p={5}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign="center"
      boxShadow="md"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)" }}
    >
      {imageDataUrl ? (
        <img src={imageDataUrl} alt={name} style={{ maxWidth: "100%" }} />
      ) : (
        <div>Loading...</div>
      )}
    </Flex>
  );
};

const PartnersComponent = () => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")} p={10}>
      <Center mb={10}>
        <Heading size="xl">Who we partner with</Heading>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 6 }} spacing={10}>
        {partners.map((partner, index) => (
          <PartnerCard key={index} {...partner} />
        ))}
      </SimpleGrid>
      {/* Pagination or carousel indicators would go here */}
    </Box>
  );
};

export default PartnersComponent;
