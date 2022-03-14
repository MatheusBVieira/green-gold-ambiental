import { transparentize } from "polished";
import { useState } from "react";
import styled from "styled-components";
import SmallDownArrow from "../public/icons/SmallDownArrow.icon";

export default function AskBox(props: any) {
    const [isHidden, setIsHidden] = useState(true)

    return (
        <Wrapper onClick={() => setIsHidden(!isHidden)} isHidden={isHidden}>
            <TextIconWrapper>
                <Text isHidden={isHidden}>{props.children}</Text>
                <IconWrapper>
                    <SmallDownArrow />
                </IconWrapper>
            </TextIconWrapper>
            <ResponseWrapper isHidden={isHidden}>
                <Paragraph isHidden={isHidden}>{props.hiddenText }</Paragraph>
            </ResponseWrapper>
        </Wrapper>
    );

}

const Wrapper = styled.div<{ isHidden: boolean }>`
    width: 800px;
    border-bottom: ${p => p.isHidden ? "2px solid #66BB6A" : ""};
    cursor: pointer;
    margin-bottom: 64px;
`
const TextIconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
`

const Text = styled.span<{ isHidden: boolean }>`
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;

    color: ${p => p.isHidden ? "#000" : transparentize(0.3, p.theme.attentionForeground)};

    transition: all .3s linear;
`

const IconWrapper = styled.div`
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ResponseWrapper = styled.div<{ isHidden: boolean }>`
    opacity: ${p => p.isHidden ? 0 : 1};
    visibility: ${p => p.isHidden ? "hidden" : "visible"};
    height: ${p => p.isHidden ? 0 : "auto"};

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${p => p.theme.primaryBackground};

    transition: all .5s linear;
`

const Paragraph = styled.p<{ isHidden: boolean }>`
    padding: 29px 60px 40px 40px;
    color: ${p => p.theme.primaryForeground};
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;

    visibility: ${p => p.isHidden ? "hidden" : "visible"};
`