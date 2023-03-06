import React from "react";
import "../stylesheets/footer.css";

function Footer() {
  return (
    <footer className="shoebox-footer p-4">
      <p>Made with 💖 by Ankit pal</p>
      <div className="social-links flex justify-center items-center mt-4 gap-x-4">
        <a
          href="https://twitter.com/sarcastic_ak__"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-twitter-square" title="Twitter"></i>
        </a>
        <a
          href="https://github.com/palankit942"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github-square" title="Github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ankit-kumar-pal-bb9a1b191/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin" title="LinkedIn"></i>
        </a>
      </div>
    </footer>
  );
}

export { Footer };
