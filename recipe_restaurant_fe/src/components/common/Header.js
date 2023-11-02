import React from "react";
import CommonNavbar, { Container, Button } from "./CommonNavbar";

const Header = () => {
    return (
        <Container>
            <Button to="/">오메~</Button>
            <CommonNavbar/>
        </Container>
    )
}

export default Header;