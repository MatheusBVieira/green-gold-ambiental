import { SVGProps } from "react"
import { useTheme } from "styled-components";

export default function SmallRightArrow(props: SVGProps<SVGSVGElement>) {
    const theme = useTheme();
    
    return (
        <svg
            width={8}
            height={12}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M2 0 .59 1.41 5.17 6 .59 10.59 2 12l6-6-6-6Z" fill="#fff" />
        </svg>
    );
}
