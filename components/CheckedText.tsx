import styled from "styled-components";
import Checked from "../public/icons/Checked.icon";

export interface InfoContentProps extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
}

export default function CheckedText(props: InfoContentProps) {
    return (
        <Wrapper>
            <IconWrapper>
                <Icon className="material-icons">check</Icon>
            </IconWrapper>
            <Text>{ props.text }</Text>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    align-content: flex-start;
`

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${p => p.theme.pageBackground};

    width: 32px;
    height: 32px;

    @media only screen and (max-width: 500px) {
        width: 24px;
        height: 24px;
    }
`

const Icon = styled.span`
    color: ${p => p.theme.attentionPrimaryForeground};
`

const Text = styled.span`
    margin-left: 28px;
    max-width: 500px;
    
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${p => p.theme.primaryForeground};

    @media only screen and (max-width: 500px) {
        max-width: 260px;

        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
    }
`