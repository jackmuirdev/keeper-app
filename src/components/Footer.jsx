import React from "react";

<<<<<<< HEAD
const currentDate = new Date();
const currentYear = currentDate.getFullYear();


function Footer() {
    return (
        <footer>
            <p>Copyright {currentYear}</p>
        </footer>
    )
}

export default Footer;
=======
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
>>>>>>> 79b2a5b (finished part 3)
