import React from 'react'

const IcSell = ({ width, height, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
        >
            <path
                d="M0 12.8029V2.4375C0 1.09129 1.13326 0 2.53125 0H13.2953C13.9666 3.38039e-06 14.6104 0.256813 15.0851 0.713934L26.2586 11.4736C27.2471 12.4255 27.2471 13.9688 26.2586 14.9207L15.4946 25.2861C14.5061 26.238 12.9034 26.238 11.9149 25.2861L0.741393 14.5264C0.26669 14.0693 3.5104e-06 13.4493 0 12.8029ZM5.90625 3.25C4.50826 3.25 3.375 4.34129 3.375 5.6875C3.375 7.03371 4.50826 8.125 5.90625 8.125C7.30424 8.125 8.4375 7.03371 8.4375 5.6875C8.4375 4.34129 7.30424 3.25 5.90625 3.25Z"
                fill={color}
            />
        </svg>

    )
}
IcSell.defaultProps = {
    width: 27,
    height: 26,
    color: "#1B395B",
}
export default IcSell