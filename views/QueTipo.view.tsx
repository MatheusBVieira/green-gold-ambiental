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
                    <Title>Que <strong>tipo</strong> de <br /> hidrossemeadura você <br/>procura?</Title>
                    <Paragraph><strong>Verdemax</strong> tecnologia e perfomance para revegetação de áreas críticas e alta inclinação.</Paragraph>
                    <Paragraph><Verdeflex>Verdeflex</Verdeflex> o melhor custo benficio para a revegetação de áreas difíceis e inclinações moderadas</Paragraph>
                    <Paragraph><Verdeplan>Verdeplan</Verdeplan> solução eficiente e conômica de solos preparados e áreas planas</Paragraph>
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
`

const Verdeflex = styled.strong`
    color: #66BB6A
`

const Verdeplan = styled.strong`
    color: #98EE99
`

const Left = styled.div`
    margin: auto auto;
`

const Right = styled.div`
    margin-top: 70px;
    display: flex;
`