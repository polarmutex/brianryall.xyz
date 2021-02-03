import React from "react";
import { GlobalStyle } from "./global_style";
import { Container, SquareContainer, TextContainer } from "./styled";
import Header from "./header"
import Footer from "./footer"
import "./theme.css"
import "./fonts.css"

interface Props {
    children?: any
}

const Layout = ({ children }: Props) => {

    return (
        <>
            <GlobalStyle />
            <Header />
            <Container>
                <SquareContainer>
                    <TextContainer>
                        {children}
                    </TextContainer>
                </SquareContainer>
            </Container>
        </>
    )
}

export default Layout
