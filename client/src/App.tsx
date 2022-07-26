import * as React from "react"
import {
  Box,
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import AppRouter from "./router/Route"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box p={4} pt={2}>
      <AppRouter />
    </Box>
  </ChakraProvider>
)
