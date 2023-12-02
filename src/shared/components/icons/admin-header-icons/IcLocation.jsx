import React from 'react'

const IcLocation = ({ width, height, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
        >
            <path
                d="M13.0081 29.8199C2.76579 17.379 0.864624 16.1022 0.864624 11.53C0.864624 5.26707 6.92417 0.190002 14.3991 0.190002C21.8739 0.190002 27.9335 5.26707 27.9335 11.53C27.9335 16.1022 26.0323 17.379 15.79 29.8199C15.1179 30.6334 13.6802 30.6333 13.0081 29.8199ZM14.3991 16.255C17.5136 16.255 20.0384 14.1396 20.0384 11.53C20.0384 8.92044 17.5136 6.805 14.3991 6.805C11.2845 6.805 8.75971 8.92044 8.75971 11.53C8.75971 14.1396 11.2845 16.255 14.3991 16.255Z"
                fill={color}
            />
        </svg>

    )
}
IcLocation.defaultProps = {
    width: 28,
    height: 31,
    color: "black",
}
export default IcLocation
