import { ReactElement, useEffect } from "react";
import { motion, useAnimation } from 'framer-motion'
import styled, { StyledComponent } from "styled-components";
import { useInView } from "react-intersection-observer";

export interface InfoContentProps extends React.HTMLAttributes<HTMLDivElement> {
    backgroundColor: 'default' | 'primary';
    height: number;
    left: ReactElement<any, any>
    right: ReactElement<any, any>
    leftStyle: StyledComponent<any, any>
    rightStyle: StyledComponent<any, any>
    backgroundNone?: boolean
}

export default function InfoContent(props: InfoContentProps) {
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
        <Wrapper backgroundNone={props.backgroundNone} background={props.backgroundColor}>
            <Top>
                {props.children}
            </Top>
            <LR height={props.height}>
                <props.leftStyle
                    as={motion.div}
                    ref={ref}
                    initial='hidden'
                    transition={{ duration: 0.3}}
                    variants={{
                        show: { opacity: 1, x: '0' },
                        hidden: { opacity: 0, x: '-100%' }
                    }}
                    animate={controls}
                >
                    {props.left}
                </props.leftStyle>
                <props.rightStyle
                    as={motion.div}
                    ref={ref}
                    initial='hidden'
                    transition={{ duration: 0.3 }}
                    variants={{
                        show: { opacity: 1, x: '0' },
                        hidden: { opacity: 0, x: '100%' }
                    }}
                    animate={controls}
                >
                    {props.right}
                </props.rightStyle>
            </LR>
        </Wrapper>
    );
}

const Wrapper = styled.div<{ background: string, backgroundNone?: boolean }>`
    height: 728px;
    background-color: ${p => p.background === 'default' ? p.theme.pageBackground : p.theme.primaryBackground};

    @media only screen and (max-width: 500px) {
        height: 778px;

        ${p => p.backgroundNone && 'background: none;' }
        
    }
`

const Top = styled.div`
    
`

const LR = styled.div<{ height: number }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: ${p => p.height}%;

    @media only screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`
