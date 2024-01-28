import React from "react";
import { Avatar, Heading, VStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
const greeting = "Hello, I am Humble Paraket!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground 
    style={{
      backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_1280.jpg")',
     
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: "100vh",
      width: "1520px",
      marginTop: "-70px",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
    <Avatar src="https://media.licdn.com/dms/image/D5603AQHYrkJQWhWgcA/profile-displayphoto-shrink_400_400/0/1702195160771?e=1711584000&v=beta&t=XPjGDSdQWYEU4lYy9OjjyijDyCRaO1OA9QyBhEwafP8" size='2xl'/>
    <VStack spacing={2} mt={6}>
      <Heading as="h3" size="md" noOfLines={1}>
        {"SUDHAKAR"}
      </Heading>
      <Heading as="h1" size="4xl" noOfLines={1}>
        {"AN UI/UX "}
      </Heading>
      <Heading as="h1" size="4xl" noOfLines={1}>
        {"DEVELOPER"}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
