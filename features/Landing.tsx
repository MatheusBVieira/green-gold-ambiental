import Link from "next/link"
import styled from "styled-components"

export default function Landing(props: any) {

  return (
    <HomeWrapper>
      <Title>
        <strong>Green Gold Ambiental</strong>, onde tecnologia e <br />inovação ambiental andam juntas 
      </Title>
      <Resumo>Oferecemos serviços de revegetação de taludes, aterros e áreas planas para prevenção e proteção do solo contra erosões e recuperação ambiental.</Resumo>
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
    border-radius: 8px;
  }
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 60px;
  text-align: center;
`

const Resumo = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  max-width: 717px;
  text-align: center;
`