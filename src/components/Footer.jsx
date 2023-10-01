import React from "react";

const currentDate = new Date();
const currentYear = currentDate.getYear();

function Footer() {
    return (
        <p>Copyright {currentYear}</p>
    )
}

export default Footer;