import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => (
  <footer className="py-2 bg-light text-center fixed-bottom">
    <div>Made by Javed Akhtar</div>
    <div>
      <a href="https://www.linkedin.com/in/javedsir301/" target="_blank" rel="noreferrer" className="mx-2">
        <i className="bi bi-linkedin fs-4"></i>
      </a>
      <a href="https://github.com/javedsir301" target="_blank" rel="noreferrer" className="mx-2">
        <i className="bi bi-github fs-4"></i>
      </a>
      <a href="mailto:javedsir301@gmail.com" className="mx-2">
        <i className="bi bi-envelope-fill fs-4"></i>
      </a>
    </div>
  </footer>
);

export default Footer;
