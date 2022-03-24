import { ReactElement } from "react";
import styled, { StyledComponent } from "styled-components";

export interface InfoContentProps extends React.HTMLAttributes<HTMLDivElement> {
    backgroundColor: 'default' | 'primary';
    height: number;
    left: ReactElement<any, any>
    right: ReactElement<any, any>
    leftStyle: StyledComponent<any, any>
    rightStyle: StyledComponent<any, any>
}

export default function InfoContent(props: InfoContentProps) {
    return (
        <Wrapper background={props.backgroundColor}>
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

const Wrapper = styled.div<{ background: string }>`
    height: 728px;
    background-color: ${p => p.background === 'default' ? p.theme.pageBackground : p.theme.primaryBackground};
`

const Top = styled.div`
    
`

const LR = styled.div<{ height: number }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: ${p => p.height}%;
`
