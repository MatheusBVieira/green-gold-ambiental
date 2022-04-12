import styled from "styled-components";
import InfoContent from '../components/InfoContent'
import OQueEHidrossemeadura from '../public/images/WhatIs.image'

export default function WhatIs(props: any) {
    return (
        <Wrapper>
            <InfoContent
                backgroundColor="default"
                backgroundNone={true}
                height={100}
                leftStyle={Left}
                left={ 
                    <OQueEHidrossemeadura />
                }
                rightStyle={Right}
                right={
                    <RightContent>
                        <Title>O que é <br /><strong>hidrossemeadura?</strong></Title>
                        <Paragraph>A Hidrossemeadura é um processo de plantio por jateamento de uma solução de alta viscosidade contendo Sementes, Fertilizantes, Mulch de Fibra de Madeira com Fixadores e Aditivos. Esta solução é aplicada por hidrojateamento no solo onde fica aderida e possibilita a germinação das sementes e desenvolvimento da vegetação em todos os tipos de solo. </Paragraph>
                    </RightContent>
                }>
            </InfoContent>
        </Wrapper>    
    );
}

const Wrapper = styled.div`
    background-size: cover;
`

const RightContent = styled.div`
    width: 100%;
`

const Title = styled.h2`
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;

    @media only screen and (max-width: 500px) {
        font-size: 24px;
        line-height: 29px;

        padding-left: 16px;
        color: ${p => p.theme.pageForeground};
    }
`

const Paragraph = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;

    margin-top: 22px;
    margin-left: 40px;

    width: 507px;
    height: 269px;

    @media only screen and (max-width: 500px) {
        width: 86%;
        height: 373px;

        font-weight: 600;
        font-size: 20px;
        line-height: 36px;

        margin: 36px auto 0 auto;
        color: ${p => p.theme.pageForeground};
    }
`

const Left = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: auto 0 auto 0;
    padding-right: 172px;

    @media only screen and (max-width: 500px) {
        display: none;
    }
`

const Right = styled.div`
    margin-top: 180px;
    display: flex;

    @media only screen and (max-width: 500px) {
        margin-top: 90px;
    }
`