import { TextareaHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    text: string;
}

export default function TextArea(props: InputProps) {
    return (
        <Wrapper>
            <Text>{props.text}</Text>
            <TextA {...props} placeholder={props.placeholder} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    flex-direction: column;

    width: 570px;
    height: 158px;

    @media only screen and (max-width: 500px) {
        width: 256px;
        height: 76px;
    }
`

const Text = styled.span`
    max-width: 500px;
    
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${p => p.theme.primaryForeground};

    @media only screen and (max-width: 500px) {
        font-weight: 600;
        font-size: 10px;
        line-height: 13px;

        margin-bottom: 3px;
    }
`

const TextA = styled.textarea`
    padding: 18px;
    width: 570px;
    height: 124px;
    resize: none;
    border: 0 none;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    border-radius: 10px;

    @media only screen and (max-width: 500px) {
        width: 256px;
        height: 60px;

        font-weight: 500;
        font-size: 10px;
        line-height: 12px;

        border-radius: 5px;
    }
`