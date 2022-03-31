import * as React from "react"
import { SVGProps } from "react"
import { useTheme } from "styled-components"

function Facebook(props: SVGProps<SVGSVGElement>) {
    const theme = useTheme();

    return (
        <svg
            width={17}
            height={17}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#a)">
                <path
                    d="M15.91 8.327A7.828 7.828 0 0 0 8.083.497a7.828 7.828 0 0 0-7.83 7.83 7.832 7.832 0 0 0 6.606 7.734V10.59H4.87V8.327h1.988V6.602c0-1.962 1.168-3.046 2.957-3.046.857 0 1.753.153 1.753.153v1.925h-.987c-.973 0-1.276.604-1.276 1.223v1.47h2.171l-.347 2.263H9.305v5.471a7.832 7.832 0 0 0 6.606-7.734Z"
                    fill="#98EE99"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path
                        fill="#fff"
                        transform="translate(0 .245)"
                        d="M0 0h16.163v16.163H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    );
}

export default Facebook
