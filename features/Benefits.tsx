import styled from "styled-components";
import CheckedText from "../components/CheckedText";
import InfoContent from "../components/InfoContent";
import useWindowDimensions from "../utils/WindowDimensions";

export default function Benefits(props: any) {

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
                    <CheckedText text="Custo-benefício mais vantajoso em relação a sistemas convencionais" /> 
                    <CheckedText text="Eliminação rápida de riscos de erosão" />
                    <CheckedText text="Aderência total à superfície sem quaisquer folgas" />
                </>
            }>
            <Subtitle><Attention>Beneficios</Attention> da hidrossemeadura?</Subtitle>
        </InfoContent>
    );
}

const Subtitle = styled.h2`
    padding-top: 82px;
    padding-bottom: 76px;

    color: ${p => p.theme.primaryForeground};
    font-weight: 600;
    font-size: 40px;
    line-height: 47px;
    text-align: center;

    @media only screen and (max-width: 500px) {
        max-width: 200px;
        margin: 0 auto;
        padding-top: 30px;
        padding-bottom: 26px;

        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
    }
`

const Attention = styled.strong`
    color: ${p => p.theme.attentionPrimaryForeground};
`

const WrapperLeft = styled.div`
    width: 565px;
    height: 100%;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 500px) {
        width: 100%;

        justify-content: flex-start;
        gap: 24px;


    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0 auto 0;
    height: 386px;

    @media only screen and (max-width: 500px) {
        height: auto;
        margin: 0 auto;
    }
`

const Right = styled.div`
    margin: auto 0 auto 5%;
    height: 386px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 500px) {
        justify-content: flex-start;
        gap: 24px;
        margin: 24px auto 0 auto;
    }
`