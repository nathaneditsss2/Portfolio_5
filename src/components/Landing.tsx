import "./styles/Landing.css";
import { config } from "../config";

const Landing = () => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Halo! Saya</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h3>Seorang</h3>
            <div
              className="landing-role"
              aria-label="AI Engineer dan Full-Stack Developer"
            >
              <span className="landing-role-primary">AI Engineer</span>
              <span className="landing-role-secondary">
                dan Full-Stack Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
