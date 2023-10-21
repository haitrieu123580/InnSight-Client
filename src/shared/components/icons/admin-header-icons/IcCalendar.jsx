import React from 'react'

const IcCalendar = ({ width, height, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
        >
            <path
                d="M0 25.375C0 26.8242 1.43973 28 3.21429 28H26.7857C28.5603 28 30 26.8242 30 25.375V10.5H0V25.375ZM21.4286 14.6562C21.4286 14.2953 21.7902 14 22.2321 14H24.9107C25.3527 14 25.7143 14.2953 25.7143 14.6562V16.8438C25.7143 17.2047 25.3527 17.5 24.9107 17.5H22.2321C21.7902 17.5 21.4286 17.2047 21.4286 16.8438V14.6562ZM21.4286 21.6562C21.4286 21.2953 21.7902 21 22.2321 21H24.9107C25.3527 21 25.7143 21.2953 25.7143 21.6562V23.8438C25.7143 24.2047 25.3527 24.5 24.9107 24.5H22.2321C21.7902 24.5 21.4286 24.2047 21.4286 23.8438V21.6562ZM12.8571 14.6562C12.8571 14.2953 13.2188 14 13.6607 14H16.3393C16.7812 14 17.1429 14.2953 17.1429 14.6562V16.8438C17.1429 17.2047 16.7812 17.5 16.3393 17.5H13.6607C13.2188 17.5 12.8571 17.2047 12.8571 16.8438V14.6562ZM12.8571 21.6562C12.8571 21.2953 13.2188 21 13.6607 21H16.3393C16.7812 21 17.1429 21.2953 17.1429 21.6562V23.8438C17.1429 24.2047 16.7812 24.5 16.3393 24.5H13.6607C13.2188 24.5 12.8571 24.2047 12.8571 23.8438V21.6562ZM4.28571 14.6562C4.28571 14.2953 4.64732 14 5.08929 14H7.76786C8.20982 14 8.57143 14.2953 8.57143 14.6562V16.8438C8.57143 17.2047 8.20982 17.5 7.76786 17.5H5.08929C4.64732 17.5 4.28571 17.2047 4.28571 16.8438V14.6562ZM4.28571 21.6562C4.28571 21.2953 4.64732 21 5.08929 21H7.76786C8.20982 21 8.57143 21.2953 8.57143 21.6562V23.8438C8.57143 24.2047 8.20982 24.5 7.76786 24.5H5.08929C4.64732 24.5 4.28571 24.2047 4.28571 23.8438V21.6562ZM26.7857 3.5H23.5714V0.875C23.5714 0.39375 23.0893 0 22.5 0H20.3571C19.7679 0 19.2857 0.39375 19.2857 0.875V3.5H10.7143V0.875C10.7143 0.39375 10.2321 0 9.64286 0H7.5C6.91071 0 6.42857 0.39375 6.42857 0.875V3.5H3.21429C1.43973 3.5 0 4.67578 0 6.125V8.75H30V6.125C30 4.67578 28.5603 3.5 26.7857 3.5Z"
                fill={color}
            />
        </svg>

    )
}
IcCalendar.defaultProps = {
    width: 30,
    height: 28,
    color: "black",
}
export default IcCalendar
