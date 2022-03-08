import styled from "styled-components";
import CheckedText from "../components/CheckedText";
import InfoContent from "../components/InfoContent";

export default function Beneficios(props: any) {


    return (
        <InfoContent
            backgroundColor="primary"
            height={0}
            leftStyle={Left}
            left={
                <WrapperLeft>
                    <CheckedText text="Alto rendimento e produtividade" />
                    <CheckedText text="Germinação e controle de erosão com melhores resultados" />
                    <CheckedText text="Menor consumo na irrigação" />
                    <CheckedText text="Trabalho mais seguro, já que não carece do picoteamento do solo" />
                    <CheckedText text="Possibilidade de implantação em grande escala" />
                    <CheckedText text="Aplicação mais veloz e prática" />
                </WrapperLeft>
            }
            rightStyle={Right}
            right={
                <>
                    <CheckedText text="Germinação das sementes com mais rapidez" />
                    <CheckedText text="Vegetação com excelentes níveis de desenvolvimento em até 45 dias" />
                    <CheckedText text="Utilização de materiais 100% biodegradáveis" />
                    <CheckedText text="Eliminação rápida de riscos de erosão" />
                    <CheckedText text="Aderência total à superfície sem quaisquer folgas" />
                    <CheckedText text="Custo-benefício mais vantajoso em relação a sistemas convencionais;" /> 
                </>
            }>
            <Subtitle><Attention>Beneficios</Attention> da <br />hidrossemeadura?</Subtitle>
        </InfoContent>
    );
}

const Subtitle = styled.h2`
    padding-top: 82px;
    padding-bottom: 40px;

    color: ${p => p.theme.primaryForeground};
    font-weight: 600;
    font-size: 40px;
    line-height: 47px;
    text-align: center;
`

const Attention = styled.strong`
    color: ${p => p.theme.attentionPrimaryForeground};
`

const WrapperLeft = styled.div`
    width: 565px;
    align-self: flex-end;
`

const Left = styled.div`
    display: flex;
    flex-direction: column;

    margin: auto 0 auto 0;
`

const Right = styled.div`
    margin: auto 0 auto 5%;
`