import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
    Box,
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'

import Home from "../pages/home";
import Users from "../pages/users";
import About from "../pages/about";
import { ColorModeSwitcher } from "../ColorModeSwitcher";


const AppRouter = () => (
    <BrowserRouter>
        <Flex>
            <Box flex='1' >
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink><Link to="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink><Link to="/about/">About</Link></BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem >
                        <BreadcrumbLink><Link to="/users/">Users</Link></BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>


        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/" element={<About />} />
            <Route path="/users/" element={<Users />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;