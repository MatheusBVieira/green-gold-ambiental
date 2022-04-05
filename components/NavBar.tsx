import Link from "next/link";
import styled from "styled-components";

export default function NavBar(props: any) {

    return (
        <nav>
            <Wrapper open={props.open}>
                <li>
                    <Link href="/duvidas">Dúvidas</Link>
                    <Link href="/locais">Locais</Link>
                    <Link href="/fotos">Portfólio</Link>
                    <Link href="/contato">Faça seu orçamento</Link>
                </li>
            </Wrapper>
        </nav>
    );
}

const Wrapper = styled.ul<{open: any}>`
    display: flex;
    list-style: none;

    a {
        margin-right: 56px;
        font-size: 18px;
        font-weight: 600;

    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #66BB6A;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li {
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-top: 36px;
        }

        a {
            margin-bottom: 36px;
            margin-right: 16px;
        }

    }
`
