import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/Navbar/Navbar";

export const PageLayout = ({ children }) => {
  //  this hook is used to get the current location of the page
  const { pathname } = useLocation();

  /* const authUser = useAuthStore(state => state.user);
     Instead of useAuthStore() - Will use useAUthState hook from Firebase authentication hooks to get the user
  - 'user' will be null if not authenticated
  */
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;

  // navbar should not be shown on auth page (since we have login/signup forms there) and when user is not logged in
  const canRenderNavbar = !user && !loading && pathname !== "/auth";
  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner />;

  return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}>
      {/* Side bar on the left ( containing Icons and Link to particualr pages) NOT on Auth page */}
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* Navbar */}
      {canRenderNavbar ? <Navbar /> : null}

      {/* Page content on the right - flex=1 takes the reamining part 100%-70px and 100%-240px */}
      {/* show the content of other routes -> Get the children as the props */}
      {/* children will be the Route you are on - say homepage or auth, etc */}

      <Box
        flex={1}
        w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
};

const PageLayoutSpinner = () => {
  return (
    <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
      <Spinner size='xl' />
    </Flex>
  );

}
