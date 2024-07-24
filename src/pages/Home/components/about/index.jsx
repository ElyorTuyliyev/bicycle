import AboutTextStyle from "./AboutText.sytle";

function AboutText({ icon, alt, title, text }) {
  return (
    <AboutTextStyle>
      <div className="about__icon-wrapper">
        <img src={icon} alt={alt} />
        <h3 className="about__title">{title}</h3>
      </div>
      <p className="about__text">{text}</p>
    </AboutTextStyle>
  );
}

export default AboutText;
