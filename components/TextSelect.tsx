import styled from "styled-components";
import Select from 'react-select'
import { transparentize } from "polished";
import useWindowDimensions from "../utils/WindowDimensions";

interface InputProps {
    onChange: any;
    text: string;
    options: { value: string; label: string; }[];
    name: string;
    isValid: boolean;
}

export default function TextSelect(props: InputProps) {
    const { width } = useWindowDimensions();

    const colourStyles = {
        menu: (provided: any, state: any) => ({
            ...provided,
            background: '#E5E5E5',
        }),
        control: (styles: any) => ({ ...styles, backgroundColor: '#fff', }),
        option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
            const color = isSelected ? '#338A3E' : isFocused ? '#338A3E' : transparentize(0.6, '#000');
            return { ...styles, backgroundColor: 'none', color: color, fontWeight: 'bold' };
        },
        input: (styles: any) => ({ ...styles, color: '#000' }),
        placeholder: (styles: any) => ({
            ...styles,
            color: '#a9a9a9',
            fontSize: '20px',
            padding: '20px 0 20px 8px',
            fontWeight: 500,
        }),
        singleValue: (styles: any, { data }: any) => {
            return {
                ...styles,
                color: 'black',
                fontSize: '20px',
                padding: '20px 0 20px 8px',
                fontWeight: 500,
            };
        },
    };

    const colourStylesMob = {
        menu: (provided: any, state: any) => ({
            ...provided,
            background: '#E5E5E5',
        }),
        control: (styles: any) => ({ ...styles, backgroundColor: '#fff', }),
        option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
            const color = isSelected ? '#338A3E' : isFocused ? '#338A3E' : transparentize(0.6, '#000');
            return { ...styles, backgroundColor: 'none', color: color, fontWeight: 'bold' };
        },
        input: (styles: any) => ({ ...styles, color: '#000' }),
        placeholder: (styles: any) => ({
            ...styles,
            color: '#a9a9a9',
            fontSize: '10px',
            padding: '9px 0 9px 0',
            fontWeight: 500,
        }),
        singleValue: (styles: any, { data }: any) => {
            return {
                ...styles,
                color: 'black',
                fontSize: '10px',
                padding: '9px 0 9px 0',
                fontWeight: 500,
            };
        },
    };

    if (!props.isValid) {
        colourStyles.control = (styles: any) => ({ ...styles, borderBottom: '2px solid red', });
    }
        
    return (
        <Wrapper>
            <Text>{props.text}</Text>
            <Select
                onChange={props.onChange}
                styles={width > 500 ? colourStyles : colourStylesMob}
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

    @media only screen and (max-width: 500px) {
        width: 300px;
        height: 46px;

        div:first-child {
            width: 300px;
        }
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