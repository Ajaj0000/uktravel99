import React from "react";

function Footer() {
  return (
    <>
      {/*         
    <!-- start .footer --> */}
      <footer className="footer">
        <div className="container">
          <p>© 2022 UK Travel & Tourism,  Farman khan. All Rights Reserved.</p>
          <div className="socicon">
            <a>
              <img src="assets/images/common/fb.png" alt="" />
            </a>
            <a>
              <img src="assets/images/common/twitter.png" alt="" />
            </a>
            <a>
              <img src="assets/images/common/linkedin.png" alt="" />
            </a>
          </div>
        </div>
      </footer>
      {/* <!-- end .footer --> */}
    </>
  );
}
export { Footer };