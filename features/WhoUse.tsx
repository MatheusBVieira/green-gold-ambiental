import styled from "styled-components";
import InfoContent from '../components/InfoContent'
import RightArrowText from "../components/RightArrowText";
import QuemUsaImage from '../public/images/WhoUse.image'

export default function WhoUse(props: any) {
    return (
        <InfoContent
            backgroundColor="default"
            height={100}
            leftStyle={Left}
            left={
                <WrapperLeft>
                    <Title><strong>Quem usa</strong> <br />hidrossemeadura?</Title>
                    <ImageContent>
                        <QuemUsaImage />
                    </ImageContent>
                </WrapperLeft>
            }
            rightStyle={Right}
            right={
                <>
                    <RightArrowText text="Empresas de terraplanagem" />
                    <RightArrowText text="Empresas de engenharia de contenção" />
                    <RightArrowText text="Obras de empreendimentos imobiliários, condomínios e urbanizadoras" />
                    <RightArrowText text="Mineiradoras em geral (pequenas e grandes)" />
                    <RightArrowText text="Empresas de paisagismo e grameiras" />
                    <RightArrowText text="Construtoras de infraestrutura (rodvias, ferrovias e industrias)" />
                    <RightArrowText text="Empresas de serviços de manutenção de rodoviaria" />
                    <RightArrowText text="Concessionarias de rodovias" />
                    <RightArrowText text="Empresas de logistica ferroviária" />
                    <RightArrowText text="Engenheiros ambientais, biológos e florestais" />
                    <RightArrowText text="Autônomos" />
                </>
            }>
        </InfoContent>
    );
}

const Left = styled.div`
    width: 100%;
    display: flex;
    margin: auto 0 auto 0;
    padding-right: 46px;
    flex-direction: column;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

`

const Title = styled.h2`
    font-weight: 600;
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 48px;

    @media only screen and (max-width: 500px) {
        font-size: 24px;
        line-height: 29px;

        margin: 70px 0 38px 16px;
        margin-top: 70px;
        margin-bottom: 38px;
    }
`

const ImageContent = styled.div`
    @media only screen and (max-width: 500px) {
        display: none;
    }
`


const WrapperLeft = styled.div`
    width: 565px;
    align-self: flex-end;
`

const Right = styled.div`
    margin-top: 103px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 500px) {
        margin-top: 0px;
    }
`