import Link from "next/link";
import styled from "styled-components";

export default function NavBar() {

    return (
        <nav>
            <Wrapper>
                <li>
                    <Link href="/duvidas">Dúvidas</Link>
                    <Link href="/locais">Locais</Link>
                    <Link href="/fotos">Portfólio</Link>
                    <Link href="/contato">Orçamento</Link>
                </li>
            </Wrapper>
        </nav>
    );
}

const Wrapper = styled.ul`
    display: flex;
    list-style: none;

    a {
        margin-right: 56px;
        font-size: 18px;
        font-weight: 600;

        &:last-child {
            margin-right: 0;
        }
    }
`
