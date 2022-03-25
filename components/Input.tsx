import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    text: string;
}

export default function Input(props: InputProps) {
    return (
        <Wrapper>
            <Text>{props.text}</Text>
            <TextInput { ...props }/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    flex-direction: column;

    width: 570px;
    height: 98px;

    @media only screen and (max-width: 500px) {
        width: 256px;
        height: 46px;
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

const TextInput = styled.input`
    width: 570px;
    padding: 18px 0 18px 16px;

    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    border-radius: 10px;

    @media only screen and (max-width: 500px) {
        width: 256px;
        padding: 9px 0 9px 8px;

        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        border-radius: 5px;
    }
`