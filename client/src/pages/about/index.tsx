import React from "react";
import { Button } from '@chakra-ui/react'

const About = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <>
            <Button>TEST API</Button>
            <p>{!data ? "Loading..." : data}</p>
        </>
    );
};

export default About;