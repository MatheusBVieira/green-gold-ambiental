import styled from "styled-components";
import RightArrow from "../public/icons/RightArrow.icon";

export interface InfoContentProps extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
}

export default function RightArrowText(props: InfoContentProps) {
    return (
        <Wrapper>
            <RightArrow />
            <Text>{ props.text }</Text>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    align-content: flex-start;
    margin-bottom: 16px;

    @media only screen and (max-width: 500px) {
        margin-left: 16px;
        margin-bottom: 20px;
    }
`

const Text = styled.span`
    margin-left: 28px;
    max-width: 440px;
    
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: ${p => p.theme.pageForeground};

    @media only screen and (max-width: 500px) {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;

        max-width: 304px;
        margin-left: 8px;
    }
`