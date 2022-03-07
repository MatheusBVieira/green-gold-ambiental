import styled from "styled-components";

export default function InfoContent(props: any) {
    return (
        <Wrapper>
            <Top>
                {props.children}
            </Top>
            <LR>
                <Left>
                    {props.left}
                </Left>
                <Right>
                    {props.right}
                </Right>
            </LR>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 693px;
`

const Top = styled.div`
    
`

const LR = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
`


const Left = styled.div`
    margin: auto auto;

`

const Right = styled.div`
    margin-top: 180px;
    display: flex;

`

