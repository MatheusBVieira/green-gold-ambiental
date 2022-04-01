import { SVGProps } from "react"
import { useTheme } from "styled-components";

export default function RightArrow(props: SVGProps<SVGSVGElement>) {
    const theme = useTheme();
    
    return (
        <svg
            width={16}
            height={8}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M12.01 3H0v2h12.01v3L16 4l-3.99-4v3Z" fill="#338A3E" />
        </svg>
    );
}
