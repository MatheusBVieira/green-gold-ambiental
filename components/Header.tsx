import styled from "styled-components";
import {transparentize} from "polished";
import { HEADER_HEIGHT } from "../_constants";
import NavBar from "./NavBar";
import Link from "next/link";
import { HTMLAttributes } from "react";
import Burger from "./Burger";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    scroll: boolean
}

export default function Header({scroll, ...props} : HeaderProps) {
    return (
        <Wrapper id="header" {...props} scroll={scroll} >
            <Container>
                <Link href="/">
                    <LogoContent scroll={scroll} />
                </Link>
                <Burger />
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

            @media (max-width: 768px) {
                border: none;
                box-shadow: none;
            }
        }
    }

    @media (max-width: 768px) {
        background-color: ${p => p.scroll ? p.theme.headerBackground : "transparent"};
        box-shadow: none;

        a {
            color: ${p => p.theme.headerForeground};
        }

        svg {
            margin-left: 16px;
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

const LogoContent = styled.div<{ scroll: boolean }>`
    width: 144px;
    height: 70px;

    background-image: ${p => p.scroll ? 'url("/images/LogoWhite.svg")' : 'url("/images/LogoBlack.svg")' };
    background-repeat: no-repeat;

    @media only screen and (max-width: 500px) {
        width: 100px;
        height: 48px;
        margin-left: 16px;
    }
`