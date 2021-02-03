import React, { useState } from "react"
import {
    Nav,
    Container,
    Logo,
    YellowContainer,
    Item,
    Icon,
    Toggle,
} from "./styled"
import { Link } from "gatsby"
import {
    FaBars,
    FaGithub,
    FaRss,
    FaMastodon
} from "react-icons/fa"

const Header = () => {
    const [isMenuCollapsed, setMenuCollapsed] = useState(true)

    function toggleMenu() {
        setMenuCollapsed(!isMenuCollapsed)
    }

    return (
        <Nav>
            <Container>
                <Logo>
                    <Link to="/">
                        Polar
                        <YellowContainer>Mutex</YellowContainer>
                    </Link>
                </Logo>
                <Item>
                    <Link to="/blog">
                        Blog
                    </Link>
                </Item>

                <Icon>
                    <a
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        href={"https://github.com/bryall"}
                    >
                        <FaGithub color="#FFFFFF" size="30" />
                    </a>
                </Icon>
                <Icon>
                    <a
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        href={"https://fosstodon.org/@polarmutex"}
                    >
                        <FaMastodon color="#FFFFFF" size="30" />
                    </a>
                </Icon>
                <Icon>
                    <a
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        href={"https://brianryall.xyz/rss.xml"}
                    >
                        <FaRss color="#E89D4B" size="30" />
                    </a>
                </Icon>
                <Toggle>
                    <FaBars />
                </Toggle>
            </Container>
        </Nav>
    )
}

export default Header
