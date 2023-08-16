"use client"
import "aos/dist/aos.css";

const PageWrapper = ({children}) => {
    return (
      <div
      data-aos="zoom-in"
      >
        {children}
      </div>
    );
};

export default PageWrapper;