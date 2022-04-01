import Link from "next/link"
import styled from "styled-components"
import { motion, useAnimation } from 'framer-motion'
import SocialLinks from "../components/SocialLinks";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Landing(props: any) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <HomeWrapper>
      <Title
        as={motion.h1}
        ref={ref}
        transition={{ duration: 0.5 }}
        variants={{
          show: { opacity: 1, y: '0' },
          hidden: { opacity: 0, y: '-100%' }
        }}
        initial='hidden'
        animate={controls}
      >
        <strong>Green Gold Ambiental</strong>, onde tecnologia e <br />inovação ambiental andam juntas 
      </Title>
      <Resumo></Resumo>
      <Link href={"/contato"}>Faça seu orçamento</Link>
      <SocialLinks local="landing" />
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

  background-image: url('/images/backgroundLanding.svg');
  background-size: cover;
  
  @media only screen and (max-width: 500px) {
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  a:nth-child(3) {
    padding: 18px 60px;

    font-weight: 600;
    font-size: 18px;
    line-height: 21px;

    color: ${p => p.theme.attentionPrimaryForeground};
    /* background-color: ${p => p.theme.primaryBackground}; */
    text-decoration: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    border: 4px solid ${p => p.theme.attentionPrimaryForeground};

    @media only screen and (max-width: 500px) {
      padding: 12px 28px;

      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
    } 
  }
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 60px;
  text-align: center;

  @media only screen and (max-width: 500px) {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
  }
`

const Resumo = styled.p`
  max-width: 717px;
  
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  text-align: center;

  @media only screen and (max-width: 500px) {
    max-width: 289px;

    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
  }
`