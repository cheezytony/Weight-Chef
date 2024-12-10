import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const LandingPage: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <Text fontSize="md" fontWeight="bold" mb={4}>
        Weight Chef
      </Text>
      <Text fontSize="4xl" fontWeight="bold" mb={4}>
        Welcome to Weight Chef
      </Text>
      <Text fontSize="lg" mb={6}>
        Discover recipes tailored for you. Let's get started with personalized meal plans!
      </Text>
      <Button colorScheme="teal" size="lg" mb={4}>
        Get Started
      </Button>
    </Box>
  );
};

export default LandingPage;
