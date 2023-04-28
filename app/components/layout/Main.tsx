import { Container, Flex, FlexProps } from "@chakra-ui/react"
import { Outlet } from "@remix-run/react"
import { ReactNode } from "react"

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      as="main"
      w="full"
      role="main"
      direction="column"
      flex="1"
      py="16"
      minH="calc(100vh - 205px)"
      my="auto"
    >
      {children}
    </Flex>
  )
}

export default Main
