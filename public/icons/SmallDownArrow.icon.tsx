import * as React from "react"
import { SVGProps } from "react"
import { useTheme } from "styled-components"


export default function SmallDownArrow(props: SVGProps<SVGSVGElement>) {
    const theme = useTheme();

    return (
        <svg
            width={23}
            height={14}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M20.106.106 11.5 8.694 2.894.106.25 2.75 11.5 14 22.75 2.75 20.106.106Z"
                fill={theme.attentionForeground}
            />
        </svg>
    );
}
