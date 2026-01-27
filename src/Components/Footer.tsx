import "./Css/Footer.css"

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <h3>Leo Dev</h3>
        <p>
          Frontend Developer · React · UI/UX <br />
          Building modern digital experiences
        </p>

        <div className="footer-links">
          <a href="https://github.com/leo124123" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            LinkedIn
          </a>
          <a href="mailto:leodev@email.com">
            Email
          </a>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} Leo Dev. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

