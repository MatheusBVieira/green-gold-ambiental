import styled from "styled-components";
import InfoContent from '../components/InfoContent'
import OQueEHidrossemeadura from '../public/images/OQueE.image'
import QueTipos from "../public/images/QueTipos.image";

export default function QueTipo(props: any) {
    return (
        <InfoContent
            backgroundColor="default"
            height={100}
            leftStyle={Left}
            left={ 
                <QueTipos />
            }
            rightStyle={Right}
            right={
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

const Left = styled.div`
    margin: auto auto;
`

const Right = styled.div`
    margin-top: 180px;
    display: flex;
`