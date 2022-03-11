import Link from "next/link"
import styled from "styled-components"

export default function Landing(props: any) {

    return (<HomeWrapper>
        <Title>
            Bem-vindos a <strong>Green Gold Ambiental</strong>
        </Title>

        <Resumo>A <strong>GreenGoldAmbiental</strong> oferece serviços de revegetação de taludes, aterros e áreas planas para prevenção e proteção do solo contra erosões e recuperação ambiental.</Resumo>
        <Link href={"/contato"}>Peça o orçamento</Link>
    </HomeWrapper>
    );

}

const HomeWrapper = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 26px;

  background-image: url('/images/banner2.svg');
  background-size: cover;

  a {
    padding: 16px 32px;

    font-weight: 600;
    font-size: 18px;
    line-height: 21px;

    color: ${p => p.theme.headerForeground};
    background-color: ${p => p.theme.primaryBackground};
    text-decoration: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
`

const Resumo = styled.p`
  font-weight: 600;
  font-size: 24px;
  width: 640px;
  text-align: center;
`