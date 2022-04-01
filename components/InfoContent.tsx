import { ReactElement } from "react";
import styled, { StyledComponent } from "styled-components";

export interface InfoContentProps extends React.HTMLAttributes<HTMLDivElement> {
    backgroundColor: 'default' | 'primary';
    height: number;
    left: ReactElement<any, any>
    right: ReactElement<any, any>
    leftStyle: StyledComponent<any, any>
    rightStyle: StyledComponent<any, any>
    backgroundNone?: boolean
}

export default function InfoContent(props: InfoContentProps) {
    return (
        <Wrapper backgroundNone={props.backgroundNone} background={props.backgroundColor}>
            <Top>
                {props.children}
            </Top>
            <LR height={props.height}>
                <props.leftStyle>
                    {props.left}
                </props.leftStyle>
                <props.rightStyle>
                    {props.right}
                </props.rightStyle>
            </LR>
        </Wrapper>
    );
}

const Wrapper = styled.div<{ background: string, backgroundNone?: boolean }>`
    height: 728px;
    background-color: ${p => p.background === 'default' ? p.theme.pageBackground : p.theme.primaryBackground};

    @media only screen and (max-width: 500px) {
        height: 778px;

        ${p => p.backgroundNone && 'background: none;' }
        
    }
`

const Top = styled.div`
    
`

const LR = styled.div<{ height: number }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: ${p => p.height}%;

    @media only screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`
