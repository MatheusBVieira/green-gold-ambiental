import * as React from "react"
import { SVGProps } from "react"
import { useTheme } from "styled-components"

interface InstagramProps extends SVGProps<SVGSVGElement> {
    isdesk?: boolean;
}

function Instagram(props: InstagramProps) {
    const theme = useTheme();

    return (
        <svg
            width={29}
            height={29}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M14.9 7.49a7.22 7.22 0 0 0-7.23 7.232 7.22 7.22 0 0 0 7.23 7.231 7.22 7.22 0 0 0 7.23-7.231A7.22 7.22 0 0 0 14.9 7.49Zm0 11.933a4.71 4.71 0 0 1-4.7-4.701 4.706 4.706 0 0 1 4.7-4.702c2.593 0 4.7 2.109 4.7 4.702a4.71 4.71 0 0 1-4.7 4.701Zm9.212-12.229c0 .938-.755 1.687-1.686 1.687a1.687 1.687 0 1 1 1.686-1.687Zm4.789 1.712c-.107-2.26-.623-4.26-2.278-5.91-1.649-1.649-3.65-2.165-5.909-2.278-2.328-.132-9.306-.132-11.635 0-2.252.107-4.253.623-5.908 2.272C1.516 4.639 1.006 6.64.893 8.9c-.132 2.329-.132 9.309 0 11.637.107 2.26.623 4.261 2.278 5.91 1.655 1.65 3.65 2.165 5.908 2.279 2.329.132 9.307.132 11.635 0 2.26-.107 4.26-.623 5.909-2.279 1.649-1.649 2.165-3.65 2.278-5.91.132-2.328.132-9.302 0-11.63Zm-3.008 14.13a4.76 4.76 0 0 1-2.68 2.681c-1.857.736-6.262.567-8.313.567-2.051 0-6.462.163-8.312-.567a4.76 4.76 0 0 1-2.681-2.681c-.736-1.857-.566-6.263-.566-8.314 0-2.052-.164-6.464.566-8.315a4.76 4.76 0 0 1 2.68-2.68C8.445 2.99 12.85 3.16 14.9 3.16c2.051 0 6.463-.164 8.312.566a4.76 4.76 0 0 1 2.681 2.681c.736 1.857.566 6.263.566 8.315 0 2.051.17 6.464-.566 8.314Z"
                fill={props.isdesk ? "#98EE99" : "#000" }
            />
        </svg>
    );
}

export default Instagram
