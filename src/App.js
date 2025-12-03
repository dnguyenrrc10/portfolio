import { useState } from 'react';
import './App.css';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">KN</div>
          <div className="logo-text">Khoa Nguyen's Portfolio Website</div>
        </a>
        <nav>
          <ul id="menu" className={open ? 'active' : ''}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#work-experience">Experiences</a>
            </li>
            <li>
              <a href="#contact" className="button">
                Contact Me
              </a>
            </li>
          </ul>

          <a className="mobile-toggle" onClick={() => setOpen(!open)}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero container">
        <div className="green-box">
          <h1>
            <small>Hi I'm</small>Doan Anh Khoa Nguyen
          </h1>
          <p>
            A Full Stack Development student at Red River College. I’m
            passionate about building practical, user-focused web applications
            and improving my skills.
          </p>

          <div className="call-to-action">
            <a href="/KhoaNguyen_Resume.pdf" className="button black">
              View Resume
            </a>
            <a href="#contact" className="button white">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="#">
              <img src="/imgs/facebook.png" width="45" />
            </a>
            <a href="#">
              <img src="/imgs/instagram.png" width="48" />
            </a>
            <a href="#">
              <img src="/imgs/github.png" width="48" />
            </a>
            <a href="#">
              <img src="/imgs/linkedin.png" width="48" />
            </a>
          </div>
        </div>

        <div className="hero-yellow">
          <img src="/imgs/favicon.jpg" alt="" />
        </div>
      </section>

      {/* LOGOS SCROLLER */}
      <section className="logos container">
        <div className="logobanner">
          <div className="slide">
            {[
              'html',
              'css',
              'javascript',
              'ruby',
              'react',
              'nextjs',
              'java',
              'vscode',
              'python',
              'html',
              'css',
              'javascript',
              'ruby',
              'react',
              'nextjs',
              'java',
              'vscode',
              'python',
            ].map((name, i) => (
              <img key={i} src={`/imgs/${name}.png`} width="128" />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills container">
        <h2>
          <small>About Me</small>Skills
        </h2>

        <div className="holder-blue">
          <div className="left-column">
            <h3>Frontend</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>

            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Rails</li>
              <li>Python</li>
              <li>Java</li>
              <li>PHP</li>
              <li>Ruby</li>
              <li>VS Code</li>
              <li>Docker</li>
            </ul>

            <h3>Database</h3>
            <ul>
              <li>SQL</li>
              <li>Database Security</li>
              <li>Cloud Management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="work-experience" className="work-experience container">
        <h2>
          <small>Recent</small>Work Experience
        </h2>

        <div className="jobs">
          <article>
            <figure>
              <div>
                <img src="/imgs/RRC.jpg" />
              </div>
            </figure>
            <h3>RRC College Student - Full Stack Development</h3>
            <div>09/2024 - 05/2026</div>
            <p>Full-time student studying Website Development & Design.</p>
          </article>

          <article>
            <figure>
              <div>
                <img src="/imgs/proshop.jpg" />
              </div>
            </figure>
            <h3>Racquets Pro Shop & Stringing Center</h3>
            <div>2023 - Current</div>
            <p>
              Building a website and database for a local racquet sports shop.
            </p>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-container">
        <h2>
          <small>Contact</small>Information
        </h2>

        <div className="contact-box">
          <p>Email: ben.nguyen0510@outlook.com</p>
          <p>Phone Number: +1 (204)-293-5873</p>

          <a href="https://www.linkedin.com/in/khoa-nguyen-033b7b380/">
            LinkedIn: Khoa Nguyen
          </a>
          <a href="https://www.facebook.com/anh.khoa.983352/">
            Facebook: Anh Khoa
          </a>
          <a href="https://www.instagram.com/khoa.51002/">
            Instagram: khoa.51002
          </a>
        </div>
      </section>
    </>
  );
}
