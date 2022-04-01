import { transparentize } from "polished"
import styled from "styled-components"
import SmallRightArrowText from "../components/SmallRightArrowText"


export default function Why(props: any) {
    return (
        <Wrapper>
            <Content>
                <Subtitle>Por que Green Gold Ambiental é a <br /> melhor do mercado?</Subtitle>
                <TextWrapper>
                    <SmallRightArrowText text="Trabalhamos com sementes selecionadas e insumos de alta tecnologia"/>
                    <SmallRightArrowText text="Rigorosa entrega e atendimento de Cronograma"/>
                    <SmallRightArrowText text="Temos o melhor custo benefício do mercado de hidrossemeadura"/>
                    <SmallRightArrowText text="Somos movidos ao amor e respeito à natureza"/>
                    <SmallRightArrowText text="Atendimento ágil e qualificado"/>
                    <SmallRightArrowText text="Time técnico com engenheiros especislistas"/>
                </TextWrapper>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 728px;

    background-image: url('/images/backgroundWhyDsk.svg');
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 500px) {
        background-image: url('/images/backgroundWhyMob.svg');
        background-size: cover;
        background-repeat: no-repeat;
    }
`

const Content = styled.div`
    height: 496px;
    width: 970px;

    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: ${p => transparentize(0.2, p.theme.primaryBackground)};
    border-radius: 8px;

    @media only screen and (max-width: 500px) {
        height: 532px;
        width: 328px;
    }
`

const Subtitle = styled.h2`
    margin-top: 42px;
    padding-bottom: 32px;

    color: ${p => p.theme.primaryForeground};

    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    @media only screen and (max-width: 500px) {
        font-size: 18px;
        line-height: 22px;   
        
        padding-bottom: 24px;
    }
`

const TextWrapper = styled.div`
    height: 288px;
`
