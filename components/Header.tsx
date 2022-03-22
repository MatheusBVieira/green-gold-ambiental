import styled from "styled-components";
import {transparentize} from "polished";
import { HEADER_HEIGHT } from "../_constants";
import NavBar from "./NavBar";
import Link from "next/link";
import { HTMLAttributes } from "react";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    scroll: boolean
}

export default function Header({scroll, ...props} : HeaderProps) {
    return (
        <Wrapper id="header" {...props} scroll={scroll} >
            <Container>
                <Link href="/">Logo</Link>
                <NavBar />
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div<{ scroll: boolean }>`
    background-color: ${p => p.scroll ? p.theme.headerBackground : "transparent"};
    box-shadow: 0 3px 10px ${p => p.scroll ? transparentize(0.9, p.theme.pageForeground) : "none"};
    width: 100%;
    height: ${HEADER_HEIGHT}px;
    z-index:10;

    position: fixed;
    top: 0;
    left: 0;

    transition: all .5s ease;

    a {
        color: ${p => p.scroll ? p.theme.headerForeground : p.theme.attentionForeground};
        text-decoration: none;
    }
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    height: 100%;
`