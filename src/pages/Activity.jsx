import { Box, Heading, VStack, Input, Button } from "@chakra-ui/react";

const Activity = () => {
  return (
    <Box p={4}>
      <Heading mb={6}>Log Workout</Heading>
      <VStack spacing={4} align="stretch">
        <Input placeholder="Workout Type" />
        <Input placeholder="Duration (minutes)" />
        <Input placeholder="Calories Burned" />
        <Button colorScheme="blue">Log Activity</Button>
      </VStack>
    </Box>
  );
};

export default Activity;