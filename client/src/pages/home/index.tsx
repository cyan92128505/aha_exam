import * as React from "react"
import {
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
} from "@chakra-ui/react"
import { Logo } from "../../Logo"

const Home = () => (
    <Box textAlign="center" fontSize="xl">
        <Grid minH="80vh" p={3}>
            <VStack spacing={8}>
                <Logo h="40vmin" pointerEvents="none" />
                <Text>
                    Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
                </Text>
                <Link
                    color="teal.500"
                    href="https://chakra-ui.com"
                    fontSize="2xl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Chakra
                </Link>
            </VStack>
        </Grid>
    </Box>
)


export default Home;