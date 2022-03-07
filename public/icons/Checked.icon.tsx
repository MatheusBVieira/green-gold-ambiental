import { SVGProps } from "react"
import { useTheme } from "styled-components";

export default function Checked(props: SVGProps<SVGSVGElement>) {
    const theme = useTheme();
    
    return (
        <svg
            width={32}
            height={33}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path fill="#fff" d="M0 .514h32v31.524H0z" />
            <g clipPath="url(#a)">
                <path
                    d="m13 20.413-4.2-4.137-1.4 1.38 5.6 5.516L25 11.35l-1.4-1.379L13 20.413Z"
                    fill={theme.attentionPrimaryForeground}
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path
                        fill="#fff"
                        transform="translate(4 4.455)"
                        d="M0 0h24v23.643H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    );
}
