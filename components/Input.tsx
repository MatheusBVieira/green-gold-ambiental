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
`

const Text = styled.span`
    max-width: 500px;
    
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${p => p.theme.primaryForeground};
`

const TextInput = styled.input`
    width: 570px;
    padding: 20px 0 20px 18px;

    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
`