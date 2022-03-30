import styled from "styled-components";
import {transparentize} from "polished";
import { FOOTER_HEIGHT } from "../_constants";
import Call from "../public/icons/Call.icon";
import Email from "../public/icons/Email.icon";
import Location from "../public/icons/Location.icon";

export default function Footer(Props: any) {
    return (
        <Wrapper>
            <Container>
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
                            <span>Rod. Jorn. Manoel de Menezes, 2057 - Praia Mole</span>
                            <span>Florianópolis - SC, 88061-701</span>
                        </LocalizationWrapper>
                    </IconContentWrapper>
                    <IconContentWrapper>
                        <Email />
                        <EmailWrapper>
                            <span>E-mail:</span>
                            <span>contatogreengoldambient<br />al@gmail.com</span>
                        </EmailWrapper>
                    </IconContentWrapper>
                    <CpnjInfo>Green Gold Ambiental. CNPJ:28748278</CpnjInfo>
                </InfoWrapper>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    background-color: ${p => transparentize(0.1, p.theme.footerBackground)};
    color: ${p => p.theme.footerForeground};

    width: 100%;
    height: ${FOOTER_HEIGHT}px;

    @media only screen and (max-width: 500px) {
        height: 380px;

        span {
            font-size: 10px;
        }
    }
`
const Container = styled.div`
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
`;

const PhoneWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;

    @media only screen and (max-width: 500px) {
        margin-bottom: 0;
    }
`;

const EmailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const LocalizationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    span:first-child {
        margin-bottom: 12px;
    }
`

const CpnjInfo = styled.span`
    margin-left: 34px;
`