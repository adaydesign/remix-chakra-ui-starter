import { Flex, Text } from '@chakra-ui/react'
import { Link } from '@remix-run/react'

const Navbar = () => {
  return (
    <Flex as="footer"  w="full" bgColor="blue.400" color="white" py={6} px={3} shadow="lg" 
    position="fixed" top="0" zIndex={2}>
        <Text as={Link} to="/" fontWeight="bold">LOGO</Text>
    </Flex>
  )
}

export default Navbar