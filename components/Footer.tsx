import styled from "styled-components";
import {transparentize} from "polished";
import { FOOTER_HEIGHT } from "../_constants";
import Call from "../public/icons/Call.icon";
import Email from "../public/icons/Email.icon";
import Location from "../public/icons/Location.icon";
import SocialLinks from "./SocialLinks";
import useWindowDimensions from "../utils/WindowDimensions";

export default function Footer(Props: any) {
    const { width } = useWindowDimensions();

    console.log(width)
    
    return (
        <Wrapper>
            <Content>
                <InfoWrapper>
                    <IconContentWrapper>
                        <Call />
                        <PhoneWrapper>
                            <span>Telefones:</span>
                            <span>+55 (48) 48 9 9913-0310</span>
                        </PhoneWrapper>
                    </IconContentWrapper>
                    <IconContentWrapper>
                        <Location />
                        <LocalizationWrapper>
                            <span>Localização:</span>
                            <span>Três Riachos, Biguaçu, Santa Catarina, Brasil</span>
                        </LocalizationWrapper>
                    </IconContentWrapper>
                    <IconContentWrapper>
                        <Email />
                        <EmailWrapper>
                            <span>E-mail:</span>
                            <span>contatogreengoldambiental@gmail.com</span>
                        </EmailWrapper>
                    </IconContentWrapper>
                    <CpnjInfo>Green Gold Ambiental.<br />CNPJ:40.403.9000/0001-02</CpnjInfo>
                </InfoWrapper>
                {width < 700 ? '' : <SocialLinks local="landing" isDesk={true} />}
            </Content>
            {width < 700 ? <SocialLinks local="footer" /> : '' }
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    background-color: ${p => transparentize(0.1, p.theme.footerBackground)};
    color: ${p => p.theme.footerForeground};

    width: 100%;
    height: ${FOOTER_HEIGHT}px;

    @media only screen and (max-width: 500px) {
        height: 260px;

        span {
            font-size: 12px;
        }
    }
`
const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1200px;
    margin: auto;
    height: 100%;

    @media only screen and (max-width: 500px) {
        padding-left: 8px;
    }
`

const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media only screen and (max-width: 500px) {
        grid-template-columns: 1fr;
        gap: 22px;
    }
`;

const IconContentWrapper = styled.div`
    display: flex;
    gap: 10px;

    span:first-child {
        font-weight: 600;
    }
`;

const PhoneWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;

    @media only screen and (max-width: 500px) {
        gap: 6px;
        margin-bottom: 0;
    }
`;

const EmailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media only screen and (max-width: 500px) {
        gap: 6px;
    }
`;

const LocalizationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    span:first-child {
        margin-bottom: 12px;

        @media only screen and (max-width: 500px) {
            margin-bottom: 6px;
        }
    }
`

const CpnjInfo = styled.span`
    margin-left: 34px;
`