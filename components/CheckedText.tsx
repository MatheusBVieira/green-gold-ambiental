import styled from "styled-components";
import Checked from "../public/icons/Checked.icon";

export interface InfoContentProps extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
}

export default function CheckedText(props: InfoContentProps) {
    return (
        <Wrapper>
            <Checked />
            <Text>{ props.text }</Text>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    align-content: flex-start;
`

const Text = styled.span`
    margin-left: 28px;
    max-width: 500px;
    
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${p => p.theme.primaryForeground};
`