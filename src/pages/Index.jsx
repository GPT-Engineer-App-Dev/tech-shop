import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
        <Box>
          <Text fontSize="xl" fontWeight="bold">ElectroShop</Text>
        </Box>
        <Spacer />
        <HStack spacing={8}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={8}>Your one-stop shop for the latest electronics</Text>
        <Image src="/images/featured-product.jpg" alt="Featured Product" mx="auto" boxSize="300px" objectFit="cover" />
      </Box>

      {/* Product Grid */}
      <Box as="section" py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>Our Products</Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
          <GridItem bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="/images/product1.jpg" alt="Product 1" />
            <Box p={4}>
              <Text fontWeight="bold">Product 1</Text>
              <Text>$299.99</Text>
            </Box>
          </GridItem>
          <GridItem bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="/images/product2.jpg" alt="Product 2" />
            <Box p={4}>
              <Text fontWeight="bold">Product 2</Text>
              <Text>$399.99</Text>
            </Box>
          </GridItem>
          <GridItem bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="/images/product3.jpg" alt="Product 3" />
            <Box p={4}>
              <Text fontWeight="bold">Product 3</Text>
              <Text>$499.99</Text>
            </Box>
          </GridItem>
          <GridItem bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="/images/product4.jpg" alt="Product 4" />
            <Box p={4}>
              <Text fontWeight="bold">Product 4</Text>
              <Text>$599.99</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
            </HStack>
            <Spacer />
            <HStack spacing={4}>
              <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;