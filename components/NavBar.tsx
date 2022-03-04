import Link from "next/link";
import styled from "styled-components";

export default function NavBar() {

    return (
        <nav>
            <Wrapper>
                <li>
                    <Link href="/duvidas">Dúvidas</Link>
                    <Link href="/mapa">Mapas</Link>
                    <Link href="/fotos">Fotos</Link>
                </li>
            </Wrapper>
        </nav>
    );
}

const Wrapper = styled.ul`
    display: flex;
    list-style: none;

    a {
        color: ${p => p.theme.headerForeground};
        text-decoration: none;
        margin-right: 56px;

        &:last-child {
            margin-right: 0;
        }
    }
`