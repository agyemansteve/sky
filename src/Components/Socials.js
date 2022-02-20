import React from "react";

const Socials = () => {
  return (
    <div className="social-icons">
      <a
        className="social-icon-link"
        href="https://github.com/agyemansteve"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        className="social-icon-link"
        href="https://www.instagram.com/nkzdev"
        target="__blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <i className="fab fa-instagram" />
      </a>
      {/* <a
               className='social-icon-link youtube'
               href='/'
               target='_blank'
               aria-label='Youtube'
             >
               <i className='fab fa-youtube' />
             </a>
             <a
               className='social-icon-link twitter'
               href='/'
               target='_blank'
               aria-label='Twitter'
             >
               <i className='fab fa-twitter' />
             </a> */}
    </div>
  );
};
export default Socials;
