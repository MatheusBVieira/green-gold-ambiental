import styled from "styled-components";
import InfoContent from '../components/InfoContent'
import TypesDsk from "../public/images/TypesDsk.image";
import TypesMob from "../public/images/TypesMob.image";

export default function WhatType(props: any) {
    return (
        <InfoContent
            backgroundColor="default"
            height={100}
            leftStyle={Left}
            left={ 
                <TypesDsk />
            }
            rightStyle={Right}
            right={
                <div>
                    <Title>Que <strong>tipo</strong> de <br /> hidrossemeadura você <br/>procura?</Title>
                    <Paragraph><strong>Verdemax</strong> tecnologia e perfomance para revegetação de áreas críticas e alta inclinação.</Paragraph>
                    <Paragraph><Verdeflex>Verdeflex</Verdeflex> o melhor custo benficio para a revegetação de áreas difíceis e inclinações moderadas</Paragraph>
                    <Paragraph><Verdeplan>Verdeplan</Verdeplan> solução eficiente e conômica de solos preparados e áreas planas</Paragraph>
                    <ImageRight>
                        <TypesMob />
                    </ImageRight>
                </div>
            }>
        </InfoContent>
    );
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const Title = styled.h2`
    font-weight: 600;
    font-size: 40px;
    line-height: 47px;

    @media only screen and (max-width: 500px) {
        font-size: 24px;
        line-height: 29px;
        margin-left: 16px;
    }
`

const Paragraph = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;

    margin-top: 30px;
    margin-left: 40px;

    width: 350px;
    height: 103px;

    &:nth-child(3) {
        margin-left: 133px;
    }

    strong {
        font-weight: 700;
    }

    @media only screen and (max-width: 500px) {
        font-size: 14px;
        line-height: 17px;

        width: 212px;
        height: 68px;
        margin-top: 28px;
        margin-left: 16px;

        &:nth-child(3) {
            margin-left: 150px;
        }
    }
`

const Verdeflex = styled.strong`
    color: #66BB6A
`

const Verdeplan = styled.strong`
    color: #98EE99
`

const Left = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 200px 0 auto 0;
    padding-right: 92px;

    @media only screen and (max-width: 500px) {
        display: none;
    }
`

const Right = styled.div`
    margin-top: 70px;
    display: flex;
`

const ImageRight = styled.div`
    display: none;

    @media only screen and (max-width: 500px) {
        display: block;

        margin-top: 30px;
        margin-left: 16px;
    }
`