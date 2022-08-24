import { TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import Instagram from "../public/icons/Instagram.icon";
import InstagramSmall from "../public/icons/InstagramSmall.icon";
import WhatsApp from "../public/icons/WhatsApp.icon";
import WhatsAppSmall from "../public/icons/WhatsAppSmall.icon";

interface SocialLinksProps {
    local: 'landing' | 'footer';
    isdesk?: boolean;
}

export default function SocialLinks(props: SocialLinksProps) {
    
    return (
        <Wrapper local={props.local} isdesk={props.isdesk}>
            <a href="https://api.whatsapp.com/send?phone=5548988007553" target="_blank" rel="noreferrer">
                {props.local === 'footer' ? <WhatsAppSmall /> : <WhatsApp isdesk={props.isdesk} />}
            </a>
            <a href="https://www.instagram.com/greengoldambiental/" target="_blank" rel="noreferrer">
                {props.local === 'footer' ? <InstagramSmall /> : <Instagram isdesk={props.isdesk} />}
            </a>
        </Wrapper>
    );
}

const Wrapper = styled.div<{ local: 'landing' | 'footer', isdesk?: boolean}>`
    display: flex;
    flex-direction: ${p => p.local === 'footer' ? "column" : "row"};
    gap: ${p => p.local === 'footer' ? "10px" : "16px"};

    position: relative;
    top: ${p => p.local === 'footer' ? "-70px" : p.isdesk ? "-35px" : "100px" };
    left: ${p => p.local === 'footer' ? "90%" : p.isdesk ? "1100px" : "0px"};
    font-size: 18px;
`
