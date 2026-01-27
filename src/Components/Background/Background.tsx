import Galaxy from "/public/Video/Galaxy.mp4";
import "../Css/Background.css";

export default function Background() {
  return (
    <div className="video-bg">
      <video autoPlay loop muted playsInline>
        <source src={Galaxy} type="video/mp4" />
      </video>

      {/* Oscurece el video para que se lea el texto */}
      <div className="overlay"></div>
    </div>
  );
}
