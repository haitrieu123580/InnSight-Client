// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import MultiStepProgressBar from '../multi-step-progressbar/MultiStepProgressBar'
// import BookingContainer1 from '../../../../containers/booking-container/booking-1/BookingContainer1'
// import BookingPage from '../../../../../pages/booking-pages/BookingPage1'
const Navbar = () => {
    // const [page, setPage] = useState("pageone");

    // const nextPage = (page) => {
    //     setPage(page);
    // };

    // const nextPageNumber = (pageNumber) => {
    //     switch (pageNumber) {
    //         case "1":
    //             setPage("pageone");
    //             break;
    //         case "2":
    //             setPage("pagetwo");
    //             break;
    //         case "3":
    //             setPage("pagethree");
    //             break;
    //         case "4":
    //             alert("Ooops! Seems like you did not fill the form.");
    //             break;
    //         default:
    //             setPage("1");
    //     }
    // };
    return (
        <div className={`hidden lg:flex  ${styles['navbar']}`}>
            <Link
                to={'/'}
                className={`flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8 ${styles['logo-text']}`}>
                InnSight
            </Link>
            <nav className="contents text-base md:text-sm lg:text-lg mr-auto">
                {/* <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
                {
                    {
                        pageone: <BookingPage onButtonClick={nextPage} />,
                        // pagetwo: <PageTwo onButtonClick={nextPage} />,
                        // pagethree: <PageThree onButtonClick={nextPage} />,
                        // pagefour: <PageFour />,
                    }[page]
                } */}
                <MultiStepProgressBar />
            </nav>
        </div>
    )
}
Navbar.defaultProps = {
    onPageNumberClick: () => { },
    page: null,
}
export default Navbar
