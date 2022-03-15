import styled from "styled-components";

export default function Select(props: any) {
    return (
        <Wrapper>
            <Text>{props.text}</Text>
            <TextArea placeholder={props.placeholder} />
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
`

const Text = styled.span`
    max-width: 500px;
    
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${p => p.theme.primaryForeground};
`

const TextArea = styled.textarea`
    padding: 18px;
    width: 570px;
    height: 124px;
    resize: none;
    border: 0 none;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
`