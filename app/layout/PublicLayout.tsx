import { Flex } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Footer, Main, Navbar } from "~/components/layout"

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex direction="column" w="full">
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Flex>
  )
}

export default PublicLayout
