import React, { useState } from "react"
import { Link } from "gatsby"
import {
    FaGithub,
    FaLinkedin,
    FaYoutube,
    FaBars,
    FaTimes,
    FaDiscord,
    FaPatreon,
    FaRss,
} from "react-icons/fa"
import style from "./header.module.less"

const Header = () => {
    const [isMenuCollapsed, setMenuCollapsed] = useState(true)

    function toggleMenu() {
        setMenuCollapsed(!isMenuCollapsed)
    }

    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <div className={style.title}>
                    <Link to={"/"}>
                        <h4>
                            Brian Ryall's Blog
                        </h4>
                    </Link>
                </div>
                <div className={style.menuButton}>
                    {isMenuCollapsed ? (
                        <FaBars size="30" onClick={toggleMenu} />
                    ) : (
                        <FaTimes size="30" onClick={toggleMenu} />
                    )}
                </div>
            </div>
            <div
                className={[
                style.list,
                isMenuCollapsed ? style.collapsedMenu : style.expandedMenu,
                ].join(" ")}
            >
                <ul>
                    <li>
                        <Link to={"/blog"}>Blog</Link>
                    </li>
                    <li>
                        <Link to={"/tags"}>Topics</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            href={"https://github.com/bryall"}
                        >
                            <FaGithub color="#FFFFFF" size="30" />
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            href={"https://brianryall.xyz/rss.xml"}
                        >
                            <FaRss color="#E89D4B" size="30" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
