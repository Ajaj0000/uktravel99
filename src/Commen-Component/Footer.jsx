import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <p>© 2022 UK Travel & Tourism, Farman khan. All Rights Reserved.</p>
          <div className="socicon">
            <Link>
              <img src="assets/images/common/fb.png" alt="img" />
            </Link>
            <Link>
              <img src="assets/images/common/twitter.png" alt="img" />
            </Link>
            <Link>
              <img src="assets/images/common/linkedin.png" alt="img" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
export { Footer };
