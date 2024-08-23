import React from 'react';
export const UserIcon = ({
    fill = 'currentColor',
    filled,
    size,
    height=100,
    width=140,
    label,
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
            <rect width="140" height="100" rx="25" fill="white" />
            <g transform='scale(2)'>
                <path
                    d="M38.5355 22.2855C39.4732 21.3479 40 20.0761 40 18.75C40 17.4239 39.4732 16.1521 38.5355 15.2145C37.5979 14.2768 36.3261 13.75 35 13.75C33.6739 13.75 32.4021 14.2768 31.4645 15.2145C30.5268 16.1521 30 17.4239 30 18.75C30 20.0761 30.5268 21.3479 31.4645 22.2855C32.4021 23.2232 33.6739 23.75 35 23.75C36.3261 23.75 37.5979 23.2232 38.5355 22.2855Z"
                    stroke="#21466D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M28.8128 30.0628C30.4538 28.4219 32.6794 27.5 35 27.5C37.3206 27.5 39.5462 28.4219 41.1872 30.0628C42.8281 31.7038 43.75 33.9294 43.75 36.25H26.25C26.25 33.9294 27.1719 31.7038 28.8128 30.0628Z"
                    stroke="#21466D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
        </svg>
    );
};
