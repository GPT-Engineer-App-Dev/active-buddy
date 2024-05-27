import { Box, Heading, VStack, Input, Button } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box p={4}>
      <Heading mb={6}>Profile</Heading>
      <VStack spacing={4} align="stretch">
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Age" />
        <Button colorScheme="blue">Save Profile</Button>
      </VStack>
    </Box>
  );
};

export default Profile;