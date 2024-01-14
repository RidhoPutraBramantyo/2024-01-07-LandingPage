import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  IconButton,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const NewsCard = ({ admin, title, date, imageUrl }) => {
  return (
    <Box
      bgColor={"white"}
      maxW="250px"
      minW="200px"
      minH="300px"
      borderRadius="lg"
      overflow="hidden"
      position="relative"
    >
      <Box w={"250px"} h={"200px"} borderWidth="1px" borderRadius="lg">
        <Image src={imageUrl} alt={`Image for ${title}`} />
      </Box>

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text fontSize="sm" color="gray.500" mr={2}>
            {admin}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {date}
          </Text>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>

        <Text mt={2}>Read More →</Text>
      </Box>
    </Box>
  );
};

const ScrollableNews = () => {
  const scrollContainerRef = useRef();
  const [newsItems, setNewsItems] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      setIsDragging(true);
      setStartX(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const distance = e.touches[0].clientX - startX;
    scrollContainerRef.current.scrollLeft -= distance;
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/news.json");
        const data = await response.json();
        setNewsItems(data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, []);

  const scroll = (scrollOffset) => {
    scrollContainerRef.current.scrollLeft += scrollOffset;
  };

  return (
    <Box
      bgColor={"#FDF4F5"}
      position="relative"
      overflow="hidden"
      w="100%"
      p={5}
    >
      <Heading size="lg" textAlign="center" mb={6}>
        Point of sale latest news
      </Heading>
      <Flex
        ref={scrollContainerRef}
        overflowX="auto"
        gap="20px"
        p={2}
        w="full"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
      >
        {newsItems.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </Flex>
      <IconButton
        aria-label="Scroll left"
        icon={<ChevronLeftIcon />}
        position="absolute"
        left="0"
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={() => scroll(-200)}
      />
      <IconButton
        aria-label="Scroll right"
        icon={<ChevronRightIcon />}
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={() => scroll(200)}
      />
    </Box>
  );
};

export default ScrollableNews;
