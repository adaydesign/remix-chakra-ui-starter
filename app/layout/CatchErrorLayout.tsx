import { Center, Flex, Icon, Link, Spacer, Text } from "@chakra-ui/react"
import { Footer, Main, Navbar } from "~/components/layout"
import { BsFillXCircleFill } from "react-icons/bs";
import { useRouteError, isRouteErrorResponse, Link as ReactLink } from "@remix-run/react";

const CatchErrorLayout = () => {
    const error = useRouteError();
    let errorStatus = "Something went wrong."
    let errorMessage = "Unknown error";

    // when true, this is what used to go to `CatchBoundary`
    if (isRouteErrorResponse(error)) {
        errorStatus = `${error.status} - ${error.statusText}`
        errorMessage = error.data
    }

    return (
        <Flex direction="column" w="full" minH="100vh">
            <Navbar />
            <Main>
                <Center w="full" h="80vh">
                    <Flex direction="column" w="fit-content" align="center">
                        <Icon as={BsFillXCircleFill} boxSize="150px" color="gray.300" mb={6} />
                        <Text fontSize="40px" color="gray.800">{errorStatus}</Text>
                        <Text fontSize="20px" color="gray.500">{errorMessage}</Text>
                        <Text color="gray.800" mt={3}><Link as={ReactLink} to="/">กลับสู่หน้าแรก</Link></Text>
                    </Flex>
                </Center>
            </Main>
            <Footer />
        </Flex>
    )
}

export default CatchErrorLayout