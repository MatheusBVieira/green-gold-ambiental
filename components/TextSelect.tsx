import { SelectHTMLAttributes } from "react";
import styled from "styled-components";
import Select from 'react-select'
import { transparentize } from "polished";

interface InputProps {
    text: string;
    options: { value: string; label: string; }[];
    name: string;
}

export default function TextSelect(props: InputProps) {
    const colourStyles = {
        menu: (provided: any, state: any) => ({
            ...provided,
            background: '#E5E5E5',
        }),
        control: (styles: any) => ({ ...styles, backgroundColor: '#fff' }),
        option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
            const color = isSelected ? '#338A3E' : isFocused ? '#338A3E' : transparentize(0.6, '#000');
            return { ...styles, backgroundColor: 'none', color: color, fontWeight: 'bold' };
        },
        input: (styles: any) => ({ ...styles, color: '#000' }),
        placeholder: (styles: any) => ({
            ...styles,
            color: '#a9a9a9',
            fontSize: '24px',
            padding: '20px 0 20px 8px',
            fontWeight: 500,
        }),
        singleValue: (styles: any, { data }: any) => {
            return {
                ...styles,
                color: 'black',
                fontSize: '24px',
                padding: '20px 0 20px 8px',
                fontWeight: 500,
            };
        },
    };

    return (
        <Wrapper>
            <Text>{props.text}</Text>
            <Select
                styles={colourStyles}
                options={props.options}
                name={props.name}
                isSearchable={false}
            />
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

    div:first-child {
        width: 570px;
    }
`

const Text = styled.span`
    max-width: 500px;
    
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${p => p.theme.primaryForeground};
`