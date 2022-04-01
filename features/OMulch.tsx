import styled from "styled-components";
import Chart from "../components/Chart/Chart";
import InfoContent from "../components/InfoContent";

const FAKE_DATA = {
    labels: [['Fibra de', 'Côco'], ['Papel', 'Picado'], ['Mulch', 'Verdetec']],
    datasets: [
        {
            label: 'Retenção',
            data: [1100, 1400, 2400,],
            fill: true,
            backgroundColor: '#338A3E',
            borderColor: '#338A3E',
            borderWidth: 0.5,
            yAxisID: 'retention',
        }
    ]
}

export default function OMulch(props: any) {


    return (
        <InfoContent
            backgroundColor="primary"
            height={100}
            leftStyle={Left}
            left={
                <WrapperLeft>
                    <Subtitle>O <strong>mulch</strong></Subtitle>
                    <Paragraph>Mundo afora é unânime o uso do Mulch de Fibra de Madeira para hidrossemeadura. A madeira quando refinada em sistema pressurizado e em altas temperaturas produz uma fibra longa com grande área superficial e porosidade que a permite absorver e reter até 15 vezes seu peso em água.</Paragraph>
                </WrapperLeft>
            }
            rightStyle={Right}
            right={
                <>
                    <Chart
                        title="Retenção de Água"
                        data={FAKE_DATA}
                    />
                </>
            }>
        </InfoContent>
    );
}

const Subtitle = styled.h2`
    padding-bottom: 40px;

    color: ${p => p.theme.primaryForeground};
    font-weight: 600;
    font-size: 40px;
    line-height: 47px;
    text-align: left;

    @media only screen and (max-width: 500px) {
        margin-top:70px;
        
        text-align: center;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
    }
`

const Paragraph = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;

    max-width: 504px;
    margin-left: 30px;
    color: ${p => p.theme.primaryForeground};

    @media only screen and (max-width: 500px) {
        font-weight: 600;
        font-size: 16px;
        line-height: 30px;
        text-align: center;

        max-width: 326px;
        margin: 0 auto;
    }
`

const WrapperLeft = styled.div`
    width: 565px;
    align-self: flex-end;
    margin-right: 5%;

    @media only screen and (max-width: 500px) {
        margin: 0;
        width: 100%;
    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;

    margin: auto 0 auto 0;
`

const Right = styled.div`
    margin: auto 0 auto 5%;
    height: 436px;

    @media only screen and (max-width: 500px) {
        margin: 0 auto 0 auto;
        
    }
`