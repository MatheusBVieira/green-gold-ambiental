import styled from "styled-components";
import InfoContent from '../components/InfoContent'
import OQueEHidrossemeadura from '../public/images/OQueEHidrossemeadura'

export default function OQueE(props: any) {
    return (
        <InfoContent left={ 
            <OQueEHidrossemeadura />
        } right={
            <div>
                <Title>O que é <br /><strong>hidrossemeadura?</strong></Title>
                <Paragraph>A Hidrossemeadura é um processo de plantio por jateamento de uma solução de alta viscosidade contendo Sementes, Fertilizantes, Mulch de Fibra de Madeira com Fixadores e Aditivos. Esta solução é aplicada por hidrojateamento no solo onde fica aderida e possibilita a germinação das sementes e desenvolvimento da vegetação em todos os tipos de solo. </Paragraph>
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
`

const Paragraph = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;

    margin-top: 12px;
    margin-left: 40px;

    width: 498px;
    height: 269px;
`