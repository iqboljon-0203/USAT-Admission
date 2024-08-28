import React from 'react';
export const FileIcon = ({
    fill = 'currentColor',
    height=100,
    width=140,
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 140 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="0.5" width="140" height="100" rx="25" fill="#FFC82A" />
            <g transform="scale(2)">
                <path
                    d="M36.9645 13.75H31.75C29.393 13.75 28.2145 13.75 27.4822 14.4822C26.75 15.2145 26.75 16.393 26.75 18.75V31.25C26.75 33.607 26.75 34.7855 27.4822 35.5178C28.2145 36.25 29.393 36.25 31.75 36.25H39.25C41.607 36.25 42.7855 36.25 43.5178 35.5178C44.25 34.7855 44.25 33.607 44.25 31.25V21.0355C44.25 20.5246 44.25 20.2691 44.1548 20.0394C44.0597 19.8097 43.8791 19.6291 43.5178 19.2678L38.7322 14.4822C38.3709 14.1209 38.1903 13.9403 37.9606 13.8452C37.7309 13.75 37.4754 13.75 36.9645 13.75Z"
                    stroke="#21466D"
                    stroke-width="2"
                />
                <path
                    d="M31.75 26.25L39.25 26.25"
                    stroke="#21466D"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M31.75 31.25L36.75 31.25"
                    stroke="#21466D"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M36.75 13.75V18.75C36.75 19.9285 36.75 20.5178 37.1161 20.8839C37.4822 21.25 38.0715 21.25 39.25 21.25H44.25"
                    stroke="#21466D"
                    stroke-width="2"
                />
            </g>
        </svg>
    );
};
