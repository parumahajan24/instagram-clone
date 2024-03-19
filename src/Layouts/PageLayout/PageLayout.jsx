import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

export const PageLayout = ({ children }) => {
  {
    /*This is give me the pathname, i.e the page path you are on */
  }
  const { pathname } = useLocation();
  return (
    <Flex>
      {/* Side bar on the left ( containing Icons and Link to particualr pages) NOT on Auth page */}
      {pathname !== "/auth" ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* Page content on the right - flex=1 takes the reamining part 100%-70px and 100%-240px */}
      {/* show the content of other routes -> Get the children as the props */}
      {/* children will be the Route you are on - say homepage or auth, etc */}

      <Box flex={1} w={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};
