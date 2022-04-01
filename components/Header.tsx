import styled from "styled-components";
import {transparentize} from "polished";
import { HEADER_HEIGHT } from "../_constants";
import NavBar from "./NavBar";
import Link from "next/link";
import { HTMLAttributes } from "react";
import Logo from "../public/images/Logo.image";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    scroll: boolean
}

export default function Header({scroll, ...props} : HeaderProps) {
    return (
        <Wrapper id="header" {...props} scroll={scroll} >
            <Container>
                <Link href="/"><Logo /></Link>
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

        &:last-child {
            margin-right: 0;
            
            border: 2px solid ${p => p.scroll ? p.theme.primaryForeground : p.theme.attentionForeground};;
            padding: 8px 16px;
            border-radius: 8px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    margin: auto;
    height: 100%;

    svg {
        cursor: pointer;
    }
`