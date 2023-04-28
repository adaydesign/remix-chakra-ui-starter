import { Box, Flex, Heading } from "@chakra-ui/react"
import { ProductCard, ProductGrid, products } from "~/components/products"

const Products = () => (
  <Flex
    direction="column"
    align="center"
    w="full"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <Heading mb={6}>Products</Heading>
    <ProductGrid>
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  </Flex>
)

export default Products
