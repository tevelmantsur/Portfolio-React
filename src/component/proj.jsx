import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "../style.css";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 25,
  (x - rect.left - rect.width / 2) / 25,
  0.95,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Proj(props) {
  const ref = useRef(null);

  const [prop, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const style = {
    backgroundImage:
      "linear-gradient(to top, rgb(0 0 0 / 100%) 0%,rgb(63 22 22 / 0%) 69%) ,url(" +
      require(`../images/Pages/${props.b}`) +
      ")",

    height: props.mobile ? "550px" : "250px",
    minWidth: "350px",
    padding: "15px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    border: "none",
    borderRadius: "5px",
    borderColor: "black",
    boxShadow:
      "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)",
  };

  const [my, setmy] = useState("projectImage");

  return (
    <div
      style={{ marginTop: "35px" }}
      ref={ref}
    >
          <Link to={`/${props.name}`}>

      <animated.div
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          set({ xys: calc(e.clientX, e.clientY, rect) });
        }}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: prop.xys.interpolate(trans),
          width: "100%",
        }}
      >
        <div
          style={style}
          onClick={() => {
            setmy("tester");
          }}
        >
            <div className={my === "projectImage" ? null : "slide-img"} />

            <div
              className="project-name"
              style={{ bottom: "0", left: "-25px", right: "95%" }}
            >
              <div
                className={ my === "projectImage" ? null : "slide-div reveal-num"} />
              <h2 style={{textAlign:"left"}} className="project-name">
                <div className={my === "projectImage" ? null : "slide-div"} />
                {props.name}
                <br />
              </h2>
              <hr></hr>
              {props.id} <br />
              <span style={{ width: "20px" }}>
                <img
                  alt="Forward Arrow"
                  src={require("../images/SVG/svg.svg")}
                  style={{ width: "20px" }}
                ></img>
              </span>
            </div>
          
        </div>
      </animated.div>
      </Link>

    </div>
  );
}

export default Proj;
