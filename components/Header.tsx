import styled from "styled-components";
import {transparentize} from "polished";
import { HEADER_HEIGHT } from "../_constants";
import NavBar from "./NavBar";
import Link from "next/link";

export default function Header(Props: any) {
    return (
        <Wrapper>
            <Container>
                <Link href="/">Logo</Link>
                <NavBar />
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: ${p => p.theme.headerBackground};
    color: ${p => p.theme.headerForeground};
    box-shadow: 0 3px 10px ${p => transparentize(0.9, p.theme.pageForeground)};

    width: 100%;
    height: ${HEADER_HEIGHT}px;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    height: 100%;

    a {
        color: ${p => p.theme.headerForeground};
        text-decoration: none;
    }
`