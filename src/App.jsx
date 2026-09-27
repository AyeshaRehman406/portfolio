import React, { useState, useRef } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [sent, setSent] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState("/profile.jpg");
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;
    setSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const handleImageError = () => {
    if (avatarSrc === "/profile.jpg") {
      setAvatarSrc("/profile.png");
    } else if (avatarSrc === "/profile.png") {
      setAvatarSrc("/profile.jpeg");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarSrc(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="brand-name">Ayesha Rehman</a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* 1. Home Section */}
      <div id="home" className="section-wrapper">
        <section className="section-content hero">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: "none" }}
          />
          <div
            className="avatar-wrapper"
            title="Click to select photo from computer"
            onClick={() => fileInputRef.current.click()}
            style={{ cursor: "pointer" }}
          >
            <img
              src={avatarSrc}
              alt=""
              className="avatar-img"
              onError={handleImageError}
            />
          </div>
          <h1 className="hero-name">Ayesha Rehman</h1>
          <div className="role-badge">Front End Developer</div>
          <p className="hero-bio">
            I’m a front-end developer passionate about creating modern, responsive, and purposeful web experiences.
          </p>
        </section>
      </div>

      {/* 2. About Section */}
      <div id="about" className="section-wrapper">
        <section className="section-content narrow-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-clean">
            <div className="about-item">
              <h3>Education</h3>
              <p className="degree">BS Computer Science</p>
              <p>National University of Pakistan</p>
              <p className="timeline">2025 – Present</p>
            </div>

            <div className="about-item">
              <h3>What I Do</h3>
              <p>
                I focus on creating responsive and interactive websites with attention to both functionality and visual experience.
              </p>
            </div>

            <div className="about-item">
              <h3>My Approach</h3>
              <p>
                I believe the best way to learn development is by building. I experiment with new ideas, work through problems, and keep refining my projects as I learn.
              </p>
            </div>

            <div className="about-item">
              <h3>Beyond Development</h3>
              <p>
                Outside of coding, I enjoy painting and exploring creative ideas. I like having a balance between logical problem-solving and creativity.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* 3. Skills Section (3 Blocks in a Straight Line) */}
      <div id="skills" className="section-wrapper">
        <section className="section-content">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>HTML5</h3>
              <p>Semantic structuring, accessible standards, and SEO-friendly document hierarchy.</p>
            </div>

            <div className="skill-card">
              <h3>CSS</h3>
              <p>Responsive design, Flexbox, Grid, custom styling systems, and fluid layout animations.</p>
            </div>

            <div className="skill-card">
              <h3>JavaScript & Git / GitHub</h3>
              <p>Interactive DOM logic, ES6+ workflows, version control, branching, and team collaboration.</p>
            </div>
          </div>
        </section>
      </div>

      {/* 4. Projects Section (3 Blocks in a Straight Line) */}
      <div id="projects" className="section-wrapper">
        <section className="section-content">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div>
                <h3>1. Portfolio</h3>
                <p>A personal web portfolio showcasing responsive layouts, custom palettes, and smooth UI flow.</p>
              </div>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">CSS3</span>
                <span className="tag">Responsive</span>
              </div>
            </div>

            <div className="project-card">
              <div>
                <h3>2. Chat Application</h3>
                <p>An interactive messaging interface supporting real-time communication and clean state management.</p>
              </div>
              <div className="project-tags">
                <span className="tag">JavaScript</span>
                <span className="tag">UI/UX</span>
                <span className="tag">WebSockets</span>
              </div>
            </div>

            <div className="project-card">
              <div>
                <h3>3. To-Do List</h3>
                <p>A productive task management application featuring item filtering, state persistence, and intuitive controls.</p>
              </div>
              <div className="project-tags">
                <span className="tag">JavaScript</span>
                <span className="tag">LocalStorage</span>
                <span className="tag">CSS</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 5. Contact Section */}
      <div id="contact" className="section-wrapper">
        <section className="section-content narrow-content">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-input"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-input"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Subject"
                className="form-input"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
              <textarea
                placeholder="Enter Your Message"
                className="form-textarea"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button type="submit" className="btn-submit">Send Message</button>
              {sent && <div className="feedback-msg">Your message has been sent successfully!</div>}
            </form>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <h4 className="footer-name">Ayesha Rehman</h4>
        <p className="footer-copy">© 2026 Ayesha Rehman. All Rights Reserved.</p>
      </footer>
    </div>
  );
}