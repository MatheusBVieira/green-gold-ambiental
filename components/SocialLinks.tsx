import { TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import Instagram from "../public/icons/Instagram.icon";
import InstagramSmall from "../public/icons/InstagramSmall.icon";
import WhatsApp from "../public/icons/WhatsApp.icon";
import WhatsAppSmall from "../public/icons/WhatsAppSmall.icon";

interface SocialLinksProps {
    local: 'landing' | 'footer';
}

export default function SocialLinks(props: SocialLinksProps) {
    
    return (
        <Wrapper local={props.local}>
            <a href="https://api.whatsapp.com/send?phone=5548999130310" target="_blank" rel="noreferrer">
                {props.local === 'footer' ? <WhatsAppSmall /> : <WhatsApp />}
            </a>
            <a href="https://www.instagram.com/greengoldambiental/" target="_blank" rel="noreferrer">
                {props.local === 'footer' ? <InstagramSmall /> : <Instagram />}
            </a>
        </Wrapper>
    );
}

const Wrapper = styled.div<{ local: 'landing' | 'footer'}>`
    display: flex;
    flex-direction: ${p => p.local === 'footer' ? "column" : "rowo"};;
    gap: ${p => p.local === 'footer' ? "10px" : "16px"};

    position: relative;
    top: ${p => p.local === 'footer' ? "-70px" : "140px"};
    left: ${p => p.local === 'footer' ? "90%" : "0px"};;
    font-size: 18px;
`
