// import Award from "../../image/abtpose.jpeg";
import "./about.css";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://media.istockphoto.com/photos/young-african-american-business-male-smiling-picture-id162327508?k=20&m=162327508&s=612x612&w=0&h=RqenxGgvZGc4EWXzK_gvrQLxBUCJlpKv8aUCgTosKyQ="
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-award">
          <img className="a-award-img"
            src="https://media.istockphoto.com/vectors/web-development-young-male-character-writing-a-code-on-a-desktop-vector-id1175813874?k=20&m=1175813874&s=612x612&w=0&h=CcY_IaHVAav3X95W5HpkiqCQmoZpQCmIDldw54gCXaU="
            alt=""
          />
          
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
