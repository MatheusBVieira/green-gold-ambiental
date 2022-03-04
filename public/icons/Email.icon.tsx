import { SVGProps } from "react";
import { useTheme } from "styled-components";

function Email(props: SVGProps<SVGSVGElement>) {
    const theme = useTheme();

    return (
        <svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
                fill={theme.footerForeground}
            />
        </svg>
    )
}

export default Email
