import styled from "styled-components";
import SmallRightArrow from "../public/icons/SmallRightArrow.icon";

export interface InfoContentProps extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
}

export default function SmallRightArrowText(props: InfoContentProps) {
    return (
        <Wrapper>
            <SmallRightArrow />
            <Text>{ props.text }</Text>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    align-content: flex-start;
    margin-bottom: 32px;
`

const Text = styled.span`
    margin-left: 8px;
    
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: ${p => p.theme.primaryForeground};
`