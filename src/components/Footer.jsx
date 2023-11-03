import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}
        mt="12">
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Welcome to CoinTrack360 - Your Trusted Source for Cryptocurrency Information.
            CoinTrack360 is to provide you with accurate, up-to-date, and comprehensive information about the world of cryptocurrencies.

            Go to coins section to check details for each Cryptocurrency listed there.

          </Text>
        </VStack>

        
      </Stack>
    </Box>
  );
};

export default Footer;
