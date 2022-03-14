import { transparentize } from "polished"
import styled from "styled-components"
import SmallRightArrowText from "../components/SmallRightArrowText"


export default function PorQue(props: any) {
    return (
        <Wrapper>
            <Content>
                <Subtitle>Por que Green Gold Ambiental<br /> é a melhor do mercado</Subtitle>
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

    background-image: url('/images/backgroundWhy.svg');
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    height: 525px;
    width: 970px;

    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: ${p => transparentize(0.2, p.theme.primaryBackground)};
`

const TextWrapper = styled.div`
    height: 288px;
`

const Subtitle = styled.h2`
    margin-top: 42px;
    padding-bottom: 32px;

    color: ${p => p.theme.primaryForeground};

    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
`