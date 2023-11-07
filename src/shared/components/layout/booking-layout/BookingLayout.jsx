import Navbar from "./navbar/Navbar"
const BookingLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default BookingLayout
