import styled from "styled-components";
import InfoContent from '../components/InfoContent'
import OQueEHidrossemeadura from '../public/images/OQueE.image'

export default function OQueE(props: any) {
    return (
        <InfoContent
            backgroundColor="default"
            height={100}
            leftStyle={Left}
            left={ 
                <OQueEHidrossemeadura />
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

const Title = styled.h2`
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
`

const Paragraph = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;

    margin-top: 22px;
    margin-left: 40px;

    width: 507px;
    height: 269px;
`

const Left = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: auto 0 auto 0;
    padding-right: 172px;
`

const Right = styled.div`
    margin-top: 180px;
    display: flex;
`