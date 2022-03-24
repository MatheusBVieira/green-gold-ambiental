import { ReactNode } from "react";
import styled from "styled-components";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../_constants";

interface ContentProps {
    children: ReactNode;
}

export default function Content(props: ContentProps) {
    return <Wrapper>
        <Container>{props.children}</Container>
    </Wrapper>
}

const Wrapper = styled.div`
    min-height: calc(100vh - ${HEADER_HEIGHT}px); 
`;

const Container = styled.div`
    width: 100%;
    margin: auto;
`;