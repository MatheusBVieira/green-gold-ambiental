import styled from "styled-components";
import InfoContent from '../components/InfoContent'
import RightArrowText from "../components/RightArrowText";
import QuemUsaImage from '../public/images/QuemUsa.image'

export default function QuemUsa(props: any) {
    return (
        <InfoContent
            backgroundColor="default"
            height={100}
            leftStyle={Left}
            left={
                <>
                    <Title><strong>Quem usa</strong> <br />hidrossemeadura?</Title>
                    <QuemUsaImage />
                </>
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

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

`

const Title = styled.h2`
    font-weight: 600;
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 48px;
`

const Left = styled.div`
    margin: 103px auto 0 auto;
`

const Right = styled.div`
    margin-top: 103px;
    display: flex;
    flex-direction: column;
`